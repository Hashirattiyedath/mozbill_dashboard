import React from "react";
import DashLeft from './DashLeft';
import Report from '../Report';
import DashboardData from "../DashboardData";

const Dashboard = () => {
  return (
    <>
      <section className="admin_panel">
        <DashLeft />
        <div className="dashboard_right" >
        <Report/>
        <DashboardData name="value"/>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
