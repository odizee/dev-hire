import "./styles/sidebarStyles.scss";
import Search from "./../assets/Search.png";
import Search_white from "./../assets/Search_white.png";
import fav from "./../assets/fav.png";
import fav_white from "./../assets/fav_white.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  //STATES
  const [active, setActive] = useState(false);

  //ROUTER
  const url = useLocation().pathname;

  return (
    <div className="sidebar">
      <h1>
        Dev<span>Hire</span>
      </h1>
      <nav>
        <ul>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/"
          >
            <li className="search">
              <div className="img-div">
                <img src={url === "/" ? Search_white : Search} alt="search" />
              </div>
              <p>Home</p>
            </li>
          </NavLink>

          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/favourite"
          >
            <li className="fav">
              <div className="img-div">
                <img src={url === "/favourite" ? fav_white : fav} alt="heart" />
              </div>
              <p>Favourites</p>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
