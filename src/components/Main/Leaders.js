import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import s from "./Main.module.css";
import Card from "./Card";
import formatCurrency from "../../util";

export default class Leaders extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ];
  }
    render() {
      
        console.log(this.props.filteredProducts)
    return (
        <div className={s.leadersBox}>
            <h1 className={s.leadersTitle}>Найпопулярніші товари</h1>
        <Carousel breakPoints={this.breakPoints}>
                {this.props.filteredProducts !== undefined && this.props.filteredProducts.map(e => 
                    <div className={s.example}>{e.title}</div>)}
        </Carousel>
      </div>
    );
  }
}
