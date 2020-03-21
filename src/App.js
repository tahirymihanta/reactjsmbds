import React from 'react';
import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import OneAlbum from "./components/OneAlbum";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
 back:{
   backgroundColor:'#2F4F4F',
 }
}));

function App() {
  const classes = useStyles();
  
  return (
    <div className="App">
       <BrowserRouter>
       <div className={classes.root}>
            <AppBar position="static">
              <Toolbar className={classes.back}>
              <img src={logo} className="App-logo" alt="logo" />
              <h1>ARTISTS</h1>
                <Typography variant="h6" className={classes.title}>
                {/*<Link to="/Home">Home</Link>
                <Link to="/OneAlbum">Other</Link>*/}
                </Typography>
              </Toolbar>
            </AppBar>
            <br/><br/>
          </div>
        
        <Route path="/Home" component={Home} />
        <Route path="/" component={Home} />
        <Route path="/OneAlbum" component={OneAlbum} />
      </BrowserRouter>
    </div>
  );
}

export default App;
