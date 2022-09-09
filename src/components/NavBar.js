import React, { useState } from "react";
import Time from "./Time";

const NavBar = props => {

  return (
    <div className="navbar">
      <div className="navbar-position-container">
        <h3>Position:</h3>
        <input
          type="radio"
          name="center"
          value={"center"}
          checked={props.position === "center"}
          onClick={() => props.handlePositionChange("center")}
        />
        <label>Center</label>
        <input
          type="radio"
          name="lower_right"
          value={"lower_right"}
          checked={props.position === "lower_right"}
          onClick={() => props.handlePositionChange("lower_right")}
        />
        <label>Lower Right</label>
      </div>
      <div className="navbar-right">
        <h3>Press Esc key to hide the window. Enter to show it again.</h3>
        <Time />
      </div>
    </div>
  );
};

export default NavBar;
