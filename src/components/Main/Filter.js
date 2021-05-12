import React, { Component } from "react";
import s from "./Main.module.css";

export default class Filter extends Component {
  render() {
    return (
      <div className={s.filter}>
      
        <div className={s.filterSort}>
          Сортувати за цінами{" "}
          <select
            value={this.props.sort}
            onChange={(e) => this.props.sortProducts(e.target.value)}
          >
            <option value="latest">рандомно</option>
            <option value="lowest">від дешевших до дорожчих</option>
            <option value="highest">від дорожчих до дешевших</option>
          </select>
        </div>
       
      </div>
    );
  }
}
