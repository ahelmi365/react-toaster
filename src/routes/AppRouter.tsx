import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import MainLayout from "@layouts/MainLayout";
// pages
import Home from "@pages/Home/Home";
import Categories from "@pages/Categories/Categories";
import Products from "@pages/Products/Products";
import AboutUs from "@pages/AboutUs/AboutUs";
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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

const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
