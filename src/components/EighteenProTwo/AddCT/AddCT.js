import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UpperNav from '../UpperNav/UpperNav';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";



const AddCT = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        fetch("http://localhost:5000/addClassTestMark", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                e.target.reset();
                alert("CT Mark added successfully");       
            }
        })
        //console.log(data);
        
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
                        <Typography className={classes.heading}>Add Class Test Mark<FontAwesomeIcon style={{ color: '#FF3768'}} className='ml-2' icon={faArrowRight} /></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Teacher's can add class test mark's here.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="add-ct px-5 pb-5 d-flex justify-content-center">
                    <div className="form-card p-5" style={{backgroundColor: '#23232D', borderRadius: '30px'}}>
                    <form onSubmit={handleSubmit(onSubmit)} className='text-white' style={{height: '750px', width: '500px'}}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">ID</label>
                            <input ref={register({ required: true })} name="id" type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '20px'}} class="form-control"/>
                            {errors.id && <span className="text-danger" style={{fontSize:'12px'}}>ID is required</span>}
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Course No.</label>
                            <input ref={register({ required: true })} name="course" type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '20px'}} class="form-control"/>
                            {errors.course && <span className="text-danger" style={{fontSize:'12px'}}>course no. is required</span>}
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">CT-1 Mark</label>
                            <input ref={register({ required: true })} name="testOne" type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '20px'}} class="form-control"/>
                            {errors.testOne && <span className="text-danger" style={{fontSize:'12px'}}>marks is required</span>}
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">CT-2 Mark</label>
                            <input ref={register({ required: true })} name="testTwo" type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '20px'}} class="form-control"/>
                            {errors.testTwo && <span className="text-danger" style={{fontSize:'12px'}}>marks is required</span>}
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">CT-3 Mark</label>
                            <input ref={register({ required: true })} name="testThree" type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '20px'}} class="form-control"/>
                            {errors.testThree && <span className="text-danger" style={{fontSize:'12px'}}>marks is required</span>}
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">CT-4 Mark</label>
                            <input ref={register({ required: true })} name="testFour" type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '20px'}} class="form-control"/>
                            {errors.testFour && <span className="text-danger" style={{fontSize:'12px'}}>marks is required</span>}
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

export default AddCT;