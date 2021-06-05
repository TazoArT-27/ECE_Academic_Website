import { Button } from 'bootstrap';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Logo from '../../../images/logo/ece_website_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faChalkboardTeacher, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const history = useHistory();
    const handleTeachersLogin = () => {
        history.push('/seriesLoginSelection')
    }
    return (
<nav className="navbar navbar-expand-lg bg navbar-light">
<Link className="nav-link ml-2 mr-5 text-white" to="/home">
  <img src={Logo} style={{height: '60px', width: '370px'}} alt=""/>
    <span className="title-icon"></span>
  </Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link mr-5 text-white pt-3" to="about">About Us</Link>
        </li>
        {/* <li className="nav-item">
            <Link className="nav-link mr-5 text-white pt-3"  to="contact" >Contact</Link>
        </li> */}
        <li className="nav-item">
            <Link to='/eighteenProSt' className="nav-link mr-3 text-white">
               <button className="btn btn-primary"><FontAwesomeIcon className='mr-2' icon={faUserAlt} />Student Login</button>
            </Link>
        </li>
        <li className="nav-item">
            <Link to='/seriesLoginSelection' className="nav-link mr-5 text-white">
               <button onClick={handleTeachersLogin} className="btn btn-primary"><FontAwesomeIcon className='mr-2' icon={faChalkboardTeacher} />Teacher Login</button>
            </Link>
        </li>
    </ul>
</div>
</nav>


    );
};

export default Navbar;