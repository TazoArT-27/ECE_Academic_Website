import React, { useEffect, useState } from 'react';
import './HomeMain.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NoticeBoard from '../NoticeBoard/NoticeBoard'

const HomeMain = () => {
    const [notice, setNotice] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/showNotice")
        .then(res => res.json())
        .then(notice => setNotice(notice))
    }, [])
    useEffect(() => {
        Aos.init({ duration: 1000 })
      }, [])
    return (
        <div className="py-5" style={{background: '#F8F8F8', height: '65vh'}}>
           <div className="container-fluid p-5">
               <div className="col-10 mx-auto">
               <div className="row justify-content-center align-self-center">
                    
                    <div className="col-md-6" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h4 className="navy-blue title-h1 family">Electrical & Computer Engineering Academic Website</h4>
                        <p className="navy-blue title-p family">This website contains academic information's of all RUET <span style={{color: '#007BFF'}}>ECE</span> student's such as attendance, grades, results, lab performances, class test marks, assignment marks and other performances of a student. This website can be used by both student's and teacher's. Teacher's are the admin of this website.</p>
                    </div>
                    <div className="col-md-6"  data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div className='ml-4'>
                        <NoticeBoard notice={notice}></NoticeBoard>
                        </div>
                    </div>
                        
               </div>
               </div>
           </div>
        </div>
    );
};

export default HomeMain;