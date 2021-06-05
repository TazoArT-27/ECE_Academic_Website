import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UpperNav from '../UpperNav/UpperNav';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";


const AddStudents = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        fetch("http://localhost:5000/addStudentInfo", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                e.target.reset();
                alert("Student added successfully");       
            }
        })
        
        
    };

        const useStyles = makeStyles((theme) => ({
            root: {
              width: '100%',
              padding: '30px',
            },
            heading: {
              fontSize: theme.typography.pxToRem(15),
              fontWeight: theme.typography.fontWeightRegular,
            },
          }));
          const classes = useStyles();
        return (
            <div  style={{width: '100%'}}>
                <UpperNav></UpperNav>
                <div className="d-flex">
                <div className="" style={{backgroundColor: '#23232D', width: '290px'}}>
                    <Sidebar></Sidebar>
                </div>
                <div className="" style={{ width: '100%', backgroundColor: '#13131A'}}>
                    <div className={classes.root}>
                        <Accordion style={{background: '#23232D', color: 'white'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#FF3768'}} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className={classes.heading}>Add Student Information<FontAwesomeIcon style={{ color: '#FF3768'}} className='ml-2' icon={faArrowRight} /></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Teacher's can add all student information here.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="add-ct px-5 pb-4 d-flex justify-content-center">
                        <div className="form-card px-5 py-4"  style={{backgroundColor: '#23232D', borderRadius: '30px'}}>
                        <form onSubmit={handleSubmit(onSubmit)} className='text-white' style={{height: '700px', width: '700px'}}>
                            <div className="form-group">
                                <label for="">Name</label>
                                <input name="name" ref={register({ required: true })}  type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control"/>
                                {errors.name && <span className="text-danger" style={{fontSize:'12px'}}>name is required</span>}
                            </div>
                            <div class="form-group">
                                <label for="">Email</label>
                                <input name="email" ref={register({ required: true })}  type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control" />
                                {errors.email && <span className="text-danger" style={{fontSize:'12px'}}>email is required</span>}
                            </div>
                            <div class="form-group">
                                <label for="">ID</label>
                                <input name="id" ref={register({ required: true })}  type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control" />
                                {errors.id && <span className="text-danger" style={{fontSize:'12px'}}>id is required</span>}
                            </div>
                            <div class="form-group">
                                <label for="">Series</label>
                                <input name="series" ref={register({ required: true })}  type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control" />
                                {errors.series && <span className="text-danger" style={{fontSize:'12px'}}>series is required</span>}
                            </div>
                            <div class="form-group">
                                <label for="">Permanent Address</label>
                                <input name="address" ref={register({ required: true })}  type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control" />
                                {errors.address && <span className="text-danger" style={{fontSize:'12px'}}>permanent address is required</span>}
                            </div>
                            <div class="form-group">
                                <label for="">Mobile</label>
                                <input name="mobile" ref={register({ required: true })}  type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control" />
                                {errors.mobile && <span className="text-danger" style={{fontSize:'12px'}}>mobile number is required</span>}
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default AddStudents;