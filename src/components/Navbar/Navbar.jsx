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

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="header_logo"><img id="eagle" src={eagle} alt="" /></div>
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
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<HomeOutlined />}
            >
              Home
            </Menu.Item>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<ShoppingCartOutlined />}
            >
              Store
            </Menu.Item>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<PhoneOutlined />}
            >
              Contacts
            </Menu.Item>

            <a href="/admin">
              <Menu.Item
                style={{ color: "black", listStyle: "none" }}
                icon={<LockOutlined />}
              >
                Admin
              </Menu.Item>
            </a>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<LockOutlined />}
            >
              Sign In
            </Menu.Item>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<LockOutlined />}
            >
              Register
            </Menu.Item>
          </Menu>
        </div>
        <div className="header_icons">Logo logo</div>
      </div>
    );
  }
}

export default Navbar;
