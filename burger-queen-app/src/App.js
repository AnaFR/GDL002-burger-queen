import React, { Component } from "react"; // ROUTE PATH
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap 
import {HashRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Home from "./components/home.js";


class App extends Component {
  render() {
    return (
      <React.Fragment> 
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />    
          <Route path="/menu" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/kitchen" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
