import React, { Component } from "react"; //importar componente de react
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import home from "./components/home";

import kitchen from "./components/kitchen";
import error from "./components/error";
import Navigation from "./components/Navigation";

import Menus from "./components/menus";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={home} exact />
            <Route path="/menus" component={Menus}/>
            <Route path="/kitchen" component={kitchen} />
            
            <Route component={error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

