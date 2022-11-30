import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/personal">Personal</NavLink>
      <NavLink to="/professional">Professional</NavLink>
      <NavLink to="/academic">Academic</NavLink>
      <NavLink to="/employment">Employment</NavLink>
      <Outlet />

    </div>
  );
}

export default NavBar;
