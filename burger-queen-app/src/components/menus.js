import React from "react";
import M from "materialize-css";
import AllDay from "../components/allDay";
import Waiter from "../components/waiter";

class navBar extends React.Component {
  componentDidMount() {
    // Auto initialize all the things!

    M.AutoInit();
  }
  render() {
    return (
      <ul class="collapsible">
        <li>
          <div class="collapsible-header">
            <i class="material-icons">restaurant</i>Desayunos
          </div>
          <div class="collapsible-body">
            <span>
              <Waiter />
            </span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons">restaurant_menu</i>Comida
          </div>
          <div class="collapsible-body">
            <span>
              <AllDay />
            </span>
          </div>
        </li>
      </ul>
    );
  }
}

export default navBar;
