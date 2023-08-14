/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { theme } from "../customTheme";
import "../src/assets/styles/index.scss";
import { Provider } from "react-redux";
import Store from "./Store.js";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <SnackbarProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </SnackbarProvider>
  </Provider>
);
