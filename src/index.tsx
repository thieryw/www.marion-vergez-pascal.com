import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./app/App";
import {RouteProvider} from "./router";
import {I18nProvider} from "./app/i18n/I18nProvider";

ReactDOM.render(
  <React.StrictMode>
    <RouteProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </RouteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

