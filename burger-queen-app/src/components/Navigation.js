import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menus">Menú</NavLink>
      
      <NavLink to="/kitchen">Kitchen</NavLink>
    </div>
    
  );
};

export default Navigation;


// AGREGAR NAV BAR CON EL NAV LINK