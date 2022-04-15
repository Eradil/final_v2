import { Menu } from "antd";
import {
  HeartOutlined,
  HomeOutlined,
  LockOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import React, { useContext } from "react";
import "./Navbar.css";
// import eagle from "./sources/eagle.svg";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { favoriteContext } from "../../context/favoriteContext";

const Navbar = () => {
  // const navigate = useNavigate();
  const { cartLength } = useContext(cartContext);
  const { favoriteLength } = useContext(favoriteContext);

  return (
    <div className="navbar">
      <div className="header_logo">
        {/* <img id="eagle" src={eagle} alt="" /> */}
      </div>
      <div className="navbar__inner">
        <Menu
          style={{
            width: "100%",
            height: "80px",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            fontSize: "2rem",
            background: "none",
          }}
          mode="horizontal"
        >
          <Link to={"/"}>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<HomeOutlined />}
            >
              Home
            </Menu.Item>
          </Link>
          <Link to={"/main"}>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<ShoppingCartOutlined />}
            >
              Category
            </Menu.Item>
          </Link>
          <Link to={"/contacts"}>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<PhoneOutlined />}
            >
              Contacts
            </Menu.Item>
          </Link>

          <Link to={"/signin"}>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<LockOutlined />}
            >
              Sign In
            </Menu.Item>
          </Link>
          <Link to={"/register"}>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<LockOutlined />}
            >
              Register
            </Menu.Item>
          </Link>
          <Link to={"/admin"}>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<LockOutlined />}
            >
              Admin
            </Menu.Item>
          </Link>
          <Link to={"/favorite"}>
            {/* <Badge count={+favoriteLength}> */}
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<HeartOutlined />}
            >
              Favorite
            </Menu.Item>
            {/* </Badge> */}
          </Link>
          <Link to={"/cart"}>
            {/* <Badge count={+cartLength}> */}
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<ShoppingOutlined />}
            >
              Cart
            </Menu.Item>
            {/* </Badge> */}
          </Link>
        </Menu>
      </div>
    </div>
  );
};
// }

export default Navbar;
