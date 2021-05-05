import React, { Component } from "react";
import FormLogin from "./FormLogin";
import FormRegistr from "./FormRegistr";

export default class Modal extends Component {
    render() {
    return (
      <div>
        {this.props.isLoginForm && !this.props.isLogged ? (
          <FormLogin
            showLoginModal={this.props.showLoginModal}
                    showRegistrModal={this.props.showRegistrModal}
                    changeAuth={this.props.changeAuth}
          />
        ) : null}
        {this.props.isRegistrForm ? (
          <FormRegistr showRegistrModal={this.props.showRegistrModal} />
        ) : null}
      </div>
    );
  }
}
