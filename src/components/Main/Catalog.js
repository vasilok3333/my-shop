import React, { Component } from "react";
import s from "./Main.module.css";
import samsung from "../../assets/samsungLogo.jpg";
import xiaomi from "../../assets/xiaomiLogo.png";
import nokia from "../../assets/nokiaLogo.png";
import iphone from "../../assets/iphoneLogo.jpg";
import motorola from "../../assets/motorolaLogo.png";
import honor from "../../assets/honorLogo.png";
import oppo from "../../assets/oppoLogo.jpg";
import redmi from "../../assets/redmiLogo.jpg";
import { Link } from "react-router-dom";
import htc from "../../assets/htcLogo.jpg";

export default class Catalog extends Component {
  render() {
    return (
      <div className={s.catalogBox}>
        <ul className={s.catalogMenu}>
          <li
            onClick={(e) => {
              this.props.filterProducts(e.target.alt);
            }}
            className={s.catalogItem}
          >
            <Link to="/my-shop/products">
              <img src={samsung} alt="samsung" />
            </Link>
            
          </li>
          <li
            onClick={(e) => {
              this.props.filterProducts(e.target.alt);
            }}
            className={s.catalogItem}
          >
            <Link to="/my-shop/products">
              <img src={xiaomi} alt="xiaomi" />
            </Link>
          </li>
          <li
            onClick={(e) => {
              this.props.filterProducts(e.target.alt);
            }}
            className={s.catalogItem}
          >
            <Link to="/my-shop/products">
              <img src={nokia} alt="nokia" />
            </Link>
          </li>
          <li
            onClick={(e) => {
              this.props.filterProducts(e.target.alt);
            }}
            className={s.catalogItem}
          >
            <Link to="/my-shop/products">
              <img src={iphone} alt="apple" />
            </Link>
          </li>
          <li
            onClick={(e) => {
              this.props.filterProducts(e.target.alt);
            }}
            className={s.catalogItem}
          >
            <Link to="/my-shop/products">
              <img src={htc} alt="htc" />
            </Link>
          </li>
          <li
            onClick={(e) => {
              this.props.filterProducts(e.target.alt);
            }}
            className={s.catalogItem}
          >
            <Link to="/my-shop/products">
              <img src={motorola} alt="motorola" />
            </Link>
          </li>

          <li
            onClick={(e) => {
              this.props.filterProducts(e.target.alt);
            }}
            className={s.catalogItem}
          >
            <Link to="/my-shop/products">
              <img src={honor} alt="honor" />
            </Link>
          </li>
          <li
            onClick={(e) => {
              this.props.filterProducts(e.target.alt);
            }}
            className={s.catalogItem}
          >
            <Link to="/my-shop/products">
              <img src={oppo} alt="oppo" />
            </Link>
          </li>
          <li
            onClick={(e) => {
              this.props.filterProducts(e.target.alt);
            }}
            className={s.catalogItem}
          >
            <Link to="/my-shop/products">
              <img src={redmi} alt="redmi" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
