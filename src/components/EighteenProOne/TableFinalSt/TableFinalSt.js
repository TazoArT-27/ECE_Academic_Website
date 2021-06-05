import { makeStyles } from '@material-ui/core';
import { Accordion, AccordionDetails, AccordionSummary,  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SidebarSt from '../SidebarSt/SidebarSt';
import UpperNavST from '../UpperNavST/UpperNavST';
import { faThList } from '@fortawesome/free-solid-svg-icons';

const TableFinalSt = () => {
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
            <UpperNavST/>
            <div className="d-flex">
            <div className="" style={{backgroundColor: '#FFFFFF', width: '290px'}}>
                <SidebarSt></SidebarSt>
            </div>
            <div className="" style={{ width: '100%', backgroundColor: '#F2F4F9'}}>
                <div className="main-table px-5 py-4">
                    <div className={classes.root}>
                        <Accordion style={{background: '#6174E0', color: 'white'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#FFFFFF'}} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className={classes.heading}><FontAwesomeIcon style={{color: '#FFFFFF'}} className='mr-2' icon={faThList} />Semester Final Result</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Semester Final Result of a student is shown here.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <table class="table table-light" style={{fontSize:'15px'}}>
                        <thead>
                            <tr classes={{}} >
                            <th   scope="col">ID</th>
                            <th   scope="col">Name</th>
                            <th   scope="col">Email</th>
                            <th   scope="col">CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TableFinalSt;