import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import "./Navbar2.css";

const Navbar2 = () => {
  const { user, checkAuth, logout } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);
  return (
    <div>
      <div className="user-info">
        
        {user ? (
        <h2 style={{ display: "flex" }}>
          {user} <button onClick={logout} style={{marginLeft:"15px", marginRight:"45px"}}>Logout</button>
        </h2>
         ) : location.pathname === "/signup"
         ? (
        <button onClick={() => navigate("/signin")}>Login</button>
        ) : (
            <button onClick={() => navigate("/signin")} style={{marginRight:"45px"}}>Login</button>
        // <button onClick={() => navigate("/signup")}>Register</button>
        )}
        


        {/* <Menu
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
          {user ? (
            <h2 style={{display:"flex"}}>
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
        </Menu> */}
      </div>
    </div>
  );
};

export default Navbar2;
