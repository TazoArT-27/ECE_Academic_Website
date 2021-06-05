import React, { useContext } from 'react';
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../../App';

const UpperNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        
        <div>
            <nav style={{backgroundColor: '#6174E0', height:'64px', boxShadow: '0 4px 2px -2px #6174E0'}} class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="/" style={{color: '#FFFFFF'}}>ECE Student's Site<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0  ml-auto">
                  <input class="form-control mr-sm-2" style={{background: '#FFFFFF', border: 'none', borderRadius: '30px'}} type="search" placeholder="Search..." aria-label="Search"/>
                  <button class="btn my-2 my-sm-0" style={{color: '#ffffff'}} type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
              </div>
              <div className="d-flex mx-1">
                    <img src={loggedInUser.photoURL} style={{height: '40px', width: '40px', borderRadius: '30px'}} alt=""/>
                    <p className="my-auto ml-1" style={{color: '#ffffff'}}>{loggedInUser.name}</p>
              </div>
          </nav>
        </div>
    );
};

export default UpperNav;