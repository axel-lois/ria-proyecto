import { useEffect, useState } from "react";
import Filters from "@/components/ui/filters";
import EntityCard from "../ui/entityCard";
import Pagination from "@/components/ui/pagination";
import { GeneralElementType } from "@/types/general";
import { useNavigate } from "react-router-dom";
import { fetchDataWithCache } from "@/api/fetchEntities";
import { BASE_URL } from "@/constants/constants";

const Home = () => {
  const navigate = useNavigate();
  const [elements, setElements] = useState<GeneralElementType[]>([]);
  const [filteredElements, setFilteredElements] = useState<
    GeneralElementType[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const elementsPerPage = 16;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allElements = await fetchDataWithCache([
          `${BASE_URL}/civilizations`,
          `${BASE_URL}/units`,
          `${BASE_URL}/structures`,
        ]);
        setElements(allElements);
        setFilteredElements(allElements);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Apply filtering logic
    let filtered: GeneralElementType[] = [...elements];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((element) =>
        element.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (category) {
      filtered = filtered.filter((element) => element.type === category);
    }

    // Apply sorting logic
    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredElements(filtered);
  }, [elements, searchTerm, category, sortOrder]);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order as "asc" | "desc" | "");
    setCurrentPage(1); // Reset to first page when sort order changes
  };

  const resetFilters = () => {
    setSearchTerm("");
    setCategory("");
    setSortOrder("");
  };

  const handleNavigateEntity = (element: GeneralElementType) => {
    const typeParam = element.type;
    const idParam = element.type === "Structure" ? element.id : element.name;
    navigate(`/home/${typeParam}/${idParam}`);
  };

  // Paginate current filtered elements
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = filteredElements.slice(
    indexOfFirstElement,
    indexOfLastElement
  );
  const totalPages = Math.ceil(filteredElements.length / elementsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <div className="bg-gray-800 gap-10 flex flex-col min-w-screen min-h-screen items-center">
        <div className="text-white text-center mt-10">
          <h1 className="text-3xl">Age of empires APP</h1>
        </div>

        <Filters
          searchTerm={searchTerm}
          category={category}
          sortOrder={sortOrder}
          onResetFilters={resetFilters}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          onSortChange={handleSortChange}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />

        <main className="elements gap-10 flex justify-between w-[85%] flex-wrap mb-[100px]">
          {currentElements.map((element, index) => (
            <EntityCard
              handleNavigateEntity={handleNavigateEntity}
              key={index}
              element={element}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default Home;
