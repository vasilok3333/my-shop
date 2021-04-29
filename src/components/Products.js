import React, { Component } from "react";
import s from "./Products.module.css";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { fetchProducts } from "../redux/actions/productActions";
import { connect } from "react-redux";

const uniqid = require('uniqid');

Modal.setAppElement('#root');



class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    
    fetch("/api/products").then(response => response.json()
    .then(result => this.props.addProducts(result)));  
  }


  openModal(product) {
    this.setState({ product });
  }

  closeModal() {
    this.setState({ product: null });
  }

  render() {
   
    return (
      <div>
        {}
        {this.props.filteredProducts ? (
          <Fade bottom cascade>
            <ul className={s.products}>
              {this.props.filteredProducts.map((product) => (
                <li key={product._id}>
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
         Loading.......
          </div>
        )}

        {this.state.product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className={s.buttonClose} onClick={this.closeModal}>
                X
              </button>
              <div className={s.productDetails}>
              <img src={process.env.PUBLIC_URL + this.state.product.img} alt={this.state.product.title}></img>
                <div className={s.productDetailsInfo}>
                
                    <p><strong>{this.state.product.title}</strong></p>
              
                  <p>{this.state.product.info}</p>
                  Колір телефона:{" "}
                  {this.state.product.color.map((color) => (
                    <span>
                      <button key={uniqid()} className={s.button}>{color}</button>
                    </span>
                  ))}
                  <div className={s.productPrice}>
                    <div>{formatCurrency(this.state.product.price)}</div>

                    <button
                      onClick={() => {
                        this.props.addToCart(this.state.product);
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





export default Products;