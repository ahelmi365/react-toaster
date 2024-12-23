import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "@pages/Categories/Categories";
import Register from "@pages/Register/Register";
import Products from "@pages/Products/Products";
// layout
import MainLayout from "@layouts/MainLayout";
import AboutUs from "@pages/AboutUs/AboutUs";
import Login from "@pages/Login/Login";
import Error from "@pages/Error/Error";
// pages
import Home from "@pages/Home/Home";
import Cart from "@pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-zA-z]+$/.test(params.prefix!)
          ) {
            throw new Response("Bad Request", {
              status: 400,
              statusText: "Category not found",
            });
          }
          return true;
        },
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
