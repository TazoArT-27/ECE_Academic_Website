import React from 'react';
import './ClassRoutine.css';
import Routine from '../../../images/classRoutine/classRoutine.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles({
  root: {
    maxWidth: 945,
  },
  media: {
    height: 600,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
    <div className="row">
        <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
        <div className="col-md-10 mx-auto">
        <div className="py-5">
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Routine}
                title="Contemplative Reptile"
                />
            </CardActionArea>
        </Card>
        </div>
        <div class="fileUpload blue-btn btn width100">
        <span>Upload New Routine</span>
        <input type="file" class="uploadlogo" />
        </div>
    </div>
        </div>
    </div>
    </>
  );
}