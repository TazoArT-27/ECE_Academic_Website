import React, { useContext } from 'react';
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../../App';

const UpperNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        
        <div>
            <nav style={{backgroundColor: '#23232D', height:'64px', boxShadow: '0 4px 2px -2px #13131A'}} className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/" style={{color: '#536DFE'}}>ECE Admin Dashboard<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  
                <form className="form-inline my-2 my-lg-0  ml-auto">
                  
                  
                 
                  <input className="form-control mr-sm-2" style={{background: '#202029', border: 'none', borderRadius: '30px'}} type="search" placeholder="Search..." aria-label="Search"/>
                  <button className="btn my-2 my-sm-0" style={{color: '#536DFE'}} type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
                <div className="d-flex mx-1">
                    <img src={loggedInUser.photoURL} style={{height: '40px', width: '40px', borderRadius: '30px'}} alt=""/>
                    <p className="my-auto ml-1 text-white">{loggedInUser.name}</p>
                </div>
              </div>
            </nav>
        </div>
    );
};

export default UpperNav;