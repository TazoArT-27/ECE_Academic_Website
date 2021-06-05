import { makeStyles } from '@material-ui/core';
import { Accordion, AccordionDetails, AccordionSummary,  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import React from 'react';
import SidebarSt from '../SidebarSt/SidebarSt';
import UpperNavST from '../UpperNavST/UpperNavST';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList } from '@fortawesome/free-solid-svg-icons';

const TableVivaSt = () => {
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
                            <Typography className={classes.heading}><FontAwesomeIcon style={{color: '#FFFFFF'}} className='mr-2' icon={faThList} />Board Viva Marks</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Board viva marks of a student are listed here.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <table class="table table-light" style={{fontSize:'15px'}}>
                        <thead>
                            <tr classes={{}} >
                            <th   scope="col">ID</th>
                            <th   scope="col">Course-1</th>
                            <th   scope="col">Course-2</th>
                            <th   scope="col">Course-3</th>
                            <th  scope="col">Course-4</th>
                            <th   scope="col">Course-5</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TableVivaSt;