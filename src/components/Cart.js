import React, { Component } from "react";
import formatCurrency from "../util";
import s from "./Cart.module.css";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartForm: false,
      name: "",
      email: "",
      address: "",
      isShowCart: true,
    };
    this.handleInput = this.handleInput.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.clearOrder();
    this.props.clearCart();
    this.setState({
      showCartForm: false
    })
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
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    /* fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.createOrder(order);
            localStorage.clear("cartItems");
      }); */

    this.props.createOrder(order);
  }

  render() {
    const { cartItems, removeFromCart, order } = this.props;
    const count = cartItems.reduce((a, c) => a + c.count, 0);
    return this.state.isShowCart ? (
      <div className={s.cartBox}>
         <div className={s.cart}>
        
        {cartItems.length === 0 ? (
          <div className={`${s.cart} ${s.cartTitle}`}>Ваша корзина пуста</div>
        ) : (
          <div className={`${s.cart} ${s.cartTitle}`}>{`У Вас в корзині ${count}
                   тел. `}</div>
        )}
        {order && (
          <Modal   className={s.Modal}
          overlayClassName={s.Overlay} isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className={s.buttonClose} onClick={this.closeModal}>
                X
              </button>
              <div className={s.orderDetails}>
                <div className={s.succesMessage}>
                  <h3>Ваше замовлення успішно оброблено</h3>
                
                  <ul>
                    <li>
                      <div>Ім"я:</div>
                      <div>{order.name}</div>
                    </li>
                    <li>
                      <div>Електронна пошта:</div>
                      <div>{order.email}</div>
                    </li>
                    <li>
                      <div>Адреса:</div>
                      <div>{order.address}</div>
                    </li>

                    <li>
                      <div>Замовлений товар:</div>
                      <div>
                        {order.cartItems.map((item) => (
                          <div key={item._id}>
                            {item.count} X {item.title}
                          </div>
                        ))}
                      </div>
                    </li>
                    <li>
                      <div>Сума до оплати:</div>
                      <div>{order.total} $</div>
                    </li>
                  </ul>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
    <div>
         
            <Fade right cascade>
              <ul className={s.cartItems}>
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div className={s.cartImg}>
                      <img
                        src={process.env.PUBLIC_URL + item.img}
                        alt={item.title}
                      ></img>
                       <div className={s.cartTitle}>{item.title}</div>
                    </div>
                   
                    <div className={s.right}>
                      <div className={s.itemsCount}>{formatCurrency(item.price)} X {item.count} </div>
                      <div> <button
                        className={s.button}
                        onClick={() => removeFromCart(item._id)}
                      >
                        Видалити
                      </button> </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>

          <div className={`${s.cart}`}>
            <Fade right cascade>
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
                     Замовити
                    </button>
                    </div>
                   
                
                  
                </div>
              ) : (
                "Не вибрано жодного телефону"
              )}
            </Fade>
            </div>
          </div>
          {this.state.showCartForm && (
                    <Fade right cascade>
                      <div className={`${s.cart}  ${s.aaa}`} >
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
    ) : null;
  }
}
