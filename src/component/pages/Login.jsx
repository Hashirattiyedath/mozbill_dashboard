import React, {useState} from "react";
import Logo from "../../img/logo.png";
import TopSvg from "../../img/top_svg.svg";
import BottomSvg from "../../img/bottom_svg.svg";
import {NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";



const Login = () => {

  const [name, setName] = useState("");

  const nameEvent = (event)=> {
    setName(event.target.value)
  }

  const [pass, setpass] = useState("");

  const passEvent = (event)=> {
    setpass(event.target.value)
  }

  let history = useHistory();
  const loginSubmit = (event)=> {
    event.preventDefault();
    history.push({
      pathname: '/dashboard',
      passName:  name
    })
  }


  return (
    <>
      <section className="login_section">
        <img src={TopSvg} className="top_svg img-fluid"  alt=""/>
        <img src={BottomSvg} className="botton_svg img-fluid"  alt=""/>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="logo">
                <img src={Logo} className="img-fluid" alt="" />
              </div>

              <div className="login_form">
                <form action="helloo" className="login" onSubmit={loginSubmit}>
                  <fieldset>
                      <legend className="legend">Login</legend>
                      <div className="input">
                          <input type="text" placeholder="Username" onChange={nameEvent} required />
                          <span><i className="fa fa-envelope-o"></i></span>
                      </div>
                      
                      <div className="input">
                          <input type="password" placeholder="Password" onChange={passEvent} required />
                          <span><i className="fa fa-lock"></i></span>
                      </div>
                      
                      <button type="submit" className="submit"><i className="fa fa-long-arrow-right"></i></button>
                    </fieldset>
                  </form>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;


