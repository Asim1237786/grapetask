import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { HelmetProvider } from "react-helmet-async";
// import { store, persistor  } from './redux/store/store';
// import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <HelmetProvider>
          <App />
        {/* </PersistGate> */}
        </HelmetProvider>
      </Provider>

    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
// import React from "react";
// import ReactDOM from "react-dom";
// import { HelmetProvider } from "react-helmet-async";
// import App from "./App";

// ReactDOM.render(
//   <HelmetProvider>
//     <App />
//   </HelmetProvider>,
//   document.getElementById("root")
// );
