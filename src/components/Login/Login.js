import React, { useContext, useState, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useLocation, useHistory } from 'react-router-dom';
import './Login.css';
import ruetLogo from '../../images/logo/ruetlogo.png';
import google from '../../images/logo/google.png';
import './Login.css';



const Login = () => {

  const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/loginTeacher")
        .then(res => res.json())
        .then(teachers => {
            setTeachers(teachers);
        })
    }, [])
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){

        firebase.initializeApp(firebaseConfig);
    }

    
   
    const handleGoogleSignIn = () => {

        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            //var token = result.credential.accessToken;
            const {displayName, email, photoURL} = result.user;
            console.log(displayName, email, photoURL);
            const signedInUser = {name: displayName, email, photoURL};
             setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
            // console.log(signedInUser);
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    

    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(true)
      .then(function(idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function(error) {
        // Handle error
      });
    }



    return (
        <div className='container'>
            <div className="main mx-5 px-5">
              <div className="login-container m-5 p-5 text-center">
                <img className='mt-1 mb-4' style={{height: '180px'}} src={ruetLogo} alt=""/>
                <div className="form-part mt-3 ml-5">
                <h3 className="mt-5 pt-5 mb-4 p-3" style={{fontSize: '30px', fontWeight: '500'}}>
                      Login
                </h3>
                {/* {
                  console.log(loggedInUser.email)
                } */}
                {/* {
                  teachers.map(teacher =>
                    teacher.email === setLoggedInUser.email ? 
                    <h3 className="mt-5 pt-5 mb-4 p-3" style={{fontSize: '30px', fontWeight: '500'}}>
                      Teacher
                    </h3> : 
                    <h3 className="mt-5 pt-5 mb-4 p-3" style={{fontSize: '30px', fontWeight: '500'}}>Student</h3>
                  )
                } */}
                
                  <button onClick={handleGoogleSignIn}  className="google-btn p-2 mb-2" style={{
                  border: '1px solid white', 
                  backgroundColor: 'white',
                  borderRadius: '50px',
                  outline: 'none'
                  }}>
                  <img style={{
                    height: '23px', 
                    width: '23px', 
                    
                  }} src={google} alt=""/>
                    <span className="mr-5 ml-5 px-5">Continue with Google</span>
                  </button>
                </div>
              </div>
              
            </div>
        </div>
       
    );
};

export default Login;

