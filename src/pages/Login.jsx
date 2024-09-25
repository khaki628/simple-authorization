import { useNavigate } from "react-router-dom";
import axios from "../service/axios";
import React, { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("please enter inputs");

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const _phone = phone.trim();
    const _password = password.trim();

    axios
      .post("/login", {
        phone: _phone,
        password: _password,
      })
      .then((res) => {
        const token = res.data.accessToken;
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setStatus("username or password are invalid");
      });
  };

  return (
    <div>
      <div>login</div>
      <div>
        <input
          type="text"
          value={phone}
          onChange={handleChangePhone}
          placeholder="Phone"
        />
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Submit</button>
        {status}
      </div>
    </div>
  );
}

export default Login;
