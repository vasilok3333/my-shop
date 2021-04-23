import React, { Component } from "react";
import formatCurrency from "../util";
import s from "./Cart.module.css";
import Fade from "react-reveal/Fade";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartForm: false,
      name: "",
      email: "",
      address: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.createOrder = this.createOrder.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  createOrder(e) {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  }

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
            <Fade left cascade>
              <ul className={s.cartItems}>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div>
                      <img src={item.img} alt={item.title}></img>
                    </div>
                    <div>{item.title}</div>
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
              </ul>
            </Fade>
          </div>

          <div className={s.cart}>
            {cartItems.length > 0 ? (
              <div className={s.total}>
                <div>
                  Сума до оплати:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <div>
                  <button
                    onClick={() => {
                      this.setState({
                        showCartForm: true,
                      });
                    }}
                    className={`${s.button} ${s.primary} `}
                  >
                    Оплатити
                  </button>
                </div>
                {this.state.showCartForm && (
                  <Fade right cascade>
                    <div className={s.cart}>
                      <form onSubmit={this.createOrder}>
                        <ul className={s.formContainer}>
                          <li>
                            <label>Email</label>
                            <input
                              name="email"
                              type="email"
                              required
                              onChange={this.handleInput}
                            ></input>
                          </li>
                          <li>
                            <label>Name</label>
                            <input
                              name="name"
                              type="text"
                              required
                              onChange={this.handleInput}
                            ></input>
                          </li>
                          <li>
                            <label>Address</label>
                            <input
                              name="address"
                              type="text"
                              required
                              onChange={this.handleInput}
                            ></input>
                          </li>
                          <li>
                            <button
                              type="submit"
                              className={`${s.button} ${s.primary}`}
                            >
                              Замовити
                            </button>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </Fade>
                )}
              </div>
            ) : (
              "Не вибрано жодного телефону"
            )}
          </div>
        </div>
      </div>
    );
  }
}
