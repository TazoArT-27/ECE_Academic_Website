import React from 'react';
import './SeriesLoginSelection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';




  export default function SeriesLoginSelection() {



    return (
        <div className='body'>
            <div class="container">
        <div class="cards">
            <div class="face face1">
                <div class="content">
                    <h4>16 Series</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="">
                    <Link to="/">
                        <button className="btn btn-primary btn-series">Entry<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></button>
                    </Link>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="face face1">
                <div class="content">
                    <h4>17 Series</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="">
                    <Link to="/">
                        <button className="btn btn-primary btn-series">Entry<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></button>
                    </Link>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="face face1">
                <div class="content">
                    <h4>18 Series</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="">
                    <Link to="/seriesEighteen">
                        <button className="btn btn-primary btn-series">Entry<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></button>
                    </Link>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="face face1">
                <div class="content">
                    <h4>19 Series</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="">
                    <Link to="/">
                        <button className="btn btn-primary btn-series">Entry<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};
