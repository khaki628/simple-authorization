import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      Dashboard <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Dashboard;
