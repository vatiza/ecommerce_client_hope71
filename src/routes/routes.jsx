import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/main_layouts";
import HomePage from "../pages/home/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
export default routes;
