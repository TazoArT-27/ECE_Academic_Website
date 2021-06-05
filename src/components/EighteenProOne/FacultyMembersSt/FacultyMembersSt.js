import React, { useEffect, useState } from 'react';
import FacultySt from '../FacultySt/FacultySt';
import SidebarSt from '../SidebarSt/SidebarSt';
import UpperNavST from '../UpperNavST/UpperNavST';
import './FacultyMembers.css';
import gif from '../../../images/teachers/Simple preloader.gif';


const FacultyMembersSt = () => {
    const [loading, setLoading] = useState(true);
    const [facultyMembers, setFacultyMembers] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/showFaculty')
        .then(res => res.json())
        .then(data => {
            setFacultyMembers(data)
            setLoading(false);
        })
    }, [])
    return (
        <div  style={{width: '100%'}}>
        <UpperNavST></UpperNavST>
            <div className="d-flex">
            <div className="" style={{backgroundColor: '#FFFFFF', width: '290px'}}>
                <SidebarSt></SidebarSt>
            </div>
            {
                loading ?
                <div className="text-center" style={{ width: '100%', backgroundColor: '#ffffff'}}>
                    <img src={gif} alt=""/>
                </div> :
                <div className="" style={{ width: '100%', backgroundColor: '#F2F4F9'}}>
                <FacultySt facultyMembers={facultyMembers}></FacultySt>
                </div>
            }
        </div>
        </div>
    );
};

export default FacultyMembersSt;