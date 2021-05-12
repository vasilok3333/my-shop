import React, { Component } from "react";
import s from "./Main.module.css";

export default class Filter extends Component {
  render() {
    return (
      <div className={s.filter}>
      
        <div className={s.filterSort}>
          Сортвати за цінами{" "}
          <select
            value={this.props.sort}
            onChange={(e) => this.props.sortProducts(e.target.value)}
          >
            <option value="latest">вибірково</option>
            <option value="lowest">дешевші</option>
            <option value="highest">дорожчі</option>
          </select>
        </div>
       
      </div>
    );
  }
}
