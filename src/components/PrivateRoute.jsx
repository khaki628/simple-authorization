import React, { useEffect, useState } from "react";
import AppAxios from "../service/axios";
import { useNavigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    AppAxios.post("/authorize", {
      token,
    })
      .then((res) => {
        console.log(res);
        setAuth(true);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return loading ? "loading ..." : auth ? children : navigate("/login");
}
export default PrivateRoute;
