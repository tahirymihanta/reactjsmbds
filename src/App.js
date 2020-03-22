import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";


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
   backgroundColor:'black',
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
             <h1>METALLICA</h1>
                <Typography variant="h6" className={classes.title}>
                </Typography>
              </Toolbar>
            </AppBar>
            <br/><br/>
          </div>
        
        {/*<Route path="/MetallicaPage" component={MetallicaPage} />*/}
        <Route path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
