import React from 'react';

import AddRequest from '../AddRequest/AddRequest';
import { faUsers, faUserTie, faExternalLinkAlt, faCalendarAlt, faUserEdit, faUserPlus, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Calendar from '../../../Calendar/Calendar';
import NoticeBoard from '../NoticeBoard/NoticeBoard';

const DashMain = () => {
    
    return (
        <div className='px-4 pt-4 pb-3'>
        <div className="info mb-5">
            <div className="d-flex">
                <div className="col-md-3">
                    <div class="card" style={{width: "17rem",backgroundColor: '#7732F1'}}>
                        <div class="card-body text-white text-center">
                            <FontAwesomeIcon className='ml-2 fa-2x mb-2' style={{}} icon={faUsers} />
                            <h5 class="card-title mb-2"> 59 Students<Link to='/students'><FontAwesomeIcon className='ml-2' style={{color: 'white', textDecoration: 'none'}} icon={faExternalLinkAlt} /></Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" style={{width: "17rem",backgroundColor: '#29C9BF'}}>
                            <div class="card-body  text-white text-center">
                            <FontAwesomeIcon className='ml-2 fa-2x mb-2' style={{}} icon={faUserTie} />
                                <h5 class="card-title">12 Faculty Members<Link to='/faculty'><FontAwesomeIcon className='ml-2' style={{color: 'white', textDecoration: 'none'}} icon={faExternalLinkAlt} /></Link></h5>
                            </div>
                        </div>
                    </div>
                <div className="col-md-3">
                    <div class="card" style={{width: "17rem",backgroundColor: '#396BF0'}}>
                        <div class="card-body text-white text-center">
                        <FontAwesomeIcon className='ml-2 fa-2x mb-2' style={{}} icon={faCalendarAlt} />
                            <h5 class="card-title">Class Routine<Link to='/class-routine'><FontAwesomeIcon className='ml-2' style={{color: 'white', textDecoration: 'none'}} icon={faExternalLinkAlt} /></Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" style={{width: "17rem",backgroundColor: '#BE53EF'}}>
                        <div class="card-body text-white text-center">
                        <FontAwesomeIcon className='ml-2 fa-2x mb-2' style={{}} icon={faUserEdit} />
                            <h5 class="card-title">CT Routine<Link to='/'><FontAwesomeIcon className='ml-2' style={{color: 'white', textDecoration: 'none'}} icon={faExternalLinkAlt} /></Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex pt-5">
                <div className="col-md-6">
                    <div class="card " style={{width: "36rem",height: '10rem',backgroundColor: '#FF3768'}}>
                        <div class="card-body text-white text-center" style={{paddingTop: '40px'}}>
                            <FontAwesomeIcon className='ml-2 fa-3x mb-2' style={{}} icon={faUserPlus} />
                            <h5 class="card-title mb-2">Add Student Info<Link to='/student-info'><FontAwesomeIcon className='ml-2' style={{color: 'white', textDecoration: 'none'}} icon={faExternalLinkAlt} /></Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="card " style={{width: "36rem",height: '10rem',backgroundColor: '#FF3768'}}>
                        <div class="card-body text-white text-center" style={{paddingTop: '40px'}}>
                            <FontAwesomeIcon className='ml-2 fa-3x mb-2' style={{}} icon={faAddressCard} />
                            <h5 class="card-title mb-2">Add Faculty Member<Link to='/faculty-add'><FontAwesomeIcon className='ml-2' style={{color: 'white', textDecoration: 'none'}} icon={faExternalLinkAlt} /></Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
            <AddRequest></AddRequest>
            <div className="d-flex">
                <div className="col-md-6 pb-4">
                
                    <Calendar className=""></Calendar>
            
                </div>
                <div className="col-md-6 pb-4">
                    <NoticeBoard></NoticeBoard>
                </div>
            </div>
        </div>
    );
};

export default DashMain;