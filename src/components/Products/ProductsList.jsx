import { Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
// import CardProducts from "../CardProducts/CardProducts";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../Products/ProductCard";
import Search from "../Search/Search";
import "./ProductList.css";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, products, productsCount } = useContext(contextProducts);

  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [limit, setLimit] = useState(5);

  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([1, 1000000]);
  const location = useLocation();

  useEffect(() => {
    setSearchParams({
      type: location.pathname.slice(1, location.pathname.length),
      _page: page,
      _limit: limit,
      q: searchValue,
      title: title,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [page, limit, searchValue, price, title]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  console.log(products)

  return (
    <div>
      <Navbar />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
      />
      <div className="cards-by-type">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      {productsCount === 0 ? (
        <h1>Не найдено</h1>
      ) : (
        <div className="pagination">
          <Pagination
            total={+productsCount}
            current={+page}
            pageSize={+limit}
            defaultCurrent={1}
            onChange={(page, limit) => {
              setPage(page);
              setLimit(limit);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsList;
