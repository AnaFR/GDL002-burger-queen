// //MENU BREAKFAST

import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import Cart from "./Cart/Cart";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
    
      
          <div className="grid-container">
            
            <div className="row">
  
            {/* <Title name="Breakfast" title="" /> */}
            <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return (
                  <div className="col sm-3 lg-6">
                    <Product key={product.id} product={product} />
                  </div>
                );
              });
            }}
          </ProductConsumer>
          
        </div>
        <div className="item3">
          <Cart />
        </div>
      </div>
    );
  }
}


const ProductWrapper = styled.section``;