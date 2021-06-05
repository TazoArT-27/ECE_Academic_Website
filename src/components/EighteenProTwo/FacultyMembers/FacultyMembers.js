import React, { useEffect, useState } from 'react';
import Faculty from '../Faculty/Faculty';
import Sidebar from '../Sidebar/Sidebar';
import UpperNav from '../UpperNav/UpperNav';
import './FacultyMembers.css';
import gif from '../../../images/teachers/smile_loader_by_gleb.gif';


const FacultyMembers = () => {
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
        <UpperNav></UpperNav>
            <div className="d-flex">
            <div className="" style={{backgroundColor: '#23232D', width: '290px'}}>
                <Sidebar></Sidebar>
            </div>
            {
                loading ? 
                <div className="text-center" style={{ width: '100%', backgroundColor: '#000000'}}>
                    <img src={gif} alt=""/>
                </div> : 
                <div className="" style={{ width: '100%', backgroundColor: '#13131A'}}>
                    <Faculty facultyMembers={facultyMembers}></Faculty>
                </div>
            }
        </div>
        </div>
    );
};

export default FacultyMembers;