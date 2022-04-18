import axios from "axios";
import React, { useReducer, useState } from "react";
//
export const contextProducts = React.createContext();
//
//
//cases
const CASE_GET_PRODUCTS = "CASE_GET_PRODUCTS";
const CASE_GET_ONE_PRODUCT = "CASE_GET_ONE_PRODUCT";
// cases end
//
let API = "http://localhost:8000/products";
//
const INIT_STATE = {
  products: [],
  oneProduct: {},
  productsCount: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_PRODUCTS:
      console.log(action);

      return {
        ...state,
        products: action.payload.data,
        productsCount: action.payload.headers["x-total-count"],
      };
    case CASE_GET_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload.data,
      };
    default:
      return state;
  }
};

const ContextProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [loading, setLoading] = useState();
  async function getProducts() {
    setLoading(true);
    let result = await axios(`${API}${window.location.search}`);
    console.log(result, "res");
    dispatch({
      type: CASE_GET_PRODUCTS,
      payload: result,
    });
    setLoading(false);
  }

  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    console.log(id);
    getProducts();
  }
  async function getOneProduct(id) {
    let result = await axios(`${API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_PRODUCT,
      payload: result,
    });
  }
  async function editProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  return (
    <div>
      <contextProducts.Provider
        value={{
          products: state.products,
          oneProduct: state.oneProduct,
          productsCount: state.productsCount,
          loading,
          getProducts,
          deleteProduct,
          createProduct,
          getOneProduct,
          editProduct,
        }}
      >
        {children}
      </contextProducts.Provider>
    </div>
  );
};

export default ContextProductsProvider;
