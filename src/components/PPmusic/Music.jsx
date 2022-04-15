import React, { useContext, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import CardProducts from "../CardProducts/CardProducts";
import Navbar from '../Navbar/Navbar';
import "./Music.css"

const Music = () => {
    const { products, getProducts } = useContext(contextProducts);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({ type: "music" });
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
    return (
        <div className='card-music'>
            <Navbar />
            {products.map((item)=><CardProducts key={item.id} item={item}/>)}
        </div>
    );
};

export default Music;