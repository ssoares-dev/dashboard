import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AuthRoutes;