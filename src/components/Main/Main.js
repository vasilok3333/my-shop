import React, { Component } from "react";
import Filter from "./Filter";
import Products from "./Products";
import s from "./Main.module.css";
import Sidebar from "./Sidebar";
import SliderBox from "./SliderBox";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
import Sale from "./Sale";

class Main extends Component {
  render() {
    return (
      <Router>
        <div className={s.mainContent}>
          <Sidebar />
          <Switch>
            <Route path="/my-shop/products">
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
            </Route>
            <Route path="/my-shop">
              <SliderBox />
              <Sale />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withRouter(Main);
