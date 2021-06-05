import { makeStyles } from '@material-ui/core';
import { Accordion, AccordionDetails, AccordionSummary,  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UpperNav from '../UpperNav/UpperNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList } from '@fortawesome/free-solid-svg-icons';

const TableCT = () => {
    const [classTest, setClassTest] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/showClassTestMarks")
        .then(res => res.json())
        .then(ct => setClassTest(ct))
    }, [])
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
        // pink: {
        //   color: red[500],
        //   cursor: 'pointer',
        // },
        // blue: {
        //   color:  blue[500],
        //   cursor: 'pointer',
        // },
      }));
      const classes = useStyles();
    return (
        <div  style={{width: '100%'}}>
            <UpperNav/>
            <div className="d-flex">
            <div className="" style={{backgroundColor: '#23232D', width: '290px'}}>
                <Sidebar></Sidebar>
            </div>
            <div className="" style={{ width: '100%', backgroundColor: '#13131A'}}>
                <div className="main-table px-5 py-4">
                    <div className={classes.root}>
                        <Accordion style={{background: '#23232D', color: 'white'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#536DFE'}} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className={classes.heading}><FontAwesomeIcon style={{color: '#536DFE'}} className='mr-2' icon={faThList} />Class Test Marks Table</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Class test marks of all students are listed here.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <table class="table table-primary" style={{fontSize:'15px'}}>
                        <thead>
                            <tr classes={{}} >
                            <th scope="col">ID</th>
                            <th scope="col">Course</th>
                            <th scope="col">CT-1</th>
                            <th scope="col">CT-2</th>
                            <th scope="col">CT-3</th>
                            <th scope="col">CT-4</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classTest.map((ct, index) => 
                                    <tr>
                            <th scope="row">{ct.id}</th>
                            <td>{ct.course}</td>
                            <td>{ct.testOne}</td>
                            <td>{ct.testTwo}</td>
                            <td>{ct.testThree}</td>
                            <td>{ct.testFour}</td>
                            </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TableCT;