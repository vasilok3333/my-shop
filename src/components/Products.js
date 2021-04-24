import React, { Component } from "react";
import s from "./Products.module.css";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

const uniqid = require('uniqid');

Modal.setAppElement('#root');


export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(product) {
    this.setState({ product });
  }

  closeModal() {
    this.setState({ product: null });
  }

  render() {
    console.log(this.state);
    const { product } = this.state;
   
    console.log(process.env.PUBLIC_URL);
    return (
      <div>
        {this.props.products.length > 0 ? (
          <Fade bottom cascade>
            <ul className={s.products}>
              {this.props.products.map((product) => (
                <li key={product.id}>
                  <div className={s.product}>
                    <a
                      href={"#" + product.id}
                      onClick={() => {
                        this.openModal(product);
                      }}
                    >
                      <img src={process.env.PUBLIC_URL + product.img} alt={product.title}></img>
                      <p>{product.title}</p>
                    </a>
                    <div className={s.productPrice}>
                      <div>{formatCurrency(product.price)}</div>
                      <button
                        onClick={() => this.props.addToCart(product)}
                        className={`${s.button} ${s.primary}`}
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Fade>
        ) : (
          <div className={s.emptyList}>
            За заданими параметрами нічого не знайдено. Попробуйте змінити
            параметри фільтру
          </div>
        )}

        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className={s.buttonClose} onClick={this.closeModal}>
                X
              </button>
              <div className={s.productDetails}>
              <img src={process.env.PUBLIC_URL + product.img} alt={product.title}></img>
                <div className={s.productDetailsInfo}>
                
                    <p><strong>{product.title}</strong></p>
              
                  <p>{product.info}</p>
                  Колір телефона:{" "}
                  {product.color.map((color) => (
                    <span>
                      <button key={uniqid()} className={s.button}>{color}</button>
                    </span>
                  ))}
                  <div className={s.productPrice}>
                    <div>{formatCurrency(product.price)}</div>

                    <button
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                      className={`${s.button} ${s.primary}`}
                    >
                      Add to card
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
