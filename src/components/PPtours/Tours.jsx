import React, { useContext, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import CardProducts from "../CardProducts/CardProducts";
import Navbar from '../Navbar/Navbar';

const Tours = () => {
    const { products, getProducts } = useContext(contextProducts);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({ type: "tours" });
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
    return (
        <div>
            <Navbar />
            {products.map((item)=><CardProducts key={item.id} item={item}/>)}
        </div>
    );
};

export default Tours;