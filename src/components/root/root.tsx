import { APP_ROUTE_PATHS } from "@/constants/constants";
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

function Root() {
  return (
    <div className="gap-12 flex flex-col items-center justify-center h-screen w-screen">
      <h2 className="text-white text-2xl">Bienvenido a nuestra aplicación!</h2>
      <NavLink className="text-center w-full" to={APP_ROUTE_PATHS.HOME}>
        <Button
          className="text-lg font-semibold w-3/6 max-w-96"
          variant="shadow"
          size="lg"
          radius="md"
          color="secondary"
        >
          Entrar
        </Button>
      </NavLink>
    </div>
  );
}

export default Root;
