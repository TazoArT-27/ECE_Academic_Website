import React from 'react';

import { faUsers, faUserTie, faExternalLinkAlt, faCalendarAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';

const DashMainSt = () => {
    
    return (
        <div className='px-4 pt-4 pb-3'>
        <div className="info mb-5">
            <div className="d-flex">
                <div className="col-md-3">
                    <div class="card" style={{width: "17rem",backgroundImage: 'linear-gradient(45deg, #5D6DEB, #7D60DD)'}}>
                        <div class="card-body text-white text-center">
                            <FontAwesomeIcon className='ml-2 fa-2x mb-2' style={{}} icon={faUsers} />
                            <h5 class="card-title mb-2"> 59 Students<Link to='/studentsSt'><FontAwesomeIcon className='ml-2' style={{color: 'white', textDecoration: 'none'}} icon={faExternalLinkAlt} /></Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" style={{width: "17rem",backgroundImage: 'linear-gradient( 45deg, #14C9F8, #137BEE)'}}>
                            <div class="card-body  text-white text-center">
                            <FontAwesomeIcon className='ml-2 fa-2x mb-2' style={{}} icon={faUserTie} />
                                <h5 class="card-title">12 Faculty Members<Link to='/facultySt'><FontAwesomeIcon className='ml-2' style={{color: 'white', textDecoration: 'none'}} icon={faExternalLinkAlt} /></Link></h5>
                            </div>
                        </div>
                    </div>
                <div className="col-md-3">
                    <div class="card" style={{width: "17rem", backgroundImage: 'linear-gradient( 45deg, #F33456, #EF5E3D)'}}>
                        <div class="card-body text-white text-center">
                        <FontAwesomeIcon className='ml-2 fa-2x mb-2' style={{}} icon={faCalendarAlt} />
                            <h5 class="card-title">Class Routine<Link to='/class-routine-st'><FontAwesomeIcon className='ml-2' style={{color: 'white', textDecoration: 'none'}} icon={faExternalLinkAlt} /></Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" style={{width: "17rem",backgroundColor: '#1B204F'}}>
                        <div class="card-body text-white text-center">
                        <FontAwesomeIcon className='ml-2 fa-2x mb-2' style={{}} icon={faUserEdit} />
                            <h5 class="card-title">CT Routine<Link to='/'><FontAwesomeIcon className='ml-2' style={{color: 'white', textDecoration: 'none'}} icon={faExternalLinkAlt} /></Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
            <div className="d-flex">
                <div className="col-md-6 pb-4">
                
                    <Calendar className=""></Calendar>
            
                </div>
            </div>
        </div>
    );
};

export default DashMainSt;