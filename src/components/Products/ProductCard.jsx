import {
  AudioOutlined,
  EllipsisOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./ProductCard.css";
import { Card, Rate } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const { Meta } = Card;

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  console.log(item);
  return (
    <div>
      <Card
        style={{ margin: "10px" }}
        className="product_card"
        hoverable
        cover={
          <img className="product_card_img" alt="example" src={item.image} />
        }
      >
        <Meta title={item.name} description={item.produced} />
        <p>{item.price}com</p>

        <div className="card_icons1">
          <Rate allowHalf defaultValue={2.5} />
          <EllipsisOutlined onClick={() => navigate(`/product/${item.id}`)} />
        </div>
        <div className="product_card_icons">
          <Link to={"#"}>
            <HeartOutlined />
          </Link>
          <Link to={"#"}>
            <ShoppingCartOutlined />
          </Link>
          <Link to={"#"}>
            <AudioOutlined />
          </Link>
        </div>
      </Card>
      {/* <div className="card_descr">
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div> */}
    </div>
  );
};

export default ProductCard;
