import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import "./CardProducts.css"

const CardProducts = ({ item }) => {
  return (
    <div className="cards-render">
      <Card
        hoverable
        style={{ width: 240, margin:"40px" }}
        cover={
          <img 
            style={{ height: "350px" }} 
            alt="example" 
            src={item.image} 
          />
        }
      >
        <Meta title={item.name} description={item.price} />
      </Card>
    </div>
  );
};

export default CardProducts;
