import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "../../img/logo.png";
import Avatar from "../../img/avatar.jpg";
import { MdDashboard } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { BsWallet } from "react-icons/bs";
import { FaAccusoft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";

const DashLeft = ()=> {
    return (
        <>
       <div className="dashboard_left">
          <ul className="darshbord_links p-0 m-0">
            <li className="client_profile">
              <div className="avatar">
                <img src={Avatar} alt="" />
              </div>
              <div className="client_detail">
                <h4>Amrudesh</h4>
                <p>8089805972</p>
              </div>
            </li>
            <li className="dsh_link">
              <MdDashboard className="dash_icon" />
              <NavLink activeClassName="active_dash" exact to='/dashboard'>Dashboard</NavLink>
            </li>
            <li className="dsh_link">
              <GiReceiveMoney className="dash_icon" />
              <NavLink activeClassName="active_dash" exact to='/sale'>Sale</NavLink>
            </li>
            <li className="dsh_link">
              <FiShoppingCart className="dash_icon" />
              <NavLink activeClassName="active_dash" exact to='/purchase'>Purchase</NavLink>

            </li>
            <li className="dsh_link">
              <BsWallet className="dash_icon" />
              <NavLink activeClassName="active_dash" exact to='/expense'>Expense</NavLink>
            </li>
            <li className="dsh_link">
              <FaAccusoft className="dash_icon" />
              <a href="#">Inventors</a>
            </li>
            <li className="dsh_link">
              <CgProfile className="dash_icon" />
              <a href="#">Customer</a>
            </li>
            <li className="dsh_link">
              <HiOutlineDocumentReport className="dash_icon" />
              <a href="#">Report</a>
            </li>
            <li className="logo_link">
              <a href="#">
                <img src={Logo} className="img-fluid" alt="" />
                <h3>MOSBILL</h3>
              </a>
            </li>
          </ul>
        </div>
        </>
    )
}

export default DashLeft;