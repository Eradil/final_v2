import React from "react";
import ContextProductsProvider from "./context/contextProducts";
import Routing from "./Routing";
// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div>
      <ContextProductsProvider>
        {/* <Navbar /> */}
        <Routing />
      </ContextProductsProvider>
    </div>
  );
};

export default App;
