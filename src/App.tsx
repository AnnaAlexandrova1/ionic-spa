import React from "react";
import '@ionic/react/css/core.css'
import { setupIonicReact } from '@ionic/react';

import { IonApp, IonPage } from "@ionic/react";
import Signin from "./components/Signin/Signin";
// import * as ROUTES from "./service/routes/routes";
import "./App.css";

setupIonicReact();


function App() {
  return (
    <IonApp>
      <IonPage>
        <Signin />
      </IonPage>
    </IonApp>
  );
}

export default App;
