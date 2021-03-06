import React, { Component } from "react";
import s from "./Main.module.css";
import formatCurrency from "../../util";
import ModalProduct from "./ModalProduct";

class Compare extends Component {
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
    let favouritesItems = [];
    for (let i = 0; i < this.props.favouritesProducts.length; i++) {
      favouritesItems.push(this.props.favouritesProducts[i]._id);
    }

    return (
      <div className={s.compareBox}>
        <div className={s.compareTitle}>
          ПОРІВНЯЙТЕ ТЕХНІЧНІ ХАРАКТЕРИСТИКИ ВИБРАНИХ ТЕЛЕФОНІВ
        </div>
        {this.props.compareProducts.length > 0 ? (
          <ul className={s.products}>
            {this.props.compareProducts.map((product) => (
              <li key={product._id}>
                <div className={`${s.product}`}>
                  <a
                    href={"#" + product.id}
                    onClick={() => {
                      this.openModal(product);
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + product.img}
                      alt={product.title}
                    ></img>
                    <p className={s.titleLeader}>
                      <i className={s.priceLeader}>
                        {" "}
                        {formatCurrency(product.price)}{" "}
                      </i>

                      <i>{product.title} </i>
                    </p>
                  </a>

                  <div className={`${s.actionBar} `}>
                    <a
                      onClick={(e) => {
                        if (favouritesItems.includes(product._id)) {
                          this.props.removeFromFavourite(product._id);
                        } else {
                          this.props.addToFavourite(product);
                        }
                        e.preventDefault();
                      }}
                      href="#"
                    >
                      <svg
                        className={`${s.icon} ${s.favoriteIcon}  ${
                          favouritesItems.includes(product._id) && s.activeIcon
                        }`}
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        width="20"
                        height="20"
                      >
                        <g>
                          <g>
                            <path
                              d="M375.467,22.164c-60.061,0-99.769,32.795-119.467,54.493c-19.697-21.696-59.406-54.493-119.467-54.493
			C54.581,22.164,0,98.373,0,183.744c0,63.878,32.211,188.323,247.931,304.064c5.037,2.703,11.098,2.705,16.138,0
			C479.79,372.066,512,247.622,512,183.744C512,96.392,455.803,22.164,375.467,22.164z M256,453.348
			C152.381,396.376,34.133,301.45,34.133,183.744c0-65.477,39.319-127.446,102.4-127.446c47.857,0,87.452,29.344,104.973,56.973
			c6.679,10.743,22.365,10.732,29.017-0.046c0.352-0.569,35.938-56.928,104.944-56.928c63.551,0,102.4,62.591,102.4,127.446
			C477.867,301.452,359.622,396.375,256,453.348z"
                            />
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </a>

                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.addToCart(product);
                      }}
                      href="#"
                    >
                      <svg
                        className={`${s.icon} ${s.cartIcon} 
                               `}
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
                        viewBox="0 0 446.843 446.843"
                      >
                        <g>
                          <path
                            d="M444.09,93.103c-2.698-3.699-7.006-5.888-11.584-5.888H109.92c-0.625,0-1.249,0.038-1.85,0.119l-13.276-38.27
              c-1.376-3.958-4.406-7.113-8.3-8.646L19.586,14.134c-7.374-2.887-15.695,0.735-18.591,8.1c-2.891,7.369,0.73,15.695,8.1,18.591
              l60.768,23.872l74.381,214.399c-3.283,1.144-6.065,3.663-7.332,7.187l-21.506,59.739c-1.318,3.663-0.775,7.733,1.468,10.916
              c2.24,3.183,5.883,5.078,9.773,5.078h11.044c-6.844,7.616-11.044,17.646-11.044,28.675c0,23.718,19.298,43.012,43.012,43.012
              s43.012-19.294,43.012-43.012c0-11.029-4.2-21.059-11.044-28.675h93.776c-6.847,7.616-11.048,17.646-11.048,28.675
              c0,23.718,19.294,43.012,43.013,43.012c23.718,0,43.012-19.294,43.012-43.012c0-11.029-4.2-21.059-11.043-28.675h13.433
              c6.599,0,11.947-5.349,11.947-11.948c0-6.599-5.349-11.947-11.947-11.947H143.647l13.319-36.996
              c1.72,0.724,3.578,1.152,5.523,1.152h210.278c6.234,0,11.751-4.027,13.65-9.959l59.739-186.387
              C447.557,101.567,446.788,96.802,444.09,93.103z M169.659,409.807c-10.543,0-19.116-8.573-19.116-19.116
              s8.573-19.117,19.116-19.117s19.116,8.574,19.116,19.117S180.202,409.807,169.659,409.807z M327.367,409.807
              c-10.543,0-19.117-8.573-19.117-19.116s8.574-19.117,19.117-19.117c10.542,0,19.116,8.574,19.116,19.117
              S337.909,409.807,327.367,409.807z M402.52,148.149h-73.161V115.89h83.499L402.52,148.149z M381.453,213.861h-52.094v-37.038
              h63.967L381.453,213.861z M234.571,213.861v-37.038h66.113v37.038H234.571z M300.684,242.538v31.064h-66.113v-31.064H300.684z
               M139.115,176.823h66.784v37.038h-53.933L139.115,176.823z M234.571,148.149V115.89h66.113v32.259H234.571z M205.898,115.89v32.259
              h-76.734l-11.191-32.259H205.898z M161.916,242.538h43.982v31.064h-33.206L161.916,242.538z M329.359,273.603v-31.064h42.909
              l-9.955,31.064H329.359z"
                          />
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </a>
                    <a
                      onClick={(e) => {
                        this.props.removeFromCompare(product._id);
                      }}
                      href="#"
                    >
                      <svg
                        id="Layer_1"
                        className={`${s.icon} ${s.deleteIcon}`}
                        enableBackground="new 0 0 512 512"
                        height="20"
                        viewBox="0 0 512 512"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z" />
                          <path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" />
                          <path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" />
                          <path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className={s.specifications}>
                    <div> Память: {product.memory} </div>
                    <div> Камера: {product.camera}</div>
                    <div> Екран: {product.screen}</div>
                    <div> NFC: {product.nfc}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className={s.notFavourites}>
            <i>Немає телефонів для порівняння</i>
          </div>
        )}
        {this.state.product && (
          <ModalProduct
            product={this.state.product}
            closeModal={this.closeModal}
            addToCart={this.props.addToCart}
          />
        )}
        )
      </div>
    );
  }
}

export default Compare;
