import React from 'react';
import Logo from '../../../images/logo/ruetlogo.png';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faFax, faEnvelope, faGlobeAsia} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="container-fluid bg" style={{height: '60vh'}}>
            <div className="col-10 mx-auto">
            <div className='row py-5'>
                <div className="col-md-3">
                <div class="card bg card-grp">
                    <div className='d-flex align-items-center justify-content-center'>
                    <img className="card-img-top" style={{height: '80px', width: '70px'}} src={Logo} alt=""/>
                    </div>
                <div class="card-body">
                    <h6 className="card-title text-white text-center">Rajshahi University of Engineering & Technology</h6>
                    <p className='text-white'>Kazla, Rajshahi-6204, Bangladesh</p>
                    <div>
                    <FontAwesomeIcon className='text-white' icon={faFax} /><span className='ml-2 text-white'> +88 (0721) 750105</span>
                    </div>
                    <div>
                    <FontAwesomeIcon className='text-white' icon={faPhoneAlt} /><span className='ml-1 text-white'> +88 (721) 750742-3, 751320-1</span>
                    </div>
                    <div>
                    <FontAwesomeIcon className='text-white' icon={faEnvelope} /><span className='ml-2 text-white'> registrar@ruet.ac.bd</span>
                    </div>
                    <div>
                    <FontAwesomeIcon className='text-white' icon={faGlobeAsia} /><a  href='https://www.ruet.ac.bd/' className='ml-2 links'>ruet.ac.bd</a>
                    </div>
                </div>
                </div>
                </div>
                <div className="col-md-3 text-white">
                      <h6 className="pl-1 pb-4">Quick Links</h6>
                      <div>
                      <a className="links" href="https://www.ece.ruet.ac.bd/research_overview">Research</a>
                      </div>
                      <div>
                      <a className="links" href="https://www.ece.ruet.ac.bd/publications">Publications</a>
                      </div>
                      <div>
                      <a className="links" href="https://www.ece.ruet.ac.bd/expert&research_field">Expert in research</a>
                      </div>
                      <div>
                      <a className="links" href="https://www.ece.ruet.ac.bd/teacher">Faculty Members</a>
                      </div>
                      <div>
                      <a className="links" href="https://www.ece.ruet.ac.bd/teacher_list">Faculty Short Info</a>
                      </div>
                      <div>
                      <a className="links" href="https://www.ece.ruet.ac.bd/staff">Officers & Stuff</a>
                      </div>
                      <div>
                      <a className="links" href="https://www.ece.ruet.ac.bd/staff">Stuff Info</a>
                      </div>
                      <div>
                      <a className="links" href="https://www.ece.ruet.ac.bd/adviser-list">Advisors/Coordinators</a>
                      </div>
                      <div>
                      <a className="links" href="https://www.ece.ruet.ac.bd/class-representative-list">Class Representatives</a>
                      </div>
                      <div>
                      <a className="links" href="https://www.ece.ruet.ac.bd/page/course-curriculum">Course Curriculum</a>
                      </div>
                </div>
                <div className="col-md-6">
                      <h3 className='text-white pl-1'>Contact Us</h3>
                      <form>
                        <div class="form-group">
                            <input type="email" placeholder="Enter your email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" placeholder="Go ahead, we are listening..." id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                </div>
                
            </div>
        </div>
        <p class="text-center text-white">Built With Love By @shafayat_tazoar_2020</p>
        </div>
    );
};

export default Contact;