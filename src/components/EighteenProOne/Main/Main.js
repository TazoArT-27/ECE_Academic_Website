import React from 'react';
import DashMainSt from '../DashMainSt/DashMainSt';
import SidebarSt from '../SidebarSt/SidebarSt';
import UpperNavST from '../UpperNavST/UpperNavST';

const Main = () => {
    return (
        <div  style={{width: '100%'}}>
            <UpperNavST></UpperNavST>
            <div className="d-flex">
            <div className="" style={{backgroundColor: '#FFFFFF', width: '290px'}}>
                <SidebarSt></SidebarSt>
            </div>
            <div className="" style={{ width: '100%', backgroundColor: '#F2F4F9'}}>
                <DashMainSt></DashMainSt>
            </div>
        </div>
        </div>
    );
};

export default Main;