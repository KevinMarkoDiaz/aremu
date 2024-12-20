import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import Root from "../pages/Root";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        index: true,
      },
      {
        path: "home",
        element: <Home />,
        index: true,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productName",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
