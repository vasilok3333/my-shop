import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import s from "./FormLogin.module.css";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export default class FormRegistr extends Component {
    createAccount(email, password, lastName) {
   
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => console.log(error));

        alert(`Вітаємо,${lastName}, Ви успішно зареєстровані на нашому сайті. Тепер здійсніть вхід в систему `)
       
        this.props.showRegistrModal();
       
}

  render() {
    const phoneRegExp = RegExp(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    );

    return (
      <div onClick={this.props.showRegistrModal} className={s.formLogin}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
            checkbox: false,
          }}
          validationSchema={yup.object().shape({
            firstName: yup.string().required("Заповніть поле"),
            lastName: yup.string().required("Заповніть поле"),

            email: yup
              .string()
              .email("Не правильно введено електронну пошту")
              .required("Заповніть поле"),
            phoneNumber: yup
              .string()
              .matches(phoneRegExp, "Невірний формат номеру телефону")
              .required("Заповніть поле"),
            password: yup
              .string()
              .min(6, "Пароль має містити не менше 6 символів")
              .required("Заповніть поле"),
            confirmPassword: yup
              .string()
              .oneOf([yup.ref("password"), null], "Паролі не співпадають"),

            checkbox: yup.boolean().oneOf([true], "Для реєстрації треба прийняти умови сайту"),
          })}
          onSubmit={(values) => {
              console.log(values);
              const { email, password, lastName } = values;
              this.createAccount(email, password, lastName);
          }}
        >
          <Form onClick={(e) => e.stopPropagation()} className={s.form}>
            <h1 className={s.formTitle}>РЕЄСТРАЦІЯ</h1>
            <Field
              name="firstName"
              type="text"
              placeholder="Введіть своє прізвище"
              className={s.formInput}
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className={s.error}
            />

            <Field
              name="lastName"
              type="text"
              placeholder="Введіть своє імя"
              className={s.formInput}
            />
            <ErrorMessage name="lastName" component="div" className={s.error} />
            <Field
              name="email"
              type="email"
              placeholder="Введіть свою електронну пошту"
              className={s.formInput}
            />
            <ErrorMessage name="email" component="div" className={s.error} />

            <Field
              name="phoneNumber"
              type="text"
              placeholder="Введіть свій мобільний телефон - 0680573809"
              className={s.formInput}
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className={s.error}
            />

            <Field
              name="password"
              type="password"
              placeholder="Придумайте пароль входу"
              className={s.formInput}
            />
            <ErrorMessage name="password" component="div" className={s.error} />

            <Field
              name="confirmPassword"
              type="password"
              placeholder="Повторіть пароль "
              className={s.formInput}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={s.error}
            />

            <div class={s.checkbox}>
              <Field
                name="checkbox"
                type="checkbox"
                id="checkbox"
                className={s.formCheckbox}
              />
              <label htmlFor="checkbox"> Приймаю умови сайту</label>
              <ErrorMessage
                name="checkbox"
                component="div"
                className={s.error}
              />
            </div>
            <button type="submit" className={s.btnSign}>
              <span className={s.btnTitle}>ЗАРЕЄСТРУВАТИСЬ</span>
            </button>
          </Form>
        </Formik>
        <div className={s.btnCloseLogin}>
          <span>X</span>
        </div>
      </div>
    );
  }
}
