import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    


<nav  className="brown">
<div class="nav-wrapper">
  {/* <a href="#" class="brand-logo right">Logo</a> */}
  <ul id="nav-mobile" class="left hide-on-med-and-down">
  
    <li><NavLink to="/"><a >Home</a></NavLink></li>
    <li> <NavLink to="/menus"><a >Menú</a></NavLink></li>
    <li><NavLink to="/kitchen"><a href>Cocina</a></NavLink></li>
  </ul>
</div>
</nav>


  );
};

export default Navigation;


// AGREGAR NAV BAR CON EL NAV LINK