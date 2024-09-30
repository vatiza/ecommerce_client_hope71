import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/main_layouts";
import HomePage from "../pages/home/home";
import ProductLayout from "../layouts/products_layouts";
import AllProducts from "../pages/all_products/all_products";
import ProductsDetails from "../pages/product_details/product_details";

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
      {
        path: ":product/:id",
        element: <ProductsDetails />,
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.id}`),
      },
    ],
  },
  //products layouts and routes
  {
    path: "/products",
    element: <ProductLayout />,
    children: [
      {
        path: "all-products",
        element: <AllProducts />,
      },
    ],
  },
]);
export default routes;
