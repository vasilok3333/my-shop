import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div className={s.header}>
            <Contacts />
            <Navbar />
            
      </div>
    );
  }
}
