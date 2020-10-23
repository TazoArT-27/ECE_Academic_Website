import React from 'react';
import './AllEventBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faCalendarAlt, faUserEdit, faUserCheck, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AllEventBox = () => {
    return (
        <div className='p-5'>
            <h1 className='text-center pt-2 pb-5' style={{color: '#24243E', fontSize: '40px'}}>ECE'18 Student Management</h1>
            <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-md-4">
                    <Link to='/studentList' style={{textDecoration: 'none'}}>
                        <div class="card  event-box1 event-box" style={{width: '18rem', height: '8rem'}}>
                            <div class="card-body">
                                <h5 class="card-text text-center pt-4"><FontAwesomeIcon icon={faUniversity} /><span className='ml-1'>Students</span></h5>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/classRoutine' style={{textDecoration: 'none'}}>
                        <div class="card  event-box2 event-box" style={{width: '18rem', height: '8rem'}}>
                            <div class="card-body">
                                <h5 class="card-text text-center pt-4"><FontAwesomeIcon icon={faCalendarAlt} /><span className='ml-1'>Class Routine</span></h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                    <Link to='/ctRoutine' style={{textDecoration: 'none'}}>
                        <div class="card event-box3 event-box" style={{width: '18rem', height: '8rem'}}>
                            <div class="card-body">
                                <h5 class="card-text text-center pt-4"><FontAwesomeIcon icon={faUserEdit} /><span className='ml-1'>CT Routine</span></h5>
                            </div>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-4">
                        <div class="card  event-box4 event-box" style={{width: '18rem', height: '8rem'}}>
                            <div class="card-body">
                                <h5 class="card-text text-center pt-4"><FontAwesomeIcon icon={faUserCheck} /><span className='ml-1'>Attendance</span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card  event-box5 event-box" style={{width: '18rem', height: '8rem'}}>
                            <div class="card-body">
                                <h5 class="card-text text-center pt-4"><FontAwesomeIcon icon={faUserTie} /><span className='ml-1'>Teachers</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllEventBox;