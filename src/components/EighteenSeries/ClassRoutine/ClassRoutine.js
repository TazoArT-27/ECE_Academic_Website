import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './ClassRoutine.css';
import routine from '../../../images/classRoutine/classRoutine.png';

const ClassRoutine = () => {

  return (

    <div className="row">
        <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="col-md-10 mx-auto">
            <img className="my-4" src={routine} style={{height:'600px', width:'900px'}} alt=""/>
          </div>
          <div class="fileUpload blue-btn btn width100 ml-5">
              <span>Upload New Routine</span>
              <input type="file" class="uploadlogo" />
          </div>
        </div>
    </div>


  );
}

export default ClassRoutine;