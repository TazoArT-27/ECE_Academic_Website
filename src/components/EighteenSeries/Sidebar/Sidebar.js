import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
            
            <div className="sidebar d-flex flex-column justify-content-between px-3 py-4">

            <ul className="list-unstyled">
                <Link to="/seriesEighteen" style={{textDecoration: 'none'}}><h3 className="text-center text-white pb-4">ECE'18</h3></Link>
                <li className="">
                    <Link to="/addCTMarks" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-3">
                        <span className=' text-white'>Add CT Marks</span>
                    </Link>
                    <Link to="/" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-3">
                        <span className=' text-white'>CT Marks</span>
                    </Link>
                    <Link to="/addLabMarks" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-3">
                    <span className=' text-white'>Add Lab Marks</span>
                    </Link>
                    <Link to="/" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-3">
                        <span className=' text-white'>Lab Marks</span>
                    </Link>
                    <Link to="/addBoardVivaMarks" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-3">
                        <span className=' text-white'>Add Viva Marks</span>
                    </Link>
                    <Link to="/" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-3">
                        <span className=' text-white'>Board Viva Marks</span>
                    </Link>
                    <Link to="/addCGPA" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-3">
                    <span className=' text-white'>Add CGPA</span>
                    </Link>
                    <Link to="/" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-3">
                        <span className=' text-white'>Final CGPA</span>
                    </Link>
                </li>
                
                
            </ul>
            <div>
                <Link to="/" className="text-white"><span className='mr-3'>Logout</span><FontAwesomeIcon icon={faSignOutAlt} /></Link>
            </div>
        </div>
        
    );
};

export default Sidebar;