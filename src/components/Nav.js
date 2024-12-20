import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <NavLink style={({ isActive }) => {
          return {
            textDecorationLine: isActive ? "underline" : "none"
          }
        }} to="/"> 
          Hike
        </NavLink>
        {/* change the to to the link of we need 
        and for styling add this fixed format */}

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink style={({ isActive }) => {
                return {
                    textDecorationLine: isActive ? "underline" : "none"
                }
              }} to="/home">
                Home
              </NavLink>
                 {/* change the to to the link of we need to="/home" this is important */}
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink style={({ isActive }) => {
                return {
                    textDecorationLine: isActive ? "underline" : "none"
                }
              }} to="/TripList">
                Trips
              </NavLink>
                 {/* change the to to the link of we need to="/TripList"  */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
