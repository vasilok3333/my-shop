import React, { Component } from "react";
import style from "./Filter.module.css";


export default class Filter extends Component {
  render() {
    return (
      <div className={style.filter}>
       <div className={style.filterResult}>{this.props.count} products</div>
       <div className={style.filterSort}>Order{" "}
       <select value={this.props.sort} onChange={this.props.sortProducts}>
           <option>Latest</option>
           <option value="lowest">lowest</option>
           <option value="highest">highest</option>

       </select>
       </div>
       <div className={style.filterCompany}>Filter{" "}
       <select value={this.props.company} onChange={this.props.filterCompanyProducts}>
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
