import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import fakeData from '../../../FakeStudentInfo/FakeStudentInfo';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import './StudentList.css';
import { blue, red } from '@material-ui/core/colors';

const StudentListSt = ({students}) => {
    // const [list, setList] = useState(fakeData);
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
        pink: {
          color: red[500],
          cursor: 'pointer',
        },
        blue: {
          color:  blue[500],
          cursor: 'pointer',
        },
      }));
      const classes = useStyles();







  return (
    <div className="main-table px-5 py-4">
        <div className={classes.root}>
            <Accordion style={{background: '#6174E0', color: 'white'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white'}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>Student's Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Basic information about the student's of ECE 18 series
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <table className="table table-light">
            <thead>
                <tr style={{fontSize: '13px'}}>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
            {
                        students.map((student, index) => 
                        <tr style={{fontSize: '13px'}}>
                        <th scope="row">{student.id}</th>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.mobile}</td>
                        <td>{student.address}</td>
                        </tr>
                        
                        )
            }
            </tbody>
        </table>
    </div>
  );




};

export default StudentListSt;