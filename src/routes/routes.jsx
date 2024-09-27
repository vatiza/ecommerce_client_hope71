import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/main_layouts";
import HomePage from "../pages/home/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "*",
        element: (
          <h1 className=" text-center text-5xl font-Alata text-violet-800">
            404 Page Not Found
          </h1>
        ),
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
export default routes;
