import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useStyle from "./NavBarStyle";

function NavBar() {
  const classes = useStyle();
  return (
    <div className={classes.navBar}>
      <NavLink activeClassName="active" className={classes.nav} to="/users/1/personal">Personal</NavLink>
      <NavLink activeClassName="active" className={classes.nav} to="/users/1/professional">Professional</NavLink>
      <NavLink activeClassName="active" className={classes.nav} to="/users/1/academic">Academic</NavLink>
      <NavLink activeClassName="active" className={classes.nav} to="/users/1/employment">Employment</NavLink>
      <Outlet />
    </div>
  );
}

export default NavBar;
