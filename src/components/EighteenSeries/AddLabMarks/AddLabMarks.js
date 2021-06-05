import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddLabMarks.css';

const AddLabMarks = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 addLabMarks" >
                    <h3 style={{color: ' #032446'}} className="py-1 text-center">Add Lab Mark</h3>
                    <div className="mainLabPart mx-5 my-1 p-5">
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
                        <label style={{color: ' #032446'}} for="exampleInputPassword1">Experiment Name</label>
                        <input style={{width:"700px",border: "1px solid #fff"}} type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label style={{color: ' #032446'}} for="exampleInputPassword1">Lab Report Mark</label>
                        <input style={{width:"700px", border: "1px solid #fff"}} type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label style={{color: ' #032446'}} for="exampleInputPassword1">Lab Performance Mark</label>
                        <input style={{width:"700px", border: "1px solid #fff"}} type="text" class="form-control"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
        </div>
    );
};

export default AddLabMarks;