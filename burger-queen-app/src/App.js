import React from "react"; //importar componente de react

// import { Link } from "react-router-dom"; // router, you need to install
import burgerLogo from "./burgerLogo.png"; //declarar una variable para importar la imagen
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <div className="App">
      <nav className="brown"> 
        <div className="nav-wrapper">
          <img src={burgerLogo} className="brand-logo center" alt="logo" />
          <a href="#" className="brand-logo center">
            ¡Welcome!
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down" />
        </div>
      </nav>

      <header className="App-header">
        
      </header>
      
      <a className="waves-effect btn  deep-orange  darken-1">
          <i className="material-icons right">room_service</i>Waiterb
          {/* <Link to="/waiter">Waiter</Link>  */}
        </a>

        <a className="waves-effect brown darken-1 btn">
          <i className="material-icons right">restaurant_menu</i>kitchen
          {/* <Link to="/kitchen">Kitchen</Link>  */}
        </a>
    </div>
  );
}

export default App;


