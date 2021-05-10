import React, { Component } from "react";
import Filter from "./Filter";
import Products from "./Products";
import s from "./Main.module.css";
import Sidebar from "./Sidebar";
import SliderBox from "./SliderBox";
import { Route, Switch } from "react-router-dom";
import Sale from "./Sale";
import Leaders from "./Leaders";
import Favourite from "./Favourite";
import Compare from "./Compare";
import Catalog from "./Catalog";

class Main extends Component {
  render() {
    return (
      <div className={s.mainContent}>
        <Sidebar filterProducts={this.props.filterProducts} />
        <Switch>
          <Route path="/my-shop/catalog">
            <Catalog filterProducts={this.props.filterProducts} />
          </Route>

          <Route path="/my-shop/favourites">
            <Favourite
              addToCart={this.props.addToCart}
              removeFromFavourite={this.props.removeFromFavourite}
              favouritesProducts={this.props.favouritesProducts}
              addToCompare={this.props.addToCompare}
              compareProducts={this.props.compareProducts}
              removeFromCompare={this.props.removeFromCompare}
            />
          </Route>
          <Route path="/my-shop/compare">
            <Compare
              addToCart={this.props.addToCart}
              removeFromCompare={this.props.removeFromCompare}
              compareProducts={this.props.compareProducts}
              addToFavourite={this.props.addToFavourite}
              removeFromFavourite={this.props.removeFromFavourite}
              favouritesProducts={this.props.favouritesProducts}
            />
          </Route>
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
                addToFavourite={this.props.addToFavourite}
                addToCompare={this.props.addToCompare}
              />
            </div>
          </Route>
          <Route path="/my-shop">
            <SliderBox />
            <Sale />
          </Route>
        </Switch>
        <Leaders
          addToCart={this.props.addToCart}
          filteredProducts={this.props.filteredProducts}
          cartItems={this.props.cartItems}
          addToFavourite={this.props.addToFavourite}
          addToCompare={this.props.addToCompare}
          compareProducts={this.props.compareProducts}
          removeFromCompare={this.props.removeFromCompare}
          favouritesProducts={this.props.favouritesProducts}
          removeFromFavourite={this.props.removeFromFavourite}
        />
      </div>
    );
  }
}

export default Main;
