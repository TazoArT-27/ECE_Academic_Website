import React from 'react';
import './HomeAbout.css';
import DeptHead from '../../../images/teachers/shamimanower.jpg';
import { Link } from 'react-router-dom';
import Message from '../../../Message/Message';



const HomeAbout = () => {
    const message = Message;
    console.log(message.paragraph);
    return (
        <div className="py-5">
           <div className="container-fluid p-5">
               <div className="col-10 mx-auto">
               <div className="row justify-content-center align-self-center">
                    
                    <div className="col-md-6 py-5">
                        <h2 className="family navy-blue" >About <span style={{color: '#007BFF'}}>ECE</span> RUET</h2>
                        <p className="navy-blue title-p family">Rajshahi University of Engineering & Technology, one of the top engineering university in the country, has opened the department of Electrical and Computer Engineering (ECE) in 2016. The department has the mission of accumulation, generation and propagation of knowledge in the field of Electrical and Computer Engineering.....</p>
                        <Link to='about'>
                        <button type="button" class="btn btn-outline-primary">Read More</button>
                        </Link>
                    </div>
                    <div className="col-md-6 depthead-bg py-5">
                        <div className='ml-5'>
                            <h3 className='navy-blue'>Head Message</h3>
                            <div class="card card-grp mb-3" style={{maxWidth: '470px'}}>
                                <div class="row no-gutters">
                                    <div class="col-md-4 d-flex align-items-center">
                                        <img src={DeptHead} class="card-img" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title navy-blue">Dr. Md. Shamim Anower</h5>
                                            <p class="card-text">{message.paragraph}</p>
                                        </div>
                                    </div>
                                        
                                </div>
                             </div>
                            <Link to={`/speech/`+message.id}>
                                <button type="button" class="btn btn-outline-primary">Read More</button>
                            </Link>
                        </div>
                    </div>
                        
               </div>
               </div>
           </div>
        </div>
    );
};

export default HomeAbout;