import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

// importer les données dans metallica.js
import metallica from "../data/mettalica";

// importer la partie Membres des données
import Membres from "./Membres";
import OneAlbum from "./OneAlbum";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  root3: {
    width: 500,
    maxWidth: 500,
    backgroundColor: '#EDEDED',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  gridList: {
    flexWrap: 'nowrap',
    height: 600 ,
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1175,
  },
  imagealb:{
    width: 300,
    height: 300,
  },
  image: {
    width: 500,
    height: 400,
  },
  imageSocial: {
    width: 40,
    height: 40,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
 espace:{
  paddingTop:40,
 },
}));


export default function ComplexGrid() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  let listeDesMembres = metallica.members.map((m, index) => (
    <Membres membre={m} key={index} />
  ));

  let listeMembre = metallica.members.map((m, index) => (
    <div>
    <ListItem button onClick={handleClick}>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary={m.name} />
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
   <Collapse in={open} timeout="auto" unmountOnExit>
   <List component="div" disablePadding>
     <ListItem button className={classes.nested}>
       <ListItemIcon>
         <StarBorder />
       </ListItemIcon>
       <ListItemText primary="Starred" />
     </ListItem>
     <ListItem button className={classes.nested}>
       <ListItemIcon>
         <StarBorder />
       </ListItemIcon>
       <ListItemText primary="Autres" />
     </ListItem>
   </List>
 </Collapse>
 </div>
  ));

  let location = metallica.locationInfo.reduce((acc, curr) => `${acc}${curr}, ` ,' ')
  let genres = metallica.genres.reduce((acc, curr) => `${acc}${curr} -` ,' ')
  let labels = metallica.labels.reduce((acc, curr) => `${acc}${curr}, ` ,' ')
  let associated = metallica.associatedMusicalArtist.reduce((acc, curr) => `${acc}${curr}, ` ,' ')
  
let tileData = metallica.albums;

let listalb = [];
for (var index = 0; tileData[index]; index++) {
  if(index!==12){
    listalb.push(tileData[index]);
  }
}

let listAlbums = listalb.map((tile,index)=>(
  <div key={index}>
  <h3>{tile.title}</h3>
  <GridListTile className={classes.gridImg}>
    <img src={tile.cover.big} className={classes.imagealb} />
  </GridListTile>
 
   <OneAlbum allsongs={tile.songs} key={index} />
</div> 
));


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <div className={classes.image}>
              <img className={classes.img} alt="complex" src={metallica.picture.big}/>
            </div>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography align="left" variant="h3">
                 {metallica.name}
                </Typography>
                <Typography align="left" variant="subtitle1">
                 <p> Birthday :  {metallica.lifeSpan.begin}</p>
                 <p> Location : {location}</p>
                 <p> Genre : {genres}</p>
                 <p> labels : {labels}</p>
                 <p> Number of Deezer fans : {metallica.deezerFans}</p>
                 <p> Associated artist(s) : {associated}</p>
                 <a href= {metallica.urlYouTube}><img className={classes.imageSocial} alt="YouTube" src={require('../data/youtube.png')}/></a>&nbsp;
                 <a href= {metallica.urlITunes}><img className={classes.imageSocial} alt="iTunes" src={require('../data/itunes.png')}/></a>&nbsp;
                 <a href= {metallica.urlSoundCloud}><img className={classes.imageSocial} alt="SoundCloud" src={require('../data/soundcloud.png')}/></a>&nbsp;
                 <a href= {metallica.urlTwitter}><img className={classes.imageSocial} alt="Twitter" src={require('../data/twitter.png')}/></a>&nbsp;
                 <a href= {metallica.urlWikipedia}><img className={classes.imageSocial} alt="Wikipédia" src={require('../data/wiki.png')}/></a>&nbsp;
                 <a href= {metallica.urlFacebook}><img className={classes.imageSocial} alt="facebook" src={require('../data/fb.png')}/></a>&nbsp;
                 <a href= {metallica.urlAmazon}><img className={classes.imageSocial} alt="Amazon" src={require('../data/amazone.png')}/></a>&nbsp;
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.espace}></div>
        <Grid container spacing={2}>
          <Grid item>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root3}
              >
               {listeMembre}
            </List>
          </Grid>
          <Grid item xs={8} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography align="justify">
                {metallica.abstract}
              </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          <div className={classes.root2}>
          <GridList className={classes.gridList} cols={2.5}>
            {listAlbums}
          </GridList>
        </div>
        
        {/*<OneAlbum album={tile}/>*/}
          <h1>Membres </h1>
          <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Informations</TableCell>
                    <TableCell>abstract</TableCell>
                    <TableCell>dbp_abstract</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{listeDesMembres}</TableBody>
              </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
