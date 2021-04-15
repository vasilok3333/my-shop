import React, { Component } from "react";
import s from "./Products.module.css";

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className={s.products}>
          {this.props.products.map((product) => (
            <li key={product.id}>
              <div className={s.product}>
                <a href={"#" + product.id}>
                  <img src={product.img} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <div className={s.productPrice}>
                  <div>{product.price}</div>
                  <button className={`${s.button} ${s.primary}`}>
                    Add to card
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
