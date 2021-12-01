import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import "assets/css/material-dashboard-react.css?v=1.10.0";


ReactDOM.render(
  <Provider store={store}>

  
  <App/>

</Provider>,
  document.getElementById("root")
);
