import React from "react";
import Navbar from "../Navbar/Navbar";
import { Card } from "antd";
import "./Main.css";
import clothe from "./sources/clothe.png";
import tours from "./sources/tours.png";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Main = () => {
  return (
    <div className="main-page">
      <Navbar />
      <div className="main-container">
        <div className="main-cards">
          <Link to="/music">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  style={{ height: "350px" }}
                  alt="example"
                  src="http://st-1.akipress.org/127/.storage/limon2/images/february2015/aea5f8bb7a5b50476c0bd49e6538efaa.jpg"
                />
              }
            >
              <Meta title="Musical instruments" />
            </Card>
          </Link>
        </div>

        <div className="main-cards">
          <Link to="/clothes">
            {" "}
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img style={{ height: "350px" }} alt="example" src={clothe} />
              }
            >
              <Meta title="Nomads clothes" />
            </Card>
          </Link>
        </div>

        <div className="main-cards">
          <Link to="/interior">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  style={{ height: "350px" }}
                  alt="example"
                  src="https://handmade.kg/wa-data/public/shop/products/00/webp/36/05/536/images/753/753.970.webp"
                />
              }
            >
              <Meta title="Interior" />
            </Card>
          </Link>
        </div>

        <div className="main-cards">
          <Link to="/tours">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img style={{ height: "350px" }} alt="example" src={tours} />
              }
            >
              <Meta title="Top tours" />
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
