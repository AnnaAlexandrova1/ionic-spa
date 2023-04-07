import React from "react";
import { IonImg } from "@ionic/react";
import logoImg from "../../images/logo.jpg";
import './logo.css'

export default function Logo() {
  // return (<IonImg src={logo} alt="Main Logo"></IonImg>);
  return (
    <div>
      <img className='logo-img' src={logoImg} alt="Main Logo"></img>
    </div>
  )
}
