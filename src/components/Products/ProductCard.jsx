import {
  AudioOutlined,
  EllipsisOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./ProductCard.css";
import { Card, Rate } from "antd";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { favoriteContext } from "../../context/favoriteContext";
const { Meta } = Card;

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const { addProductToFavorite, checkItemInFavorite } =
    useContext(favoriteContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const [checkItemX, setCheckItemX] = useState(checkItemInFavorite(item.id));
  const navigate = useNavigate();
  console.log(item);
  return (
    <div>
      <Card
        style={{ margin: "10px" }}
        className="card"
        hoverable
        cover={
          <img className="product_card_img" alt="example" src={item.image} />
        }
      >
        <Meta title={item.name} description={item.produced} />

        <div className="card_icons">
          <Link to={"#"}>
            <HeartOutlined
              style={{ fontSize: "25px", color: checkItemX ? "red" : "white" }}
              onClick={() => {
                addProductToFavorite(item);
                setCheckItemX(checkItemInFavorite(item.id));
              }}
            />
          </Link>
          <Link to={"#"}>
            <ShoppingCartOutlined
              style={{ fontSize: "25px", color: checkItem ? "red" : "white" }}
              onClick={() => {
                addProductToCart(item);
                setCheckItem(checkItemInCart(item.id));
              }}
            />
          </Link>
          <Link to={"#"}>
            <AudioOutlined />
          </Link>
        </div>
      </Card>
      <div className="card_descr">
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
      <div className="card_icons1">
        <Rate allowHalf defaultValue={2.5} />
        <EllipsisOutlined onClick={() => navigate(`/product/${item.id}`)} />
        {/* 
        <p style={{ color: "black" }}>{item.name}</p> */}
      </div>
    </div>
  );
};

export default ProductCard;
