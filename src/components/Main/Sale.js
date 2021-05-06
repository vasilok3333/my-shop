import React, { Component } from 'react';
import s from "./Main.module.css";
import image from "../../assets/sale.jpg";


export default class Sale extends Component {
    render() {
        return (
            <div className={s.sidebarRight}>
                <div className={s.sale}>
                    <a href="#">
                        <img src={image}></img> 
                    </a>
                </div>
            </div>
        )
    }
}
