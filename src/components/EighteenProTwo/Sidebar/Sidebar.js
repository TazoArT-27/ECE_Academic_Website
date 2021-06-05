import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        
       
        <div className="sidebar" style={{height:'150vh'}}>
            <ul className="my-4" style={{fontSize:'14px'}}>
                <Link to='/eighteenPro' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Dashboard</Link>
                <Link to='/table-ct' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">CT Marks</Link>
                <Link to='/table-lab' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Lab Marks</Link>
                <Link to='/table-viva' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Viva Marks</Link>
                <Link to='/table-final' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Final Result</Link>
                <Link to='/add-ct' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Add CT Marks</Link>
                <Link to='/add-lab' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Add Lab Marks</Link>
                <Link to='/add-viva' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Add Viva Marks</Link>
                <Link to='/add-final' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Add Final Result</Link>
                <Link to="/" className="d-flex justify-content-center align-items-center py-3 sideLinks">Logout</Link>
            </ul>
        </div>
        
    );
};

export default Sidebar;