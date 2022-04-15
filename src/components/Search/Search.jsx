import { Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import Filters from "../Filters/Filters";

const Search = ({
  searchValue,
  setSearchValue,
  price,
  setPrice,
  name,
  setName,
}) => {
  // const { getProducts } = useContext(contextProducts);
  // const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // useEffect(() => {
  //   setSearchParams({
  //     q: searchValue,
  //     name: name,
  //     price_gte: price[0],
  //     price_lte: price[1],
  //   });
  // }, [searchValue, name, price]);
  // useEffect(() => {
  //   getProducts();
  // }, [searchParams]);
  return (
    <div>
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
              name={name}
              setName={setName}
              price={price}
              setPrice={setPrice}
              className="filters"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Search;
