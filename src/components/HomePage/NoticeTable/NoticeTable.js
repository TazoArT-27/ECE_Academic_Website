import React from 'react';
import './NoticeTable.css';

const NoticeTable = () => {
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
                    <tr>
                    <div className="sky-bg">
                    <th className="yellow" scope="row">1</th>
                    </div>
                    <td>Mark is a very good man</td>
                    </tr>
                    <tr>
                    <div className="sky-bg">
                    <th className="yellow" scope="row">2</th>
                    </div>
                    <td>Mark is a very good man</td>
                    </tr>
                    <tr>
                    <div className="sky-bg">
                    <th className="yellow" scope="row">3</th>
                    </div>
                    <td>Mark is a very good man Mark is a very good man Mark is a very good man Mark is a very good man</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default NoticeTable;