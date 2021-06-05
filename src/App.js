import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './components/HomePage/HomePage/HomePage';
import HeadMessage from './components/HeadMessage/HeadMessage';
import SeriesLoginSelection from './components/AdminSeriesLoginSelection/SeriesLoginSelection/SeriesLoginSelection';
import About from './components/About/About';
import PrivateRoute from './components/Login/PrivateRoute';
import Login from './components/Login/Login';
import EighteenProTwo from './components/EighteenProTwo/DashBoard/DashBoard';
import Students from './components/EighteenProTwo/Students/Students';
import FacultyMembers from './components/EighteenProTwo/FacultyMembers/FacultyMembers';
import ClassRoutine from './components/EighteenProTwo/ClassRoutine/ClassRoutine';
import AddCT from './components/EighteenProTwo/AddCT/AddCT';
import AddLab from './components/EighteenProTwo/AddLab/AddLab';
import AddViva from './components/EighteenProTwo/AddViva/AddViva';
import FinalResult from './components/EighteenProTwo/FinalResult/FinalResult';
import TableCT from './components/EighteenProTwo/TableCT/TableCT';
import TableLab from './components/EighteenProTwo/TableLab/TableLab';
import TableViva from './components/EighteenProTwo/TableViva/TableViva';
import TableFinal from './components/EighteenProTwo/TableFinal/TableFinal';
import AddStudents from './components/EighteenProTwo/AddStudents/AddStudents';
import AddFaculty from './components/EighteenProTwo/AddFaculty/AddFaculty';
import Main from './components/EighteenProOne/Main/Main';
import StudentsSt from './components/EighteenProOne/StudentsSt/StudentsSt';
import FacultyMembersSt from './components/EighteenProOne/FacultyMembersSt/FacultyMembersSt';
import ClassRoutineSt from './components/EighteenProOne/ClassRoutineSt/ClassRoutineSt';
import TableCTSt from './components/EighteenProOne/TableCTSt/TableCTSt';
import TableLabSt from './components/EighteenProOne/TableLabSt/TableLabSt';
import TableVivaSt from './components/EighteenProOne/TableVivaSt/TableVivaSt';
import TableFinalSt from './components/EighteenProOne/TableFinalSt/TableFinalSt';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/speech/:id">
          <HeadMessage></HeadMessage>
        </Route>
        <Route path='/login'>
            <Login />
        </Route>
        

        {/* //admin login */}
        <PrivateRoute path="/seriesLoginSelection">
          <SeriesLoginSelection></SeriesLoginSelection>
        </PrivateRoute>
        <PrivateRoute path="/eighteenPro">
          <EighteenProTwo></EighteenProTwo>
        </PrivateRoute>
        <PrivateRoute path="/students">
          <Students></Students>
        </PrivateRoute>
        <PrivateRoute path="/faculty">
          <FacultyMembers></FacultyMembers>
        </PrivateRoute>
        <PrivateRoute path="/class-routine">
          <ClassRoutine></ClassRoutine>
        </PrivateRoute>
        <PrivateRoute path="/student-info">
          <AddStudents></AddStudents>
        </PrivateRoute>
        <PrivateRoute path="/faculty-add">
          <AddFaculty></AddFaculty>
        </PrivateRoute>
        <PrivateRoute path="/add-ct">
          <AddCT></AddCT>
        </PrivateRoute>
        <PrivateRoute path="/add-lab">
          <AddLab></AddLab>
        </PrivateRoute>
        <PrivateRoute path="/add-viva">
          <AddViva></AddViva>
        </PrivateRoute>
        <PrivateRoute path="/add-final">
          <FinalResult></FinalResult>
        </PrivateRoute>
        <PrivateRoute path="/table-ct">
          <TableCT></TableCT>
        </PrivateRoute>
        <PrivateRoute path="/table-lab">
          <TableLab></TableLab>
        </PrivateRoute>
        <PrivateRoute path="/table-viva">
          <TableViva></TableViva>
        </PrivateRoute>
        <PrivateRoute path="/table-final">
          <TableFinal></TableFinal>
        </PrivateRoute>


        {/* //student login */}
        <PrivateRoute path="/eighteenProSt">
          <Main></Main>
        </PrivateRoute>
        <PrivateRoute path="/studentsSt">
          <StudentsSt></StudentsSt>
        </PrivateRoute>
        <PrivateRoute path="/facultySt">
          <FacultyMembersSt></FacultyMembersSt>
        </PrivateRoute>
        <PrivateRoute path="/class-routine-st">
          <ClassRoutineSt></ClassRoutineSt>
        </PrivateRoute>
        <PrivateRoute path="/table-ct-st">
          <TableCTSt></TableCTSt>
        </PrivateRoute>
        <PrivateRoute path="/table-lab-st">
          <TableLabSt></TableLabSt>
        </PrivateRoute>
        <PrivateRoute path="/table-viva-st">
          <TableVivaSt></TableVivaSt>
        </PrivateRoute>
        <PrivateRoute path="/table-final-st">
          <TableFinalSt></TableFinalSt>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
   
  );
}

export default App;
