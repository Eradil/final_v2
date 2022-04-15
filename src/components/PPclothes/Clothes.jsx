import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import CardProducts from "../CardProducts/CardProducts";
import Navbar from "../Navbar/Navbar";
import "./Clothes.css"

const Clothes = () => {
  const { products, getProducts } = useContext(contextProducts);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({ type: "clothes" });
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  return (
    <div>
      <Navbar />
      <div className="cards-by-type">
        {products.map((item) => (
          <CardProducts key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Clothes;
