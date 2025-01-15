import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <div className="NavigationPage">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/display">Display</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorite</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
