import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


const Report = (props) => {
  const [report, setRoport] = useState(false);

  const reportBtnEvent = () => {
    setRoport(!report);
  };


  return (
    <div className="report_wrapper">
      <div className={report ? "report_icon active" : "report_icon"} onClick={reportBtnEvent}>
        {report ? <FaBars /> : <FaTimes />}
      </div>
      
      <div className= {report ? "report_section" : "report_section active" }>
        <div className="sale_report">
          <h3>Sale</h3>
          <p>10</p>
        </div>
        <div className="totalamnt_report">
          <h3>Total Amount</h3>
          <p>20351</p>
        </div>
        <div className="recieved_report">
          <h3>Recieved</h3>
          <p>5697</p>
        </div>
        <div className="balance_report">
          <h3>Balance</h3>
          <p>975</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
