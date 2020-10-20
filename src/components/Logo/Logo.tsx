import React from "react";
import { Link } from "react-router-dom";
import logoSrc from "./vgsha_logo.png";

export const Logo = () => {
  return (
    <div className="Logo">
      <Link to="/">
        <img className="Logo-Img" src={logoSrc} alt="logo" />
      </Link>
      <p className="Logo-Title">
        Анкета работодателя для опроса с целью получения информации об
        удовлетворенности качеством образования выпускников ФГБОУ ВО Вятская
        ГСХА
      </p>
    </div>
  );
};
