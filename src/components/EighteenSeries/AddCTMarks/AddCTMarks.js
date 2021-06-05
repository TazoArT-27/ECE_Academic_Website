import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddCTMarks.css';

const AddCTMarks = () => {
    return (
        <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 addCTMarks" >
                    <h3 style={{color: ' #032446'}} className="py-3 text-center">Add CT Mark</h3>
                    <div className="mainCTPart m-5 p-5">
                    <form>
                    <div class="form-group">
                        <label style={{color: ' #032446'}} for="exampleInputEmail1">Roll</label>
                        <input style={{width:"700px", border: "1px solid #fff"}} type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label style={{color: ' #032446'}} for="exampleInputPassword1">Course Name</label>
                        <input style={{width:"700px", border: "1px solid #fff"}} type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label style={{color: ' #032446'}} for="exampleInputPassword1">CT No.</label>
                        <input style={{width:"700px",border: "1px solid #fff"}} type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label style={{color: ' #032446'}} for="exampleInputPassword1">Obtained Mark</label>
                        <input style={{width:"700px", border: "1px solid #fff"}} type="text" class="form-control"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
    );
};

export default AddCTMarks;