import {
  AudioOutlined,
  EllipsisOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./ProductCard.css";
import { Card, Rate } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        style={{ margin: "10px" }}
        className="card"
        hoverable
        cover={<img className="card_img" alt="example" src={item.image} />}
      >
        <Meta title={item.name} description={item.produced} />

        <div className="card_icons1">
          <Rate allowHalf defaultValue={2.5} />

          <EllipsisOutlined onClick={() => navigate(`/list/${item.id}`)} />
        </div>

        <div className="card_icons">
          <a href="/">
            <HeartOutlined />
          </a>
          <a href="/">
            <ShoppingCartOutlined />
          </a>
          <a href="/">
            <AudioOutlined />
          </a>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
