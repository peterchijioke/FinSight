import React from "react";
import styles from "./css/DashboardBody.module.scss";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

function DashboardBody() {
  return (
    <div className={styles.container}>
      <DashboardHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
export default DashboardBody;
