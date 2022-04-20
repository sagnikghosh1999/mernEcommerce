import React from "react";
import { Link } from "react-router-dom";
import profile from "../../../images/Profile.png";
import "./Header.css";

const LoginOption = () => {
  return (
    <div>
      <Link to="/login">
        <img className="loginOption" src={profile} alt="profile" />
      </Link>
    </div>
  );
};

export default LoginOption;
