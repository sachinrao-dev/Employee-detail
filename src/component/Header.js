import React from "react";
import useStyle from "./HeaderStyle";

function Header() {
  const classes = useStyle();
  return (
    <div className={classes.header}>
      <p className={classes.admin}>Admin Raj</p>
    </div>
  );
}

export default Header;
