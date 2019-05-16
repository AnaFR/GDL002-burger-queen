import React from "react";
 import burgerLogo from "../burgerLogo.png"; //declarar una variable para importar la imagen


const home = () => {
  return (
    <nav className="brown">
      <div className="nav-wrapper">
        <img src={burgerLogo} className="brand-logo center" alt="logo" />
        <a href="#" className="brand-logo center">
          ¡Welcome!
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down" />
      </div>
    </nav>
  );
};

export default home;




