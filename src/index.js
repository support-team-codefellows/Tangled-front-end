import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { Provider } from 'react-redux'
// core components
import Admin from "layouts/Admin.js";
import SocketApp from 'components/Socket.io/sockt.io'
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
      <Route path="/admin" component={Admin} />
      <Route path="/socketApp" component={SocketApp} />
      <Route path="/rtl" component={RTL} />

      {/* <Route path="/Telephone" component={RTL} /> */}

      <Redirect from="/" to="/socketApp" />
    </Switch>
  </BrowserRouter>,
  
  document.getElementById("root")
);
