import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "../src/App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { persistor, store } from "../src/Redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        cacheLocation="localstorage" 
      >
        {/* <React.StrictMode> */}
          <App />
        {/* </React.StrictMode> */}
      </Auth0Provider>
    </PersistGate>
  </Provider>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
