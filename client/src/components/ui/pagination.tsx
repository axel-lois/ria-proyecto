import { Button } from "@nextui-org/react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
}) => {
  return (
    <div className="pagination justify-center flex w-full items-center text-white">
      <Button onClick={prevPage} disabled={currentPage === 1 || !totalPages}>
        Anterior
      </Button>
      <span className="mx-2">
        Página {currentPage} de {`${totalPages || 1}`}
      </span>
      <Button onClick={nextPage} disabled={currentPage === totalPages || !totalPages}>
        Siguiente
      </Button>
    </div>
  );
};

export default Pagination;
