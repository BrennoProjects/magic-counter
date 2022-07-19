import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { dark } from "./style/theme"
import GlobalStyles from "./style/GlobalStyles";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
