import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonIcon from '@material-ui/icons/Person';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import CakeIcon from '@material-ui/icons/Cake';
import GroupIcon from '@material-ui/icons/Group';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
  infos:{
    paddingLeft:12,
    paddingTop:5,
  },
  infosP:{
    fontSize:15,
  },
  abstracts:{
    fontSize:14,
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  styleMembers:{
    backgroundColor: '#EDEDED',
    marginLeft:15,
  },
  gridList: {
    flexWrap: 'nowrap',
    height: 700 ,
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
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
  rootMember: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paperMember: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));


export default function Home() {
  const classes = useStyles();

  // recupérer l'initial d'un nom
  const getInitial = (name) => {
    return (name.substr(0, 1));
  };

  // afficher les membres
    let listMembers = metallica.members.map((m, index)=>(
      <div className={classes.rootMember}>
      <Paper className={classes.paperMember}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{getInitial(m.name)}</Avatar>
          </Grid>
          <Grid item xs>
            <Typography align="left" variant="h6">{m.name}</Typography>
            <Typography align="left" className={classes.abstracts}>Birthday : {m.birthDate}</Typography>
            <Typography align="left" className={classes.abstracts}>Gender : {m.gender}</Typography>
            <Typography align="left" className={classes.abstracts}>Begin and end : {m.begin} - {m.end}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
    ));

  // afficher les subjects
  let listSubject = metallica.subject.map((m)=>(
    <div>
     <Typography align="left" className={classes.subject} variant="subtitle1"> <LibraryMusicIcon/>&nbsp;{m}</Typography>
     </div>
  ));

  // afficher la liste des chansons de l'album N°13
  let othersSongs = metallica.albums[12].songs.map((m,index)=>(
      <div>
      <Typography align="left" className={classes.subject} variant="subtitle1"> {index+1}. {m.title}</Typography>
      </div>
    ));

  // récupérer les albums
  let tileData = metallica.albums;

  // filtrer la liste avec image
  let listalb = [];
  for (var index = 0; tileData[index]; index++) {
    if(index!==12){
      listalb.push(tileData[index]);
    }
  }
  // afficher la liste des albums + chansons par albums
  let listAlbums = listalb.map((tile,index)=>(
    <div key={index}>
    <h3>{tile.title}</h3>
    <GridListTile className={classes.gridImg}>
      <img src={tile.cover.big} className={classes.imagealb} />
    </GridListTile>
    <div className={classes.infos}>
      <Typography align="left"className={classes.infosP}>Length : {tile.length}</Typography>
      <Typography align="left"className={classes.infosP}>Country : {tile.country}</Typography>
      <Typography align="left"className={classes.infosP}>Language : {tile.language}</Typography>
      <Typography align="left"className={classes.infosP}>Date release : {tile.publicationDate}</Typography>
      <Typography align="left"className={classes.infosP}>Songs: </Typography>
    </div>
    <OneAlbum allsongs={tile.songs} key={index} />
  </div> 
  ));

  // afficher les informations de Metallica
  let location = metallica.locationInfo.reduce((acc, curr) => `${acc}${curr}, ` ,' ')
  let genres = metallica.genres.reduce((acc, curr) => `${acc}${curr} -` ,' ')
  let labels = metallica.labels.reduce((acc, curr) => `${acc}${curr}, ` ,' ')
  let associated = metallica.associatedMusicalArtist.reduce((acc, curr) => `${acc}${curr}, ` ,' ')
  
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
                <Typography align="left" variant="subtitle1">
                 <p> <CakeIcon/> Birthday :  {metallica.lifeSpan.begin}</p>
                 <p> <LocationOnIcon/> Location : {location}</p>
                 <p> <PersonIcon/> Genre : {genres}</p>
                 <p> <QueueMusicIcon/> Labels : {labels}</p>
                 <p> <EqualizerIcon/> Number of Deezer fans : {metallica.deezerFans}</p>
                 <p> <AssignmentIndIcon/> Associated artist(s) : {associated}</p>
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
        <Grid container spacing={4}>
          <Grid item className={classes.styleMembers}>
          {listMembers}
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography align="justify" className={classes.abstracts}>
                {metallica.abstract}
              </Typography>
              <br/>
              <Grid container spacing={5}>
                  <Grid item>
                      <Typography align="left">Subjects : </Typography>
                      {listSubject}
                  </Grid>
                  <Grid item >
                  <Typography align="left">Others songs : </Typography>
                      {othersSongs}
                  </Grid>
              </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          <div className={classes.root2}>
          <GridList className={classes.gridList} cols={2.5}>
            {listAlbums}
          </GridList>
        </div>
        <br/>
        <Typography>Mini Projet ReactJS - par Tahiry Mihanta FALIHARIMALALA (MBDS Madagascar)</Typography>
    </Paper>
    </div>
  );
}
