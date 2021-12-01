import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import "assets/css/material-dashboard-react.css?v=1.10.0";
const MainApp = function () {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <App/>
        </Switch>
      </HashRouter>
    </Provider>
  )
}

ReactDOM.render(
  <MainApp />,
  document.getElementById("root")
);
reportWebVitals();
