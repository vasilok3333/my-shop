import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import s from "./FormLogin.module.css";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export default class FormLogin extends Component {
  signIn({ email, password }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

      .then((response) => {
        this.props.changeAuth(response.user.email);
        this.props.showLoginModal();
      })
      .catch((error) => alert(error));
  }
  render() {
    return (
      <div onClick={this.props.showLoginModal} className={s.formLogin}>
        <Formik
          initialValues={{ email: "", password: "", checkbox: false }}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email("Invalid email address")
              .required("Required field"),
            password: yup
              .string()
              .min(6, "password must be longer than 6 characters")
              .required("Required field"),
            checkbox: yup.boolean().required("Required field"),
          })}
          onSubmit={(values) => {
            this.signIn(values);
          }}
        >
          <Form onClick={(e) => e.stopPropagation()} className={s.form}>
            <h1 className={s.formTitle}>АВТОРИЗАЦІЯ</h1>

            <Field
              name="email"
              type="email"
              placeholder="електронна пошта (user2000@gmail.com)"
              className={s.formInput}
            />
            <ErrorMessage name="email" component="div" className={s.error} />

            <Field
              name="password"
              type="password"
              placeholder="пароль"
              className={s.formInput}
            />
            <ErrorMessage name="password" component="div" className={s.error} />

            <button type="submit" className={s.btnSign}>
              <span className={s.btnTitle}>Вхід</span>
            </button>
            <span className={s.footerLink}>
              Не зареєстровані?{" "}
              <i
                onClick={() => {
                  this.props.showLoginModal();
                  this.props.showRegistrModal();
                }}
                className={s.registr}
              >
                Зареєструватись
              </i>
            </span>
          </Form>
        </Formik>
        <div className={s.btnCloseLogin}>
          <span>X</span>
        </div>
      </div>
    );
  }
}
