import React, { Component } from 'react';
//Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Create Ui by MUI
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

//Component
import Navbar from './components/layout/Navbar'

//Pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup'
import User from './pages/user'

import './App.css';


class App extends Component {
  render(){
  return (
    <Router>
      <Navbar/>
      <Switch>
            <Route exact path ="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path="/user" component={User}/>

          
        </Switch>
    </Router>
  );
  }
}

export default App;
