import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#808080" };
  return (
    <div>
      <NavLink to="/" activeStyle={activeStyle} exact>
        <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
          Work Order Assignment Tool
        </h3>
      </NavLink>
    </div>
  );
};

export default Header;
