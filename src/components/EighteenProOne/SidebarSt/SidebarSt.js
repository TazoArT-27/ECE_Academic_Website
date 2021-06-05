import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarSt.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

const SidebarSt = () => {
    return (
        
       
        <div className="sidebar" style={{height:'100vh'}}>
            <ul className="my-4" style={{fontSize:'14px'}}>
                <Link to='/eighteenProSt' style={{color: 'grey', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinksSt" href=""><FontAwesomeIcon icon={faGripHorizontal} /> <span className="pl-1">Dashboard</span></Link>
                <Link to='/table-ct-st' style={{color: 'grey', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinksSt" href="">CT Marks</Link>
                <Link to='/table-lab-st' style={{color: 'grey', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinksSt" href="">Lab Marks</Link>
                <Link to='/table-viva-st' style={{color: 'grey', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinksSt" href="">Viva Marks</Link>
                <Link to='/table-final-st' style={{color: 'grey', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinksSt" href="">Final Result</Link>
                {/* <Link to='/add-ct' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Add CT Marks</Link>
                <Link to='/add-lab' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Add Lab Marks</Link>
                <Link to='/add-viva' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Add Viva Marks</Link>
                <Link to='/add-final' style={{color: 'white', textDecoration: 'none'}} className="d-flex justify-content-center align-items-center py-3 sideLinks" href="">Add Final Result</Link> */}
            </ul>
        </div>
        
    );
};

export default SidebarSt;