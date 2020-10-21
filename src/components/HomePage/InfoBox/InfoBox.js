import React from 'react';
import './InfoBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBoxes, faUserTie, faBezierCurve} from '@fortawesome/free-solid-svg-icons'

const InfoBox = () => {
    return (
        <div className="px-5 my-5">
            <h1 className="text-center mb-5 navy-blue">Overview of <span style={{color: '#007BFF'}}>ECE</span> RUET</h1>
            <div className="col-md-10 mx-auto">
            <div class="card-group">
                <div class="card text-white text-center card-grp" style={{height: '220px'}}>
                    <div class="card-body bg fa-3x">
                    <FontAwesomeIcon icon={faBoxes} />
                    <h2>5</h2>
                    <h4 class="card-text text-center">Series</h4>
                    </div>
                </div>
                <div class="card text-center card-grp" style={{height: '220px'}}>
                    <div class="card-body bgcolor fa-3x">
                    <FontAwesomeIcon icon={faUsers} />
                    <h2>300</h2>
                    <h4 class="card-title text-center">Students</h4>
                    </div>
                </div>
                <div class="card text-center text-white card-grp">
                    <div class="card-body bg fa-3x">
                    <FontAwesomeIcon icon={faUserTie} />
                    <h2>12</h2>
                    <h4 class="card-title">Faculty Members</h4>
                    </div>
                </div>
                <div class="card text-center card-grp">
                    <div class="card-body bgcolor fa-3x">
                    <FontAwesomeIcon icon={faBezierCurve} />
                    <h2>8</h2>
                    <h4 class="card-title">Laboratory</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default InfoBox;