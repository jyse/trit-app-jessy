import React, { useState, useEffect } from "react";
import "./Header.css";
import { IconButton, Avatar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import { setArtists } from "../features/artistsSlice";
import { selectUserName, selectUserPhoto } from "../features/userSlice";

function Header() {
  const [input, setInput] = useState("");
  const [userImage, setImageUser] = useState();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setArtists({ searchTerm: input }));
    setInput("");
  };

  useEffect(() => {
    if (userPhoto) {
      setImageUser(userPhoto);
    }
  });

  return (
    <div className="header">
      <div className="header__arrows">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <IconButton>
          <ArrowForwardIcon />
        </IconButton>
      </div>
      <div className="header__searchBar">
        <SearchOutlinedIcon />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search artist"
          />
          <button type="submit" onClick={onSearchSubmit}></button>
        </form>
      </div>
      <div className="header__user">
        <img src={userImage} alt={userName} />
        <h2>{userName}</h2>
      </div>
    </div>
  );
}

export default Header;
