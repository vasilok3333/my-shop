import React, { Component } from "react";
import s from "./Main.module.css";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className={s.sidebar}>
        <ul className={s.sidebarMenu}>
          <li>
            <Link to="/my-shop/products">
              <span
                id="all"
                onClick={(e) => {
                  this.props.filterProducts(e.target.id);
                }}
              >
                ВСІ ТЕЛЕФОНИ
              </span>
            </Link>
          </li>
          <li>
          <Link to="/my-shop/products">
              <span
                id="samsung"
                onClick={(e) => {
                  this.props.filterProducts(e.target.id);
                }}
              >
                SAMSUNG
              </span>
            </Link>
          </li>
          <li>
          <Link to="/my-shop/products">
              <span
                id="xiaomi"
                onClick={(e) => {
                  this.props.filterProducts(e.target.id);
                }}
              >
                XIAOMI
              </span>
            </Link>
          </li>
          <li>
          <Link to="/my-shop/products">
              <span
                id="nokia"
                onClick={(e) => {
                  this.props.filterProducts(e.target.id);
                }}
              >
                NOKIA
              </span>
            </Link>
          </li>
          <li>
          <Link to="/my-shop/products">
              <span
                id="apple"
                onClick={(e) => {
                  this.props.filterProducts(e.target.id);
                }}
              >
                IPHONE
              </span>
            </Link>
          </li>
          <li>
          <Link to="/my-shop/products">
              <span
                id="motorola"
                onClick={(e) => {
                  this.props.filterProducts(e.target.id);
                }}
              >
                MOTOROLA
              </span>
            </Link>
          </li>
          <li>
          <Link to="/my-shop/products">
              <span
                id="honor"
                onClick={(e) => {
                  this.props.filterProducts(e.target.id);
                }}
              >
                HONOR
              </span>
            </Link>
          </li>
          <li>
          <Link to="/my-shop/products">
              <span
                id="oppo"
                onClick={(e) => {
                  this.props.filterProducts(e.target.id);
                }}
              >
                OPPO
              </span>
            </Link>
          </li>
          <li>
          <Link to="/my-shop/products">
              <span
                id="redmi"
                onClick={(e) => {
                  this.props.filterProducts(e.target.id);
                }}
              >
                REDMI
              </span>
            </Link>
          </li>
          <li>
          <Link to="/my-shop/products">
              <span
                id="htc"
                onClick={(e) => {
                  this.props.filterProducts(e.target.id);
                }}
              >
                HTC
              </span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
