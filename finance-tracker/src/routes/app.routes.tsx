import React from "react";
import { Routes, Route } from "react-router-dom";
import List from "../Pages/List";
import Dashboard from "../Pages/Dashboard";
import Layout from "../components/Layout";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
    <Routes>
        <Route path="/list/:type" element={<List/>} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </Layout>
  );
};

export default AppRoutes;