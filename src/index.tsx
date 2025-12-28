import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { TaskProvider } from "./context/TaskContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8xo6z885argwms1m.us.auth0.com"
      clientId="tfbsZa6mhkX7hfmmuoDMCGFguI7R2j0e"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <TaskProvider>
        <App />
      </TaskProvider>
    </Auth0Provider>
  </React.StrictMode>
);
