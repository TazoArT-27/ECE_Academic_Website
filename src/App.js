import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/HomePage/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage/HomePage';

function App() {
  return (
    <div>
    
      <Router>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
