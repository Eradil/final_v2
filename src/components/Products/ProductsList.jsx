import React, { useContext, useEffect } from "react";
import { contextProducts } from "../../context/contextProducts";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductsList = () => {
  const { getProducts, products } = useContext(contextProducts);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      <div className="list_title">
        <h2>
          The Kyrgyz people have used various musical instruments since ancient
          times. Music accompanied the Kyrgyz in various life situations - from
          military campaigns and meeting guests to solemn festivities and
          commemorations.
        </h2>
      </div>
      <div className="product_list">
        {products.map((item) => (
          <div key={item.id}>
            <ProductCard key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
