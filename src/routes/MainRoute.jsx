import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../components/layout/Dashboard";
import Login from "../pages/Login";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

const NotFound = () => (
  <div
    style={{
      color: "black",
    }}
  >
    Page not found
  </div>
);
