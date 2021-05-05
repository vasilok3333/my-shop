import React, { Component } from "react";
import s from "./Guarantee.module.css";
import Service from "./Service";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dostavka from "./Dostavka";

export default class Guarantee extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className={s.layoutBox}>
            <div className={s.layoutBox_textAside}>
              <ul>
                <li>
                  <Link to="/my-shop/guarantee">Гарантія та сервіс</Link>
                </li>
                <li>
                  <Link to="/my-shop/dostavka">Доставка</Link>
                </li>
                <li>
                  <Link to="/my-shop/offer">Гарантія та сервіс</Link>
                </li>
                <li>
                  <Link to="/my-shop/exchange">Обмін та повернення</Link>
                </li>
                <li>
                  <Link to="/my-shop/contacts">Контакти</Link>
                </li>
              </ul>
            </div>
            <div className={s.layoutBox_textContent}>
              <Route exact path="/my-shop/guarantee">
                <Service />
              </Route>
              <Route exact path="/my-shop/dostavka"><Dostavka /></Route>
              <Route exact path="/my-shop/offer"></Route>
              <Route exact path="/my-shop/exchange"></Route>
              <Route exact path="/my-shop/contacts"></Route>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
