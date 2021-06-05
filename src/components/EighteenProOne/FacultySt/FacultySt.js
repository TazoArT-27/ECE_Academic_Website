import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import './Faculty.css';
import FakeTeacher from '../../EighteenProTwo/FakeTeacher/FakeTeacher';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Faculty = ({facultyMembers}) => {
  const fakeData = FakeTeacher;
    const [faculty, setFaculty] = useState(fakeData);
    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
          marginLeft: '20px',
          marginTop: '20px',
        },
        root2: {
          width: '100%',
          paddingTop: '20px',
          paddingLeft: '20px',
          paddingRight: '20px',
        },
        large: {
            width: theme.spacing(10),
            height: theme.spacing(10),
          },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
          },
          
      }));
      
        const classes = useStyles();

      
      
    return (

      <div className="">
      <div className={classes.root2}>
            <Accordion style={{background: '#6174E0', color: 'white'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white'}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>Faculty Members</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                  Honourable faculty members of ECE
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
      <div className="d-flex p-5 justify-content-center">
      
          <div className="row w-100">
            {
              facultyMembers.map((faculty, index) =>
              <Card className={classes.root}>
              <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.large} src={`data:image/png;base64,${faculty.image.img}`}>
                      
                    </Avatar>
                  }
                  title={faculty.name}
                  subheader={faculty.designation}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {faculty.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {faculty.mobile}
                  </Typography>

                  <Typography variant="body2" color="textSecondary" component="p">
                    Department of Electrical & Computer Engineering
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Rajshahi University of Engineering & Technology
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="facebook.com" onClick={() => window.open(`${faculty.facebook}`)}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton aria-label="Linkedin.com" onClick={() => window.open(`${faculty.linkedIn}`)}>
                    <LinkedInIcon />
                  </IconButton>
                </CardActions>
              </Card>
              )
            }
          </div>
        </div>
        </div>





  );




};

export default Faculty;