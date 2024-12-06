import { Flowbite } from "flowbite-react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import PortFolioPage from "./pages/PortFolioPage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Flowbite>
      {/* <NavContainer /> */}
      <PortFolioPage />
    </Flowbite>
  </React.StrictMode>
);

reportWebVitals();
