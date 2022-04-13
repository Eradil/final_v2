import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminProduct from "./components/AdminProduct/AdminProduct";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductsList from "./components/Products/ProductsList";

const Routing = () => {
  let PUBLIC_ROUTE = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/product",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/details/:id",
      element: <Details />,
      id: 3,
    },
    // {
    //   link: "/details/:id",
    //   element: <Details />,
    //   id: 3,
    // },
  ];
  let ADMIN_ROUTE = [
    {
      link: "/admin",
      element: <AdminProduct />,
      id: 1,
    },
  ];

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {PUBLIC_ROUTE.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {ADMIN_ROUTE.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
