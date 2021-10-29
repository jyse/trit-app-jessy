import React from "react";
import logo from "../images/trit-logo.png";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="logo" />
      <SidebarRow Icon={HomeIcon} label="Home" />
      <SidebarRow Icon={PeopleOutlineIcon} label="Artists" />
      <SidebarRow Icon={ControlPointIcon} label="Create a Playlist" />
    </div>
  );
}

export default Sidebar;
