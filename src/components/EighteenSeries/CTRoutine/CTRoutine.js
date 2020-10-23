import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const CTRoutine = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="col-md-10 mx-auto">
                    <h1>CT Routine Coming Soon</h1>
                </div>
            </div>
        </div>
    );
};

export default CTRoutine;