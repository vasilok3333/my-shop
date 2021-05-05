import React, { Component } from 'react';
import Filter from "./Filter";
import Products from "./Products";
import s from "./Main.module.css";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";




export default class Main extends Component {
    render() {
      return (
        <Router>
            <div className={s.mainContent}>
              <Route path="/my-shop"><Sidebar/></Route>
         {/*    <Slider /> */}
            <div className={s.mainWrapper}>
                 <Filter
                sort={this.props.sort}
                products={this.props.products}
                company={this.props.company}
                sortProducts={this.props.sortProducts}
                filterProducts={this.props.filterProducts}
                filteredProducts={this.props.filteredProducts}
              />
              <Products
                addToCart={this.props.addToCart}
                products={this.props.products}
                addProducts={this.props.addProducts}
                filteredProducts={this.props.filteredProducts}
                data={this.props.data}
              />
              </div>
            </div>
          </Router>
        )
    }
}
