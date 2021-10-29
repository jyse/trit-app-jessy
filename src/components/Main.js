import React, { useState } from "react";
import "./Main.css";
import Header from "./Header";
import Artists from "./Artists";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="main">
      <Header />
      <Artists />
    </div>
  );
}

export default Main;
