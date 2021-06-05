import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UpperNav from '../UpperNav/UpperNav';
import routine from '../../../images/classRoutine/classRoutine.png';
import { Accordion, AccordionDetails, AccordionSummary, Button, makeStyles, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const ClassRoutine = () => {
    const useStyles = makeStyles((theme) => ({
        root2: {
          width: '100%',
          paddingTop: '20px',
          paddingLeft: '20px',
          paddingRight: '20px',
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
            <div className={classes.root2}>
                <Accordion style={{background: '#23232D', color: 'white'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Class Routine of 3rd Semester</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Class routine can be changed by the button below.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className='d-flex justify-content-center'>
                <img className="p-5" style={{height: '800px', width: '1100px'}} src={routine} alt=""/>
                </div>
                <div className="px-5 pb-5 d-flex justify-content-center">
                <Button className="" variant="contained" color="secondary">
                    Change Routine
                </Button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ClassRoutine;