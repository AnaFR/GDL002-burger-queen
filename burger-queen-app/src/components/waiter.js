import React from "react";
import breakfast from "../components/breakfast.json";
import "../App.css";

class breakfastj extends React.Component  {
    render (){
  return (
    
    <div class="row">
    <div class="col s12 m4" >
    {breakfast.map((showMenu, number ) => 
      <div class="card"key ={number}>
        <div class="card-image">
          <img src= {showMenu.image} alt = "..." >
          </img>
          <span class="card-title"></span>{showMenu.name}
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content" >
          <p>{showMenu.price}</p>
        </div>
      </div>
    )}
    </div>
    
  </div>
  
  )
  }          
  

};


 export default breakfastj;






 