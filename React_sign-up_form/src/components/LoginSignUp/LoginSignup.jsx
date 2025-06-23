import React from "react";
import "./loginSignup.css";

import user_icon from "../assets/person.png";
import password_icon from "../assets/password.png";
import email_icon from "../assets/email.png";

const loginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" />
        </div>
      </div>
      <div className="forgot-password">Lost Pasword? <span>Click here</span></div>
      <div className="submit-container">
        <div className="submit">Sign-up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default loginSignup;
