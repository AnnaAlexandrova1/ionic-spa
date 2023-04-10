import React, {createRef, useRef} from "react";
import { Outlet } from "react-router-dom";
import { IonHeader, IonContent, IonButton } from "@ionic/react";
import Logo from "../Logo/Logo";

interface LayoutProps {
  setIsOpen: Function;
}

export default function Layout({ setIsOpen }: LayoutProps) {

  return (
    <>
      <IonHeader>
        <div className="header-container">
          <Logo />
          <IonButton color="medium" onClick={() => setIsOpen(true)} >
            Избранное
          </IonButton>
        </div>
      </IonHeader>
      
      <IonContent scrollEvents={true}>    
        <Outlet />
      </IonContent>
    </>
  );
}
