import { Link } from '@material-ui/core';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import FakeStudentInfo from '../../../FakeStudentInfo/FakeStudentInfo';
import Sidebar from '../Sidebar/Sidebar';
import './AllStudentList.css';

const AllStudentList = () => {
    const fakeData = FakeStudentInfo;
    console.log(fakeData);
    const [list, setList] = useState(fakeData);
    
    return (
        <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 table-bg" >
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">SL No.</th>
                        <th scope="col">Roll</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {
                        list.map((student, index) => 
                        <tr>
                        <th scope="row">{student.id}</th>
                        <td>{student.roll}</td>
                        <td>{student.email}</td>
                        <td>{student.mobile}</td>
                        <Link to="/" style={{textDecoration: 'none'}}>
                        <td><button className="btn btn-primary"><FontAwesomeIcon icon={faChevronCircleDown} /></button></td>
                        </Link>
                        </tr>
                        
                        )
                    }
                    </tbody>
                    </table>
                </div>
            </div>
    );
};

export default AllStudentList;