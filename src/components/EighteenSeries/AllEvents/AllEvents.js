import React, { useEffect } from 'react';
import './AllEvents.css';
import Sidebar from '../Sidebar/Sidebar';
import AllEventBox from '../AllEventBox/AllEventBox';


const AllEvents = () => {

    return (
        
        
            <div className="row">
            
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 all-events" >
                    <AllEventBox></AllEventBox>
                </div>
            </div>
        
       
    );
};

export default AllEvents;