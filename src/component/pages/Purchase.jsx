import React from "react";
import DashLeft from './DashLeft';
import Report from '../Report';

const Purchase = () => {
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

export default Purchase;
