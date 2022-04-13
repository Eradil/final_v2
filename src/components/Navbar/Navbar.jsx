import { Menu } from "antd";
import {
  HomeOutlined,
  LockOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React from "react";
import "./Navbar.css";
import eagle from "./sources/eagle.jpeg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="header_logo">
        <img id="eagle" src={eagle} alt="" />
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
          <Link to={"/product"}>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<ShoppingCartOutlined />}
            >
              Store
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
          <Link to={"/admin"}>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<LockOutlined />}
            >
              Admin
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
        </Menu>
      </div>
      <div className="header_icons">Logo logo</div>
    </div>
  );
};
// }

export default Navbar;
