import React from "react";
import styles from "./dashboard.module.scss";
import { Outlet } from "react-router-dom";
import NavigationPage from "../../dashboard/NavigationPage";
import DashboardBody from "../../dashboard/DashboardBody";

function DashboardPageLayout({ children }) {
  return (
    <div className={styles.container}>
      <NavigationPage />
      <DashboardBody />
    </div>
  );
}

export default DashboardPageLayout;
