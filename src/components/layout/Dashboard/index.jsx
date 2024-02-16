import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import DashboardPageLayout from "./DashboardPageLayout";

export default function index() {
  const auth = { token: true };
  return auth.token ? <DashboardPageLayout /> : <Navigate to="/login" />;
}
