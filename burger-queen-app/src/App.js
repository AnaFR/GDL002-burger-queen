import React from 'react'; //importar componente de react
import burgerLogo from './burgerLogo.png'; //declarar una variable para importar la imagen
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <nav className="orange">
        <div className="nav-wrapper">
        
          <img src={burgerLogo} className="brand-logo center" alt="logo" />
          <a href="#" className="brand-logo center">
            Welcome
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down" />
        </div>
      </nav>

      <header className="App-header">
        {/* <img src={burgerLogo} className="App-logo" alt="logo" /> */}

        <p />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        />

        <a className="waves-effect waves-light btn-small">
          <i className="material-icons left">Waiter</i>
        </a>
        <br />
        <a className="waves-effect waves-light btn-small">
          <i className="material-icons right">Kitchen</i>
        </a>
      </header>
    </div>
  );
}

export default App;
