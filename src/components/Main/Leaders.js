import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import s from "./Main.module.css";
import formatCurrency from "../../util";
import Modal from "react-modal";
import ModalProduct from "./ModalProduct";


Modal.setAppElement("#root");

export default class Leaders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ];
  }

  openModal(product) {
    this.setState({ product });
  }

  closeModal() {
    this.setState({ product: null });
  }

  render() {


let compareItems = [];



    for (let i = 0; i < this.props.compareProducts.length; i++) {
      compareItems.push(this.props.compareProducts[i]._id)
    }

    let favouritesItems = [];
    for (let i = 0; i < this.props.favouritesProducts.length; i++) {
      favouritesItems.push(this.props.favouritesProducts[i]._id)
    }
    
    
    return (
      <div className={s.leadersBox}>
        <h1 className={s.leadersTitle}>ТОП ПРОДАЖ</h1>

        {this.props.items && (
          <ul className={s.products}>
            <Carousel breakPoints={this.breakPoints}>
              {this.props.items.filter(item => item.top === true).map((product) => (
                <li key={product._id}>
                  <div className={`${s.product} ${s.productLeader}`}>
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

                    <div className={`${s.actionBar} ${s.actionBarLeader} `}>
                      <a
                        onClick={(e) => {
                        
                          if ( compareItems.includes(product._id)){
                            this.props.removeFromCompare(product._id)
                          } else {
                          this.props.addToCompare(product); }
                          e.preventDefault();
                          
                       
                        }}
                        href="#"
                      >
                        <svg
                          className={`${s.icon} ${s.compareIcon} ${
                            compareItems.includes(product._id) ? s.activeIcon : null
                          }`}
                          id="Outline"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m22.279 295.529 218.648 19.13-71.92 129.456a8 8 0 0 0 6.993 11.885h160a8 8 0 0 0 6.993-11.885l-70.38-126.684 211.9 18.539c.237.02.472.031.706.031a8 8 0 0 0 7.961-7.3l2.789-31.878a8.006 8.006 0 0 0 -.718-4.056h.007l-77.53-167.402a8 8 0 0 0 -13.645-1.458l-111.069 147.125-88.962-7.783a63.988 63.988 0 0 0 -48.46-114.636l.176-2.016 15.939 1.394c.233.021.466.03.7.03a8 8 0 0 0 7.969-7.3l2.789-31.878a8 8 0 0 0 -7.273-8.667l-15.939-1.4 2.092-23.908a8 8 0 0 0 -7.272-8.667l-111.573-9.759a8 8 0 0 0 -8.667 7.273l-2.792 31.878a8 8 0 0 0 7.272 8.667l15.939 1.394-1.394 15.94-15.939-1.394a8 8 0 0 0 -8.667 7.273l-2.789 31.877a8 8 0 0 0 7.273 8.667l7.969.7-1.4 15.938-7.969-.7a8.012 8.012 0 0 0 -8.667 7.273l-2.789 31.878a8 8 0 0 0 7.272 8.667l7.97.7-1.395 15.938-7.969-.7a8.008 8.008 0 0 0 -8.667 7.272l-2.789 31.878a8 8 0 0 0 7.272 8.667zm300.121 144.471h-132.8l66.4-119.527zm86.411-295.806 66.119 142.754-163.11-14.271zm-242.717 19.552c1.394 0 2.8.061 4.218.185a48 48 0 0 1 -4.148 95.819c-1.39 0-2.795-.061-4.2-.184h-.025a48 48 0 0 1 4.16-95.818zm-57.933 75.054a64.452 64.452 0 0 0 11.681 17.083l-69.47-6.083 1.394-15.939zm-2.376-48.392-49.835-4.36 1.394-15.939 56.4 4.934a63.6 63.6 0 0 0 -7.959 15.364zm44.8-76.386 15.938 1.395-1.394 15.938-15.929-1.395-79.7-6.972 1.395-15.939 79.695 6.972zm-102.211-25 1.395-15.939 95.634 8.367-1.394 15.939zm-4.183 47.818 95.635 8.366-.751 8.577a64.3 64.3 0 0 0 -10.869 6.468l-85.406-7.477zm-5.578 63.756 63.756 5.578a63.945 63.945 0 0 0 .631 16.112l-65.773-5.755zm-5.578 63.757 446.3 39.046-1.4 15.938-446.291-39.05z" />
                          <path d="m156.067 234.959a8 8 0 0 0 7.273 8.667q.355.03.706.03a8 8 0 0 0 7.961-7.3l.186-2.128a16.093 16.093 0 0 0 3.523-2.251 16 16 0 0 0 -8.89-28.2l7.969.7a8 8 0 0 0 1.4-15.94 8 8 0 1 0 -15.939-1.394l-.188 2.153a15.988 15.988 0 0 0 5.369 30.422l-7.97-.7a8 8 0 1 0 -1.395 15.939z" />
                          <path d="m400.732 192.12a8.006 8.006 0 0 0 -8.667 7.273l-2.789 31.878a8 8 0 0 0 7.273 8.667q.356.03.706.03a8 8 0 0 0 7.961-7.3l2.789-31.878a8 8 0 0 0 -7.273-8.67z" />
                          <path d="m395.154 255.877a8 8 0 1 0 7.273 8.666 8 8 0 0 0 -7.273-8.666z" />
                        </svg>
                      </a>
                      <a
                        onClick={(e) => {
                          if ( favouritesItems.includes(product._id)){
                            this.props.removeFromFavourite(product._id)
                          } else {
                          this.props.addToFavourite(product); }
                          e.preventDefault();
                        }}
                        href="#"
                      >
                        <svg
                          className={`${s.icon} ${s.favoriteIcon}  ${favouritesItems.includes(product._id) && s.activeIcon} `}
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
                    </div>
                  </div>
                </li>
              ))}
            </Carousel>
          </ul>
        )}
        {this.state.product && (
          <ModalProduct product={this.state.product}
          closeModal={this.closeModal}
          addToCart={this.props.addToCart} />
          )}
        )
      </div>
    );
  }
}
