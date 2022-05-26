import "./Header.scss";
import React from "react";
import addressImage from "../res/imgs/addressImage.svg";
import houseImage from "../res/imgs/houseImage.svg";

export const Header = () => {

  return (
    <div className="header">
      <div className="header__box">
        <img className="header__street-img" src={addressImage} alt="adresse"/>
        <img className="header__house-img" src={houseImage} alt="ponsyrus"/>

        <div className="header__text">
          <p>Kleingenossenschaftliches Wohnen seit 1984</p>
        </div>
      </div>
    </div>
  )
}