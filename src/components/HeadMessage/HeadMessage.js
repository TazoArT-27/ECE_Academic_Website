import React from 'react';
import { useParams } from 'react-router-dom';
import Message from '../../Message/Message';
import DeptHead from '../../images/teachers/shamimanower.jpg';
import './HeadMessage.css';
import Navbar from '../HomePage/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

const HeadMessage = () => {

    const message = Message;
    const {id} = useParams();
    console.log(id);
    if(message.id === id){
        return message;
    }
    return (
        <div>
        <Navbar></Navbar>
            {/* <div>
                <h2 className="pt-3 pb-4 text-center text-white bg">Message from Head</h2>
            </div> */}
            <main className="px-5 py-5" style={{background: '#F8F8F8'}}>
            <div className="col-md-10 mx-auto">
            
            
                <h4 className="p-3 text-white title-bg">Message from Head
                    <span className="pl-3"><FontAwesomeIcon icon={faForward} /></span>
                </h4>
            <div className="row main-part" style={{background: 'white'}}>
                
                <div className="col-md-3">
                    <img className="my-5 mx-1 head-img" src={DeptHead} alt=""/>
                </div>
                <div className="col-md-9">
                    <p className="px-5 pt-5 pb-3">{message.paragraph}
                    <span>
                        <p>
                        national and international Electrical and Computer industry. This department has started its glorious journey under the Faculty of Electrical and Computer Engineering, Rajshahi University of Engineering & Technology. It offers four years B.Sc. Engineering degree with a provision of taking either Electrical power Engineering or Electronics or Computer Engineering as the major track. An advance Electrical and Computer related education has been designed to bring out the best in students aspiring to enter the profession. The department is committed to recruiting highly educated teaching staffs. The department has well-equipped laboratories in all major areas of ECE for making students practically sound. We regularly review the course curricula to update with the latest trends in ECE technologies. Various co-curricular and extra-curricular activities are arranged to develop essential skills to excel in their future career.
                        </p>
                    </span>
                    <span className="pt-5">
                    <p>
                    Our objectives is to produce graduates who will help make Bangladesh the foremost electrical/electronic/computer related industrial center in the world, to create significant individual and industrial growth opportunities, and to be recognized as one of the premier electrical and computer engineering departments in the Bangladesh as like as some famous universities in the world. Currently, ECE offers four years undergraduate degrees.  Programs are accredited by the Institution of Engineers Bangladesh (IEB) [http://www.iebbd.org/]. The quality of teaching in the department is widely recognized and our teachers have won many national & international awards. They have practical experiences at the Faculty, University, and many national levels organizations. Our faculty members conduct research in most areas of electrical, power systems, computer and software engineering, and lead teams of graduate students and research personnel. They are highly motivated, dynamic and professional.  The departmental laboratories are well equipped with state of the art instruments and devices. All scholar students of this country get chance for admission after facing a nationwide highly competitive examination. So, the quality of our student is without a doubt one of our main assets, which makes life in ECE dynamic, intellectually stimulating and rewarding. Currently, we are accepting 60 (Sixty) numbers of student each academic year. Because of its wider scope and emerging demand worldwide, in very near future admission seekers will place ECE as their top choice.
                    </p>
                    </span>
                    
                    <span className="pt-5">
                        <p>
                        So, ECE offers a wealth of opportunities for stimulating collaborations, multidisciplinary projects, and industrially relevant innovation.
                        </p>
                    </span>
                    <span className="pt-5">
                        <p>
                        Our friendly and efficient support staff is deployed in support of our core academic missions and is available to respond to your inquiries and to help you whenever they can.
                        </p>
                    </span>
                    <span className="pt-5">
                        <p>
                        I hope you will enjoy browsing our website and that you will not hesitate to get in contact with us, as guardians, prospective student, a returning alumnus, or a potential research collaborator!
                        </p>
                    </span>
                    <span className="pt-5">
                        <p>
                        You are most welcome. Hope to see with you in this campus.
                        </p>
                    </span>
                    </p>
                    <a className="" style={{textDecoration: 'none'}} href="https://www.ece.ruet.ac.bd/Professor%20Dr.%20Md.%20Shamim%20Anower">
                        <h5 className='px-5 pb-1 head-name'>Dr. Md. Shamim Anower</h5>
                    </a>
                    <h5 className='px-5 pb-4'>Head of ECE, RUET</h5>
                    
                </div>
            </div>
            </div>
            </main>
        </div>
    );
};

export default HeadMessage;