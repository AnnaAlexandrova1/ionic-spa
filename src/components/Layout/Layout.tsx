import React, { useEffect, useState } from "react";
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
          <IonButton color="medium" onClick={() => setIsOpen(true)}>
            Избранное
          </IonButton>
        </div>
      </IonHeader>

      <IonContent>
        <Outlet />
      </IonContent>
    </>
  );
}
