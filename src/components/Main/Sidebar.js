import React, { Component } from "react";
import s from "./Main.module.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className={s.sidebar}>
        <ul className={s.sidebarMenu}>
        <li>
            <a href="">ВСІ ТЕЛЕФОНИ</a>
          </li>
          <li>
            <a href="">SAMSUNG</a>
          </li>
          <li>
            <a href="">XIAOMI</a>
          </li>
          <li>
            <a href="">NOKIA</a>
          </li>
          <li>
            <a href="">IPHONE</a>
          </li>
          <li>
            <a href="">MOTOROLA</a>
          </li>
          <li>
            <a href="">HONOR</a>
          </li>
          <li>
            <a href="">OPPO</a>
          </li>
          <li>
            <a href="">REDMI</a>
          </li>
          <li>
            <a href="">ZTF</a>
          </li>
        </ul>
      </div>
    );
  }
}
