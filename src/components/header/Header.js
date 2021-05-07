import React, { Component } from "react";
import s from "./Header.module.css";
import Contacts from "./Contacts";
import Navbar from "./Navbar";

export default class Header extends Component {
  render() {
    return (
      <div className={s.header}>
        <Contacts />
        <Navbar
          showLoginModal={this.props.showLoginModal}
          showRegistrModal={this.props.showRegistrModal}
          isLogged={this.props.isLogged}
          login={this.props.login}
          changeAuth={this.props.changeAuth}
          cartItems={this.props.cartItems}
          favouritesProducts={this.props.favouritesProducts}
          compareProducts={this.props.compareProducts}
        />
      </div>
    );
  }
}
