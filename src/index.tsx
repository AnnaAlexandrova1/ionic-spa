import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Ionic 4 styles
// import '@ionic/core/css/core.css';
// import '@ionic/core/css/ionic.bundle.css';

import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// serviceWorker.unregister();
