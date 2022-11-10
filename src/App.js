import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Form from './Form';
import { Route, Switch } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Profilepage from './pages/Profilepage';
import Registerpage from './pages/Registerpage';
import Loginpage from './pages/Loginpage';

function App() {
  
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar></Navbar>
      </div>
      <div>
        <Switch>
        <Route path="/" exact={true}>
          <Landingpage />
        </Route>
        <Route path="/register">
          <Registerpage />
        </Route>
        <Route path="/login">
          <Loginpage />
        </Route>
        <Route path="/profile">
          <Profilepage />
          </Route>
          </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
