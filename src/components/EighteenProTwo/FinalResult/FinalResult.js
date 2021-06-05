import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UpperNav from '../UpperNav/UpperNav';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FinalResult = () => {

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
                            <Typography className={classes.heading}>Add Semester Final CGPA<FontAwesomeIcon style={{ color: '#FF3768'}} className='ml-2' icon={faArrowRight} /></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Teacher's can add board viva mark's here.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="add-ct px-5 pb-5 d-flex justify-content-center">
                        <div className="form-card p-5" style={{backgroundColor: '#23232D', borderRadius: '30px'}}>
                        <form className='text-white' style={{height: '300px', width: '500px'}}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">ID</label>
                                <input type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '20px'}} class="form-control" id="exampleInputEmail1"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Semester</label>
                                <input type="number" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '20px'}} class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">CGPA</label>
                                <input type="text" style={{ backgroundColor: '#13131A', border: 'none', color: 'white', borderRadius: '20px'}} class="form-control" id="exampleInputPassword1"/>
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

export default FinalResult;