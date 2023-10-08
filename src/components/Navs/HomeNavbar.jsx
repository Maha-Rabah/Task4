import React from "react";
import { NavLink } from "react-router-dom";
import './HomeNavbarStyle.css'
export default function HomeNavbar({logo,button}) {
  return (
    <nav className="bottom">
<div className="container-nav">
    <div className="logo">{logo}</div>
    <ul className="nav-items">
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='students'>Students</NavLink></li>
       <li><NavLink to='news'>News</NavLink></li>
       <li><NavLink to='teachers'>Teachers</NavLink></li>
       <li><NavLink to='about'>About</NavLink></li>
       <li><NavLink to='courses'>Courses</NavLink></li>
    </ul>
  <button className="button">{button}</button>
  </div>
  </nav>
  );
}
