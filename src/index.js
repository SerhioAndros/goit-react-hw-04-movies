import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styles from "./styles.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App className={styles.App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
