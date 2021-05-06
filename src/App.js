import React from "react";
import Cart from "./components/Cart";
import Modal from "./components/Modal/Modal";
import Main from "./components/Main/Main";

import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
import {
  fetchProducts,
  filterProducts,
  sortProducts,
} from "./redux/actions/productActions";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "./redux/actions/cartActions";
import { createOrder, clearOrder } from "./redux/actions/orderActions";
import {
  showLoginModal,
  showRegistrModal,
  changeAuth,
} from "./redux/actions/formActions";

import { connect } from "react-redux";
import Header from "./components/header/Header";
import "firebase/auth";
import "firebase/firestore";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Guarantee from "./components/Guarantee/Guarantee";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="grid-container">
            <Route path="/my-shop">
              {" "}
              <Header
                showLoginModal={this.props.showLoginModal}
                showRegistrModal={this.props.showRegistrModal}
                isLogged={this.props.isLogged}
                login={this.props.login}
                changeAuth={this.props.changeAuth}
              />{" "}
            </Route>

            <main>
              <Route exact path="/my-shop">
                <Main
                  sort={this.props.sort}
                  products={this.props.products}
                  company={this.props.company}
                  sortProducts={this.props.sortProducts}
                  filterProducts={this.props.filterProducts}
                  filteredProducts={this.props.filteredProducts}
                  addToCart={this.props.addToCart}
                  products={this.props.products}
                  addProducts={this.props.addProducts}
                  filteredProducts={this.props.filteredProducts}
                  data={data.products}
                />{" "}
              </Route>
              <div className="sidebar">
                <Route exact path="/my-shop/cart">
                  <Cart
                    cartItems={this.props.cartItems}
                    removeFromCart={this.props.removeFromCart}
                    createOrder={this.props.createOrder}
                    order={this.props.order}
                    clearOrder={this.props.clearOrder}
                    clearCart={this.props.clearCart}
                  />
                </Route>
              </div>
            </main>
            <Route path="/my-shop/guarantee">
              <Guarantee />
            </Route>

           
            <Route path="/my-shop">
              <Footer />
            </Route>
            <Route path="/my-shop">
              <Modal
                isLoginForm={this.props.isLoginForm}
                isRegistrForm={this.props.isRegistrForm}
                showLoginModal={this.props.showLoginModal}
                showRegistrModal={this.props.showRegistrModal}
                changeAuth={this.props.changeAuth}
                isLogged={this.props.isLogged}
              />{" "}
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  sort: state.products.sort,
  company: state.products.company,
  cartItems: state.cart.cartItems,
  order: state.order.order,
  isLoginForm: state.form.isLoginForm,
  isRegistrForm: state.form.isRegistrForm,
  isLogged: state.form.isLogged,
  login: state.form.login,
});

const mapDispatchToProps = (dispatch) => ({
  addProducts: (data) => dispatch(fetchProducts(data)),
  filterProducts: (value) => dispatch(filterProducts(value)),
  sortProducts: (value) => dispatch(sortProducts(value)),
  addToCart: (product) => dispatch(addToCart(product)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  createOrder: (data) => dispatch(createOrder(data)),
  clearOrder: () => dispatch(clearOrder()),
  clearCart: () => dispatch(clearCart()),
  showLoginModal: () => dispatch(showLoginModal()),
  showRegistrModal: () => dispatch(showRegistrModal()),
  changeAuth: (email) => dispatch(changeAuth(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
