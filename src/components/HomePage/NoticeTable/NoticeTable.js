import React from 'react';
import './NoticeTable.css';

const NoticeTable = ({notice}) => {
    return (
        <div>
            <table class="table">
                {/* <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                        notice.map((notice, index=0) => 
                        <tr>
                            <td className="text-muted" style={{fontSize: '15px'}}>{notice.date}</td>
                            <td style={{fontSize: '15px'}}>{notice.notice}</td>
                        </tr>
                        )
                        
                    }
                </tbody>
            </table>
        </div>
    );
};

export default NoticeTable;