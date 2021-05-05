import React, { Component } from "react";
import s from "./Main.module.css";

export default class Filter extends Component {
  render() {
    return (
      <div className={s.filter}>
        <div className={s.filterResult}>
          {this.props.filteredProducts && this.props.filteredProducts.length > 0
            ? this.props.filteredProducts.length + " products"
            : null}{" "}
        </div>
        <div className={s.filterSort}>
          Order{" "}
          <select
            value={this.props.sort}
            onChange={(e) => this.props.sortProducts(e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="lowest">lowest</option>
            <option value="highest">highest</option>
          </select>
        </div>
        <div className={s.filterCompany}>
          Filter{" "}
          <select
            value={this.props.company}
            onChange={(e) => this.props.filterProducts(e.target.value)}
          >
            <option value="all">All</option>
            <option value="samsung">Samsung</option>
            <option value="nokia">Nokia</option>
            <option value="htc">Htc</option>
            <option value="apple">Iphone</option>
            <option value="huawei">Huawei</option>
            <option value="xiaomi">Xiaomi</option>
          </select>
        </div>
      </div>
    );
  }
}
