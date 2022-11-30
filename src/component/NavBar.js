import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/users/1/personal">Personal</NavLink>
      <NavLink to="/users/1/professional">Professional</NavLink>
      <NavLink to="/users/1/academic">Academic</NavLink>
      <NavLink to="/users/1/employment">Employment</NavLink>
      <Outlet />

    </div>
  );
}

export default NavBar;
