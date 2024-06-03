import { fetchEntityById } from "@/api/fetchSingleEntity";
import { GeneralElementType } from "@/types/general";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import CivilizationEntityCard from "./detailType/civilization";
import StructureEntityCard from "./detailType/structure";
import { Civilization } from "@/types/civilizations";
import { Structure } from "@/types/structures";
import UnitEntityCard from "./detailType/unit";
import { Unit } from "@/types/units";
import { Button } from "@nextui-org/react";
import { APP_ROUTE_PATHS } from "@/constants/constants";

function EntityDetail() {
  const { entityType, entityName } = useParams();
  const [entity, setEntity] = useState<GeneralElementType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const element = await fetchEntityById(
          entityType || "",
          entityName || ""
        );
        setEntity(element);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [entityName, entityType]);

  const getEntityComponent = (entity: GeneralElementType) => {
    switch (entityType) {
      case "Civilization":
        return <CivilizationEntityCard element={entity as Civilization} />;
      case "Structure":
        return <StructureEntityCard element={entity as Structure} />;
      case "Unit":
        return <UnitEntityCard element={entity as Unit} />;
      default:
        return <></>;
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center w-screen min-h-screen bg-gray-800 p-6">
      <NavLink className="text-center w-full" to={APP_ROUTE_PATHS.HOME}>
        <Button
          className="text-lg font-semibold w-3/6 max-w-96"
          variant="shadow"
          size="lg"
          radius="md"
          color="secondary"
        >
          Ir atrás
        </Button>
      </NavLink>
      {entity && getEntityComponent(entity)}
    </div>
  );
}

export default EntityDetail;
