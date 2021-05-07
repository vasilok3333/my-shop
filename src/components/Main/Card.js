import React, { Component } from 'react';
import s from "./Main.module.css";

export default class Card extends Component {
    render() {
        return (
            <div className={s.leadersCard}>
                {this.props.number}
            </div>
        )
    }
}
