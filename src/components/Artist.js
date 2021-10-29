import React from "react";
import "./Artist.css";
import logo from "../images/trit-logo.png";

function Artist({ name }) {
  return (
    <div className="artist">
      <div className="artist__picture">
        <img src={logo} alt="picture" />
      </div>
      <div className="artist__name">
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default Artist;
