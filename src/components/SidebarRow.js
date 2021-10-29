import React from "react";
import "./SidebarRow.css";

function SidebarRow({ Icon, label }) {
  return (
    <div className="sidebarRow">
      {Icon && <Icon className="sidebarRow__icon" />}
      {Icon ? <h4>{label}</h4> : <p> {label}</p>}
    </div>
  );
}

export default SidebarRow;
