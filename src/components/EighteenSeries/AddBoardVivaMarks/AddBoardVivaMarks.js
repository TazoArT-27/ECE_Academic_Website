import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddBoardVivaMarks.css';

const AddBoardVivaMarks = () => {
    return (
        <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 addCTMarks" >
                    <h3 style={{color: ' #032446'}} className="py-3 text-center">Add Board Viva Mark</h3>
                    <div className="mainCTPart m-5 p-5">
                    <form>
                    <div class="form-group d-flex justify-content-center">
                        <input style={{width:"170px", border: "1px solid #fff"}} placeholder="enter roll number" type="text" class="form-control"/>
                    </div>
                    <div className="col-md-10 mx-auto">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-2">
                            <div class="form-group">
                                <label style={{color: ' #032446'}} for="exampleInputPassword1">Course Name</label>
                                <input style={{width:"100px", border: "1px solid #fff"}} type="text" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label style={{color: ' #032446'}} for="exampleInputPassword1">Obtained Mark</label>
                                <input style={{width:"100px", border: "1px solid #fff"}} type="text" class="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div class="form-group">
                                <label style={{color: ' #032446'}} for="exampleInputPassword1">Course Name</label>
                                <input style={{width:"100px", border: "1px solid #fff"}} type="text" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label style={{color: ' #032446'}} for="exampleInputPassword1">Obtained Mark</label>
                                <input style={{width:"100px", border: "1px solid #fff"}} type="text" class="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div class="form-group">
                                    <label style={{color: ' #032446'}} for="exampleInputPassword1">Course Name</label>
                                    <input style={{width:"100px", border: "1px solid #fff"}} type="text" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label style={{color: ' #032446'}} for="exampleInputPassword1">Obtained Mark</label>
                                    <input style={{width:"100px", border: "1px solid #fff"}} type="text" class="form-control"/>
                                </div>
                        </div>
                        <div className="col-md-2">
                            <div class="form-group">
                                <label style={{color: ' #032446'}} for="exampleInputPassword1">Course Name</label>
                                <input style={{width:"100px", border: "1px solid #fff"}} type="text" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label style={{color: ' #032446'}} for="exampleInputPassword1">Obtained Mark</label>
                                <input style={{width:"100px", border: "1px solid #fff"}} type="text" class="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div class="form-group">
                                    <label style={{color: ' #032446'}} for="exampleInputPassword1">Course Name</label>
                                    <input style={{width:"100px", border: "1px solid #fff"}} type="text" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label style={{color: ' #032446'}} for="exampleInputPassword1">Obtained Mark</label>
                                    <input style={{width:"100px", border: "1px solid #fff"}} type="text" class="form-control"/>
                                </div>
                        </div>
                    </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
    );
};

export default AddBoardVivaMarks;