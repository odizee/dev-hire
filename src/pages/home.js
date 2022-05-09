import React from "react";
import Freelancers from "../components/Freelancers";
import Sidebar from "../components/Sidebar";
import "./styles/pages.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Freelancers />
    </div>
  );
};

export default Home;
