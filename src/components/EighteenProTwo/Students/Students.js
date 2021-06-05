import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import StudentList from '../StudentList/StudentList';
import UpperNav from '../UpperNav/UpperNav';

const Students = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/showStudentInfo")
        .then(res => res.json())
        .then(students => setStudents(students))
    }, [])
    return (
        <div  style={{width: '100%'}}>
        <UpperNav></UpperNav>
            <div className="d-flex">
            <div className="" style={{backgroundColor: '#23232D', width: '290px'}}>
                <Sidebar></Sidebar>
            </div>
            <div className="" style={{ width: '100%', backgroundColor: '#13131A'}}>
                <StudentList students={students}></StudentList>
            </div>
        </div>
        </div>
    );
};

export default Students;