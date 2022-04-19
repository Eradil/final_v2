import { Menu } from "antd";
import {
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import "./Navbar.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
// import { cartContext } from "../../context/cartContext";
// import { favoriteContext } from "../../context/favoriteContext";
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
            <Menu.Item style={{ color: "black", listStyle: "none" }}>
              Home
            </Menu.Item>
          </Link>
          <Link to={"/main"}>
            <Menu.Item style={{ color: "black", listStyle: "none" }}>
              Category
            </Menu.Item>
          </Link>
          <Link to={"/contacts"}>
            <Menu.Item style={{ color: "black", listStyle: "none" }}>
              Contacts
            </Menu.Item>
          </Link>
          <Link to={"/admin"}>
            <Menu.Item style={{ color: "black", listStyle: "none" }}>
              Admin
            </Menu.Item>
          </Link>

          <Link to={"/favorite"}>
            {/* <Badge count={+cartLength}> */}
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<HeartOutlined />}
            ></Menu.Item>
            {/* </Badge> */}
          </Link>
          <Link to={"/cart"}>
            {/* <Badge count={+cartLength}> */}
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<ShoppingOutlined />}
            ></Menu.Item>
            {/* </Badge> */}
          </Link>
          {/* <div style={{ display: "flex", alignItems: "center" }}> */}
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
          {/* </div> */}
        </Menu>
      </div>
    </div>
  );
};
// }

export default Navbar;
