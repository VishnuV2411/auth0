import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain= "dev-jglq47fr.us.auth0.com"
    clientId="6O2bp9KmmCfn7xzQ1sn6PX7ZjVhSYvxx"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
