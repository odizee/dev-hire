import React from "react";
import Sidebar from "../components/Sidebar";
import Favourites from "./../components/Favourites";
import "./styles/pages.scss";

const favourites = () => {
  return (
    <div className="home">
      <Sidebar />
      <Favourites />
    </div>
  );
};

export default favourites;
