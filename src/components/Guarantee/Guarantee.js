import React, { Component } from "react";
import s from "./Guarantee.module.css";
import Service from "./Service";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dostavka from "./Dostavka";
import OurContacts from "./OurContacts";
import Exchange from "./Exchange";


export default class Guarantee extends Component {
  render() {
    return (
   
          <div className={s.layoutBox}>
            <div className={s.layoutBox_textAside}>
              <ul>
                <li>
                  <Link to="/my-shop/guarantee/service">Гарантія та сервіс</Link>
                </li>
                <li>
                  <Link to="/my-shop/guarantee/dostavka">Доставка</Link>
                </li>
           
                <li>
                  <Link to="/my-shop/guarantee/exchange">Обмін та повернення</Link>
                </li>
                <li>
                  <Link to="/my-shop/guarantee/contacts">Контакти</Link>
                </li>
              </ul>
          </div>
          <Switch>
            <div className={s.layoutBox_textContent}>
              <Route exact path="/my-shop/guarantee/service">
                <Service />
              </Route>
              <Route exact path="/my-shop/guarantee/dostavka"><Dostavka /></Route>
         
              <Route exact path="/my-shop/guarantee/exchange">< Exchange /></Route>
              <Route exact path="/my-shop/guarantee/contacts"> < OurContacts isMarkerShown  /></Route>
            </div>
            </Switch>
          </div>
 
    
    );
  }
}
