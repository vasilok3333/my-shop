import React, { Component } from "react";
import formatCurrency from "../util";
import s from "./Cart.module.css";

export default class Cart extends Component {
  render() {
    const { cartItems, removeFromCart } = this.props;
    console.log(this.props);

    return (
      <div>
        {cartItems.length === 0 ? (
          <div className={`${s.cart} ${s.cartTitle}`}>Ваша корзина пуста</div>
        ) : (
          <div className={`${s.cart} ${s.cartTitle}`}>{`У Вас в корзині ${
            cartItems.length
          }
                   ${
                     cartItems.length.toString().split().pop() === "1"
                       ? `телефон`
                       : `телефонів`
                   }`}</div>
        )}
        <div>
          <div className={s.cart}>
            <ul className={s.cartItems}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.img} alt={item.model}></img>
                  </div>
                  <div>{item.model}</div>
                  <div className={s.right}>
                    {formatCurrency(item.price)} X {item.count}
                    <button
                      className={s.button}
                      onClick={() => removeFromCart(item)}
                    >
                      Видалити
                    </button>
                  </div>
                </li>
              ))}
              <div className={s.cart}>
                {cartItems.length > 0 ? (
                  <div className={s.total}>
                    Сума до оплати:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                    <div>
                      <button className={`${s.button} ${s.primary} `}>
                        Оплатити
                      </button>
                    </div>
                  </div>
                ) : 'Не вибрано жодного телефону'}
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
