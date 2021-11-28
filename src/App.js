
import Header from './components/Navbars/Navbar.js';
import Footer from './components/Footer/Footer.js';
import React, { useState, useEffect } from 'react';
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
// import Modal from './components/Home/Home.js';

export default function app() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setLogged(true);
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(' this is the log ', foundUser);
    }
  }, []);
  console.log(' this is the log ', logged);

  return (
    <>
      <Router>


        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" to="/admin/dashboard" />


        </Switch>

      </Router>
    </>
  );
}



// class App extends React.Component {
//   constructor(props) {


//   }
//   render() {


// }
// export default App