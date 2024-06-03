import React from "react";
import { SearchIcon } from "@/assets/SearchIcon";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { GrPowerReset } from "react-icons/gr";

interface FiltersProps {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
  category: string;
  onCategoryChange: (category: string) => void;
  sortOrder: "asc" | "desc" | "";
  onSortChange: (sortOrder: "asc" | "desc") => void;
  onResetFilters: () => void;
}
const Filters: React.FC<FiltersProps> = ({
  onSearchChange,
  onCategoryChange,
  onSortChange,
  onResetFilters,
  searchTerm,
  category,
  sortOrder,
}) => {
  const categoryOptions = [
    { value: "", label: "Todas" },
    { value: "Civilization", label: "Civilization" },
    { value: "Unit", label: "Unit" },
    { value: "Structure", label: "Structure" },
  ];

  const sortOptions = [
    { value: "asc", label: "A-Z" },
    { value: "desc", label: "Z-A" },
  ];

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onCategoryChange(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value as "asc" | "desc");
  };

  const handleResetFilters = () => {
    onResetFilters();
  };

  return (
    <div className="filters mt-[30px] gap-[10px] w-[85%] h-[30%] justify-center flex flex-col">
      <div className="search-input">
        <Input
          color="default"
          label="Buscar"
          isClearable
          radius="lg"
          value={searchTerm}
          placeholder="Buscar una entidad..."
          onChange={(e) => onSearchChange(e.target.value)}
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>

      <div className="flex w-full justify-between gap-10 items-center">
        <Select
          selectedKeys={[category]}
          label="Filtrar por categoría"
          placeholder="Seleccione una opción..."
          onChange={handleCategoryChange}
        >
          {categoryOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          selectedKeys={[sortOrder]}
          label="Filtrar por orden alfabético"
          placeholder="Seleccione una opción..."
          onChange={handleSortChange}
        >
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Button onClick={handleResetFilters}>
          <GrPowerReset />
        </Button>
      </div>
    </div>
  );
};

export default Filters;
