import { useParams } from "react-router-dom";

function EntityDetail() {
  const { entityName } = useParams();

  return <>Pagina de detalle de una entidad: {entityName}</>;
}

export default EntityDetail;
