import React, {Component} from "react"; //importar componente de react
import {BrowserRouter, Route, Switch} from "react-router-dom";

// import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import home from "./components/home";
import waiter from "./components/waiter";
import kitchen from "./components/kitchen";
import error from "./components/error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation />
      <Switch>
        <Route path ="/" component={home}  exact />
        <Route path = "/waiter"component={waiter}/>
        <Route path = "/kitchen"component={kitchen}/>
        <Route component={error}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

 export default App;
