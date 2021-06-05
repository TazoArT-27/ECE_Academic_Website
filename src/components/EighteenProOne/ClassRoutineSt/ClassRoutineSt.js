import React from 'react';
import SidebarSt from '../SidebarSt/SidebarSt';
import UpperNavST from '../UpperNavST/UpperNavST';
import routine from '../../../images/classRoutine/classRoutine.png';
import { Accordion, AccordionDetails, AccordionSummary, Button, makeStyles, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const ClassRoutineSt = () => {
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
        <UpperNavST></UpperNavST>
            <div className="d-flex">
            <div className="" style={{backgroundColor: '#FFFFFF', width: '290px'}}>
                <SidebarSt></SidebarSt>
            </div>
            
            <div className="" style={{ width: '100%', backgroundColor: '#F2F4F9'}}>
            <div className={classes.root2}>
                <Accordion style={{background: '#6174E0', color: 'white'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Class Routine of 3rd Semester</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className='d-flex justify-content-center'>
                <img className="p-5" style={{height: '800px', width: '1100px'}} src={routine} alt=""/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ClassRoutineSt;