import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {

  return (
    <>
      <div style={{display: "flex", justifyContent: "space-between", borderBottom: "2px solid black"}}>
        <NavLink to="/MovieInfo">
          MovieInfo
        </NavLink>
        <NavLink to="/Character">
          Character
        </NavLink>
      </div>
    </>
  );
};
