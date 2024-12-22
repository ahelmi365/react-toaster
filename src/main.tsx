import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layout
import MainLayout from "@layouts/MainLayout";
// pages
import Home from "@pages/Home/Home";
import Categories from "@pages/Categories/Categories";
import Products from "./pages/Products/Products";
import AboutUs from "@pages/AboutUs/AboutUs";

// css
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/products/:prefix",
        element: <Products />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
