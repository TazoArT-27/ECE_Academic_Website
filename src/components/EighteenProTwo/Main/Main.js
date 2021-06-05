import React from 'react';
import DashMain from '../DashMain/DashMain';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    return (
        <div  style={{width: '100%'}}>
            <div className="d-flex">
            <div className="" style={{backgroundColor: '#23232D', width: '290px'}}>
                <Sidebar></Sidebar>
            </div>
            <div className="" style={{ width: '100%', backgroundColor: '#13131A'}}>
                <DashMain></DashMain>
            </div>
        </div>
        </div>
    );
};

export default Main;