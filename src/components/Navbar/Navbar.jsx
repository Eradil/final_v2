import { Menu } from "antd";
import {
  HomeOutlined,
  LockOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useContext, useEffect } from "react";
import "./Navbar.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { favoriteContext } from "../../context/favoriteContext";
import { useAuthContext } from "../../context/authContext";

const Navbar = () => {
  // const { cartLength } = useContext(cartContext);
  // const { favoriteLength } = useContext(favoriteContext);
  const { user, checkAuth, logout } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
    <div className="navbar">
      <div className="header_logo">
        <h1 className="logo_txt">
          Kyrgyz<span>Buy</span>
        </h1>
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

          {user ? (
            <h2>
              User: {user}{" "}
              <Menu.Item
                style={{ color: "black", listStyle: "none" }}
                icon={<UserOutlined />}
                onClick={logout}
              >
                Logout
              </Menu.Item>
            </h2>
          ) : location.pathname === "/signup" ? (
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<UserOutlined />}
              onClick={() => navigate("/signin")}
            >
              Login
            </Menu.Item>
          ) : (
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<UserOutlined />}
              onClick={() => navigate("/signup")}
            >
              Register
            </Menu.Item>
          )}

          <Link to={"/admin"}>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<LockOutlined />}
            >
              Admin
            </Menu.Item>
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
