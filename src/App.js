import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage/HomePage';
import HeadMessage from './components/HeadMessage/HeadMessage';
import SeriesLoginSelection from './components/AdminSeriesLoginSelection/SeriesLoginSelection/SeriesLoginSelection';
import EighteenSeries from './components/EighteenSeries/EighteenSeries/EighteenSeries';
import AllStudentList from './components/EighteenSeries/AllStudentList/AllStudentList';
import ClassRoutine from './components/EighteenSeries/ClassRoutine/ClassRoutine';
import CTRoutine from './components/EighteenSeries/CTRoutine/CTRoutine';

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
        <Route path="/seriesLoginSelection">
          <SeriesLoginSelection></SeriesLoginSelection>
        </Route>
        <Route path="/seriesEighteen">
          <EighteenSeries></EighteenSeries>
        </Route>
        <Route path="/studentList">
          <AllStudentList></AllStudentList>
        </Route>
        <Route path="/classRoutine">
          <ClassRoutine></ClassRoutine>
        </Route>
        <Route path="/ctRoutine">
          <CTRoutine></CTRoutine>
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
