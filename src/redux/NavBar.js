import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

function NavBar() {
  const { userId } = useParams();
  return (
    <div>
      <NavLink to={`/users/${userId}/personal`}>Personal</NavLink>
      <NavLink to={`/users/${userId}/professional`}>Professional</NavLink>
      <NavLink to={`/users/${userId}/academic`}>Academic</NavLink>
      <NavLink to={`/users/${userId}/employment`}>Employment</NavLink>
      <Outlet />
    </div>
  );
}

export default NavBar;
