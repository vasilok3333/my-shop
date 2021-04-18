import React, { Component } from "react";
import s from "./Products.module.css";
import formatCurrency from "../util";

export default class Products extends Component {
  render() {
    return (
      
      <div>
        { this.props.products.length > 0 ?
          <ul className={s.products}>
            {this.props.products.map((product) => (
              <li key={product.id}>
                <div className={s.product}>
                  <a href={"#" + product.id}>
                    <img src={product.img} alt={product.title}></img>
                    <p>{product.title}</p>
                  </a>
                  <div className={s.productPrice}>
                    <div>{formatCurrency(product.price)}</div>
                    <button onClick={() => this.props.addToCart(product)} className={`${s.button} ${s.primary}`}>
                      Add to card
                  </button>
                  </div>
                </div>
              </li>
            ))}
          </ul> :
          <div className={s.emptyList}>За заданими параметрами нічого не знайдено. Попробуйте змінити параметри фільтру</div>
        
        }
      </div>
    );
  }
}
