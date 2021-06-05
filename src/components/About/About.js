import React from 'react';
import "../About/About.css";
import Navbar from '../HomePage/Navbar/Navbar';
import DeptPhoto from '../../images/ecephotos/deptece.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <>
          <Navbar></Navbar>  
          <main className="px-5 py-5 dept-about" style={{background: '#F8F8F8'}}>
            <div className="col-md-10 mx-auto">
            
            
                <h4 className="p-3 text-white title-bg">Department of ECE
                    <span className="pl-3"><FontAwesomeIcon icon={faForward} /></span>
                </h4>
            <div className="row main-part" style={{background: 'white'}}>
                
                <div className="col-md-3">
                    <img className="my-5 mx-1 dept-img" src={DeptPhoto} alt=""/>
                </div>
                <div className="col-md-9">
                    <p className="px-5 pt-5 pb-3">
                    Rajshahi University of Engineering & Technology, one of the top engineering university in the country, has opened the department of Electrical and Computer Engineering (ECE) in 2016. The department has the mission of accumulation, generation and propagation of knowledge in the field of Electrical and Computer Engineering. The central aim to the mission is a top quality educational program and research that benefits our students, researcher, the division of Rajshahi, the national and the world. The department also focuses and acts for enlargement, growth and entrepreneurship. It is expected that the department will assist future growth in areas of fundamental economic importance to the country.
                    </p>
                    
                </div>
            </div>
            </div>
            </main>
        </>
    );
};

export default About;