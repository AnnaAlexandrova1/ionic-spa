import React from 'react';
import ReactDOM from 'react-dom/client';

// Ionic 4 styles
// import '@ionic/core/css/core.css';
// import '@ionic/core/css/ionic.bundle.css';

import './index.css';
import App from './App'
// import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root") as Element); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// serviceWorker.unregister();