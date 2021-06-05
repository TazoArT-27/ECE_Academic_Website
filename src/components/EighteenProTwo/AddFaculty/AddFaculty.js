import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UpperNav from '../UpperNav/UpperNav';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import './AddFaculty.css';



const AddStudents = () => {
    //const [faculty, setFaculty] = useState({});
    const { register, errors } = useForm();
    const [faculty, setFaculty] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...faculty };
        newInfo[e.target.name] = e.target.value;
        setFaculty(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', faculty.name);
        formData.append('email', faculty.email);
        formData.append('designation', faculty.designation);
        formData.append('mobile', faculty.mobile);
        formData.append('facebook', faculty.facebook);
        formData.append('linkedIn', faculty.linkedIn);

        fetch('http://localhost:5000/addFaculty', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                
                e.target.reset();
                alert("Faculty Member added successfully");
            })
            .catch(error => {
                console.error(error)
            })
    }

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
                            <Typography className={classes.heading}>Add Faculty Member<FontAwesomeIcon style={{ color: '#FF3768'}} className='ml-2' icon={faArrowRight} /></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Admin can add faculty members here.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="add-ct p-5 d-flex justify-content-center">
                        <div className="form-card px-5 py-4"  style={{backgroundColor: '#23232D', borderRadius: '30px'}}>
                        <form onSubmit={handleSubmit} className='text-white' style={{height: '750px', width: '700px'}}>
                            <div className="form-group">
                                <label>Name</label>
                                <input onBlur={handleBlur} name="name" ref={register({ required: true })} type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control"/>
                                {errors.name && <span className="text-danger" style={{fontSize:'12px'}}>name is required</span>}
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input onBlur={handleBlur} name="email" ref={register({ required: true })} type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control"/>
                                {errors.email && <span className="text-danger" style={{fontSize:'12px'}}>email is required</span>}
                            </div>
                            <div class="form-group">
                                <label>Designation</label>
                                <input onBlur={handleBlur} name="designation" ref={register({ required: true })} type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control"/>
                                {errors.designation && <span className="text-danger" style={{fontSize:'12px'}}>designation is required</span>}
                            </div>
                            <div class="form-group">
                                <label>Mobile</label>
                                <input onBlur={handleBlur} name="mobile" ref={register({ required: true })} type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control"/>
                                {errors.mobile && <span className="text-danger" style={{fontSize:'12px'}}>mobile number is required</span>}
                            </div>
                            <div class="form-group">
                                <label>Facebook Profile Link</label>
                                <input onBlur={handleBlur} name="facebook" type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control"/>
                                
                            </div>
                            <div class="form-group">
                                <label>LinkedIn Profile Link</label>
                                <input onBlur={handleBlur} name="linkedIn" type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control"/>
                                
                            </div>
                            {/* <div class="form-group">
                                <label class="file">Upload Image</label>
                                <input name="image"  id="file" aria-label="File browser example" ref={register({ required: true })} type="file" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '5px'}} class="form-control" />
                                <span class="file-custom"></span>
                                {errors.image && <span className="text-danger" style={{fontSize:'12px'}}>image is required</span>}
                            </div> */}
                            <div class="fileUpload blue-btn btn width100" style={{marginRight: '500px'}}>
                                <span>Upload Image</span>
                                <input onChange={handleFileChange}  ref={register({ required: true })} name="image" type="file" class="uploadlogo" />
                            </div>
                            <button type="submit" class="btn btn-primary" style={{backgroundImage: 'linear-gradient( -45deg,  #7F00FF, #E100FF)'}}>Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default AddStudents;