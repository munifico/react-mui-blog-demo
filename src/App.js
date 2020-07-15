import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header/index';
import HeroBox from './components/Hero/index';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Posts from './components/Card/index';
//import theme from './theme';

const useStyles = makeStyles((theme) => ({
    appBar : {
      backgroundColor: "#fff",
    },
    hero : {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb.1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize : "cover",
        position : "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize : "4rem",
        [theme.breakpoints.down("sm")] : {
          height: 300,
          fontSize : "3em"        
        }
    },
    blogsContainer : {
      paddingTop: theme.spacing(3),
    },
    blogTitle : {
      fontWeight: 800,
      paddingBottom: theme.spacing(3),
    },
    card: {
      maxWidth: "100%",
    },
    media: {
      height: 140
    },
    avatarContent : {
      display: "flex",
      margin: "0, 10px",
      justifyContent: "space-between"
    },
    author: {
      display: "flex"
    }
  }));


function App() {
  const classes = useStyles();
  return (
     <div className="App">
      <Header className={classes.appBar}></Header>
      <HeroBox className={classes.hero}></HeroBox>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>Articles</Typography>
          <Posts className={classes.card} media={classes.media} avatarContent={classes.avatarContent} author={classes.author}></Posts>
      </Container>
    </div>
    
  );
}

export default App;
