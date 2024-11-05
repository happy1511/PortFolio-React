import { Flowbite } from "flowbite-react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import reportWebVitals from "./reportWebVitals";
import NavContainer from "./router/NavContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Flowbite>
      {/* <PortFolio /> */}
      <NavContainer />
    </Flowbite>
  </React.StrictMode>
);

reportWebVitals();
