import React from "react";
import DashLeft from './DashLeft';
import Report from '../Report';

const Expense = () => {
  return (
    <>
      <section className="admin_panel">
        <DashLeft />
        <div className="dashboard_right">
            <Report />
        </div>
      </section>
    </>
  );
};

export default Expense;
