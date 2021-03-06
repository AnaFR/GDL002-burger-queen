import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="Home" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </li>
        </ul>
        <Link to="/kitchen" className="nav-link">
          Kitchen
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBrown);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

