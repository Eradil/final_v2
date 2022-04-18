import React from "react";
import ContextProductsProvider from "./context/contextProducts";
import Routing from "./Routing";
// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import CartContextProvider from "./context/cartContext";
import FavoriteContextProvider from "./context/favoriteContext";
import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div>
      <FavoriteContextProvider>
        <ContextProductsProvider>
          <CartContextProvider>
            <Routing />
            <Footer />
          </CartContextProvider>
        </ContextProductsProvider>
      </FavoriteContextProvider>
    </div>
  );
};

export default App;
