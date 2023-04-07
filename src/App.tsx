import React from "react";
import '@ionic/react/css/core.css'
import { Routes, Route } from "react-router";
import { setupIonicReact } from '@ionic/react';
import { IonApp, IonPage, IonHeader, IonContent } from "@ionic/react";
import MainPage from "./pages/MainPage/MainPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import Logo from "./components/Logo/Logo";
import "./App.css";

setupIonicReact();


function App() {
  return (
    <IonApp>
      <IonHeader>
        <div className="header-container">
          <Logo />
        </div>
        </IonHeader>
        
      <IonContent>
        <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="itemPage" element={<ItemPage />} />
        </Routes>
        </IonContent>
    </IonApp>
  );
}

export default App;
