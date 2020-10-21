import React from 'react';
import './Laboratory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faLaptopCode, faBolt, faChargingStation, faPowerOff, faNetworkWired, faRobot, faShareAltSquare} from '@fortawesome/free-solid-svg-icons'


const Laboratory = () => {
    return (
        <div className="px-5 mt-5 depthead-bg py-3">
            <h1 className="text-center mb-5 navy-blue"><span style={{color: '#007BFF'}}>Laboratory</span> Facilities</h1>
            <div className="row">
                <div className="col-md-10 mx-auto">
            <div class="card-group">
                <div class="card text-center card-grp" style={{height: '200px'}}>
                    <div class="card-body light-blue fa-3x">
                    <FontAwesomeIcon icon={faDesktop} />
                    <h5 class="card-text text-center pt-3">Programming Lab</h5>
                    </div>
                </div>
                <div class="card text-center card-grp ml-2" style={{height: '200px'}}>
                    <div class="card-body light-blue fa-3x">
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <h5 class="card-title text-center pt-3">Software Lab</h5>
                    </div>
                </div>
                <div class="card text-center card-grp ml-2">
                    <div class="card-body light-blue fa-3x">
                    <FontAwesomeIcon icon={faBolt} />
                    <h5 class="card-title text-center pt-3">Electrical Circuit Lab</h5>
                    </div>
                </div>
                <div class="card text-center card-grp ml-2">
                    <div class="card-body light-blue fa-3x">
                    <FontAwesomeIcon icon={faChargingStation} />
                    <h5 class="card-title pt-3">Analog and Digital Electronic Lab</h5>
                    </div>
                </div>
                </div>
            </div>
        </div>

            <div className="row py-5">
                <div className="col-md-10 mx-auto">
                <div class="card-group">

                <div class="card text-center card-grp" style={{height: '200px'}}>
                    <div class="card-body light-blue fa-3x">
                    <FontAwesomeIcon icon={faPowerOff} />
                    <h5 class="card-text text-center pt-3">Power System Lab</h5>
                    </div>
                </div>
                <div class="card text-center card-grp ml-2" style={{height: '200px'}}>
                    <div class="card-body light-blue fa-3x">
                    <FontAwesomeIcon icon={faNetworkWired} />
                    <h5 class="card-title text-center pt-3">Network & Security Lab</h5>
                    </div>
                </div>
                <div class="card text-center card-grp ml-2">
                    <div class="card-body light-blue fa-3x">
                    <FontAwesomeIcon icon={faRobot} />
                    <h5 class="card-title pt-3">Robotics & IoT Lab</h5>
                    </div>
                </div>
                <div class="card text-center card-grp ml-2">
                    <div class="card-body light-blue fa-3x">
                    <FontAwesomeIcon icon={faShareAltSquare} />
                    <h5 class="card-title pt-3">Peripheral & Interfacing Lab</h5>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Laboratory;