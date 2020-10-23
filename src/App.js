import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage/HomePage';
import HeadMessage from './components/HeadMessage/HeadMessage';

function App() {
  return (
    
    
      <Router>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/speech/:id">
          <HeadMessage></HeadMessage>
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
