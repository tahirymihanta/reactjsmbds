import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import "./MetallicaPage.css";

import metallica from "../data/mettalica";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 350,
  },
});

const MetallicaPage=()=> {
  let localisation = metallica. locationInfo.map((m, index) => (
    <p>{m}</p>
  ));
 
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={metallica.picture.big}
          title={metallica.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {metallica.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {metallica.abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  <p>birtday {metallica.lifeSpan.begin}</p>
   <p>Location : {localisation}</p> 
    </div>
  );
};

export default MetallicaPage;
