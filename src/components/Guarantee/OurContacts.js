import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import s from "./Guarantee.module.css";
import { Link } from "react-router-dom";

class OurContacts extends Component {
  render() {
    return (
      <div className={s.mapsBox}>
        <div className={s.mapWrapper}>
          <div className={s.contacts}>
            <div>
              <Link className={s.title} to="/my-shop/guarantee/contacts">
                Контакти
              </Link>
              <ul className={s.footerContacts}>
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
                      <a
                        className={s.email}
                        href="mailto:freedom-mobile@gmail.com"
                      >
                        freedom-mobile@gmail.com
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.map}>
            <Map className={s.maps} google={this.props.google} zoom={14}>
              <Marker onClick={this.onMarkerClick} name={"Current location"} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                <div></div>
              </InfoWindow>
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBL8LjwWtRcGifU8CC7WQNTVkuYHzfzsVU",
})(OurContacts);
