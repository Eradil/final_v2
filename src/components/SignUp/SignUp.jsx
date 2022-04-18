import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import Navbar from "../Navbar/Navbar";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, error } = useAuthContext();
  console.log(email, password);

  function handleRegister(email, password) {
    signUp({ email, password }, navigate);
  }
  return (
    <div>
      <Navbar />
      <div className="signUp">
        <h1>Register</h1>
        {error ? <h2>{error}</h2> : null}
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              style={{ width: "100%" }}
              onClick={() => handleRegister(email, password)}
              type="primary"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
