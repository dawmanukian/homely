import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./i18n/en.json";
import ruTranslations from "./i18n/ru.json";
import armTranslations from "./i18n/arm.json";
import { useCookies } from "react-cookie";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    ru: { translation: ruTranslations },
    arm: { translation: armTranslations },
  },
  lng: localStorage.getItem("lang") || "arm",
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
