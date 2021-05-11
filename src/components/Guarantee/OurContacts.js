import React, { Component } from "react";
import s from "./Guarantee.module.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import ourShops from "../../assets/location.png";

class OurContacts extends Component {
  render() {
    const url = "AIzaSyDO-0AN_64hVOjiVg0wgF0vTXwlEJ6CWIU";
    return (
      <div className={s.mapBox}>
        <div className={s.contacts}>
          <span className={s.title} to="/my-shop/guarantee/contacts">
            Контакти
          </span>
          <ul className={s.menuContacts}>
            <li>
              {" "}
              <a href="tel: (068) 057 38 09">(068) 057 38 09</a>
            </li>

            <li>
              <a href="tel: (097) 674 32 93">(097) 674 32 93</a>{" "}
            </li>
            <li>
              <div className={s.call}>
                <span>Call-центр</span>
                <br />
                <span>Пн-Пт 08:00-23:00</span>
                <br />
                <span>Сб-Нд 08:00-20:00</span>
              </div>
            </li>
            <li>
              <div className={s.call}>
                <span>Email</span>
                <p>
                  <a className={s.email} href="mailto:freedom-mobile@gmail.com">
                    freedom-mobile@gmail.com
                  </a>
                </p>
              </div>
            </li>
          </ul>
          <div className={s.location}>
              <a href="#">
                <img src={ourShops} className={s.ourShops} alt="location" />
                <span className={`${s.shops} ${s.title}`}>Наші магазини</span>
              </a>
              <ul>
                <li>
                  <a href="#">м. Львів, вул. С. Петлюри, 32</a>
                </li>
                <li>
                  <a href="#"> м. Золочів, Львівська обл., вул. Пушкіна, 3</a>
                </li>
                <li>
                  <a href="#"> м. Тернопіль, вул. Замкова, 1</a>
                </li>
              </ul>
            </div>
        </div>

        <div style={{ width: "40vw", height: "50vh" }}>
          <MapWithAMarker
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=${url}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `320px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

class Map extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{  lat: 49.806672, lng: 24.897362 }}
      >
        <Marker position={{ lat: 49.820964, lng: 23.979620}} />
        <Marker position={{ lat: 49.806672, lng: 24.897362 }} />
        <Marker position={{ lat: 49.554435, lng: 25.590569 }} />
      </GoogleMap>
    );
  }
}

const MapWithAMarker = withScriptjs(withGoogleMap(Map));

export default OurContacts;
