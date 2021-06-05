import React, { useEffect, useState } from 'react';
import SidebarSt from '../SidebarSt/SidebarSt';
import StudentListSt from '../StudentListSt/StudentListSt';
import UpperNavST from '../UpperNavST/UpperNavST';
import gif from '../../../images/teachers/Simple preloader.gif';


const StudentsSt = () => {
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/showStudentInfo")
        .then(res => res.json())
        .then(students => {
            setStudents(students)
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
                </div>:
                <div className="" style={{ width: '100%', backgroundColor: '#F2F4F9'}}>
                    <StudentListSt students={students}></StudentListSt>
                </div>
            }
        </div>
        </div>
    );
};

export default StudentsSt;