import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppAxios from "../service/axios";

function Register() {
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
    AppAxios.post("/user", {
      phone,
      password,
    })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        setStatus("we have problem ...");
      });
  };

  return (
    <div>
      <div>Register</div>
      <div>
        <input type="text" value={phone} onChange={handleChangePhone} placeholder="Phone" />
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

export default Register;
