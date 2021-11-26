import React from 'react';
import Header from './components/Navbars/Navbar.js';
import Footer from './components/Footer/Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Modal from './components/Home/Home.js';

class App extends React.Component {

  render() {

    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">

            </Route>
            <Route exact path="/t">

            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
export default App