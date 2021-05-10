import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import MedicationsContextProvider from "./contexts/MedicationsContext";
import UserContextProvider from "./contexts/UserContext";
//import "./bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <MedicationsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MedicationsContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();