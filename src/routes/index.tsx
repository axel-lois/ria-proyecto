import { RouteObject, useRoutes } from "react-router-dom";
import Root from "@/components/root/root";
import Home from "@/components/home/home";
import EntityDetail from "@/components/detail/detail";

const APP_ROUTE_PATHS = {
  INDEX: "/",
  HOME: "/home",
  ENTITY_DETAIL: "home/:entityName",
};

const routes: RouteObject[] = [
  {
    path: APP_ROUTE_PATHS.INDEX,
    element: <Root />,
  },
  {
    path: APP_ROUTE_PATHS.HOME,
    element: <Home />,
  },
  {
    path: APP_ROUTE_PATHS.ENTITY_DETAIL,
    element: <EntityDetail />,
  },
];

export const AppRoutes = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};
