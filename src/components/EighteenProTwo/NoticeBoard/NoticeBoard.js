import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";


const NoticeBoard = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        fetch("http://localhost:5000/addNotice", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                e.target.reset();
                alert("Notice board updated successfully");       
            }
        })
        console.log(data)
        
        
    };
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));
      const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                        <Accordion style={{background: '#23232D', color: 'white'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#FF3768'}} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className={classes.heading}>Update Notice Board<FontAwesomeIcon style={{ color: '#FF3768'}} className='ml-2' icon={faArrowRight} /></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Notice board can be updated from here.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="" style={{backgroundColor: '#23232D',borderRadius: '0px 0px 7px 7px', height: '16.5rem'}}>
                        <form onSubmit={handleSubmit(onSubmit)} className='px-5'>
                            <div class="form-group">
                                <label>Date</label>
                                <input name="date" ref={register({ required: true })} style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '10px'}} type="text" class="form-control"/>
                                {errors.date && <span className="text-danger" style={{fontSize:'10px'}}>date is required</span>}
                            </div>
                            <div class="form-group">
                                <label>Add Notice</label>
                                <input name="notice" ref={register({ required: true })} style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '10px'}} type="text" class="form-control"/>
                                {errors.notice && <span className="text-danger" style={{fontSize:'10px'}}>notice is required</span>}
                            </div>
                            <button type="submit" class="btn btn-primary" style={{backgroundImage: 'linear-gradient( -45deg,  #7F00FF, #E100FF)'}}>Submit</button>
                        </form>
                    </div>
        </>
    );
};

export default NoticeBoard;