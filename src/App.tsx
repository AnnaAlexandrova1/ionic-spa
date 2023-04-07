import React from "react";
import '@ionic/react/css/core.css'
import { setupIonicReact } from '@ionic/react';
import { IonApp, IonPage, IonHeader, IonContent } from "@ionic/react";
import MainPage from "./pages/MainPage/MainPage";
import Logo from "./components/Logo/Logo";
// import * as ROUTES from "./service/routes/routes";
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
           <MainPage />
        </IonContent>
    </IonApp>
  );
}

export default App;
