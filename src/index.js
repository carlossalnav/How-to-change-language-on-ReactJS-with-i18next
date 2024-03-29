import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {I18nextProvider} from "react-i18next"
import i18next from "i18next"
import global_es from "./languages/es/global.json"
import global_en from "./languages/en/global.json"
import global_jp from "./languages/jp/global.json"

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    jp: {
      global: global_jp
    }
  }

})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n = {i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

