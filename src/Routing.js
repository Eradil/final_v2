
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminProduct from "./components/AdminProduct/AdminProduct";
import Home from "./components/Home/Home";


const Routing = () => {
  let PUBLIC_ROUTE = [
    
    {
      link: "/",
      element: <Home />,
      id: 2,
    },
    {
      link: "/admin",
      element: <AdminProduct />,
      id: 33,
    },
  ];
  // let ADMIN_ROUTE = [
  //   {
  //     link: "/admin",
  //     element: <AdminProduct />,
  //     id: 1,
  //   },
  // ];


  return (
    <div>
      <BrowserRouter>
        <Routes>
          {PUBLIC_ROUTE.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {/* {ADMIN_ROUTE.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
