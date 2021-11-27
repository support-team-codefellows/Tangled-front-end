import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';


import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";

const MainApp = function () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <App/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(
  <MainApp />
 
    ,
  
  document.getElementById("root")
);
