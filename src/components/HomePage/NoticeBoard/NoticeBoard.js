import React from 'react';
import NoticeTable from '../NoticeTable/NoticeTable';
import './NoticeBoard.css';

const NoticeBoard = ({notice}) => {
    return (
        <div>
            <div class="card notice-card" style={{width: '30rem'}}>
            <div className='text-center text-white bg'>
                <h4 class="card-title mt-3 family">Notice Board</h4>
                <p>Recent Notices</p>
                </div>
            <div class="card-body">
                
                <NoticeTable notice={notice}></NoticeTable>
                
            </div>
            </div>
        </div>
    );
};

export default NoticeBoard;