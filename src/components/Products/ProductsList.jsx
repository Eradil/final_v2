import { Input, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import Filters from "../Filters/Filters";
import Navbar from "../Navbar/Navbar";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductsList = () => {
  const { getProducts, products, productsCount } = useContext(contextProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([1, 1000000]);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: searchValue,
      name: name,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: limit,
    });
  }, [searchValue, name, price, page, limit]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  console.log(products);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="list_title">
          <h2>
            The Kyrgyz people have used various musical instruments since
            ancient times. Music accompanied the Kyrgyz in various life
            situations - from military campaigns and meeting guests to solemn
            festivities and commemorations.
          </h2>
        </div>
        <div className="search_filters">
          <div className="products-search">
            <Input.Search
              placeholder="Search..."
              className="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div
              className="filter_txt"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
            </div>

            {showFilters ? (
              <Filters
                brand={name}
                setBrand={setName}
                price={price}
                setPrice={setPrice}
                className="filters"
              />
            ) : null}
          </div>
        </div>

        <div className="product_list">
          {products.map((item) => (
            <div key={item.id}>
              <ProductCard key={item.id} item={item} />
            </div>
          ))}
        </div>
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
      </div>
    </div>
  );
};

export default ProductsList;
