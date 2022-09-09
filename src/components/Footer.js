import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-cont">
      <NavLink to={"/page2"}>
        <h2>Go to page 2 {">"}</h2>
      </NavLink>
    </div>
  );
};

export default Footer;
