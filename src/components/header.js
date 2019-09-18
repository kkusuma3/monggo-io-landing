import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import monggoLogo from '../images/logo_transparent.png';

const useStyles = makeStyles((theme) => ({
  homeNavBar: {
    backgroundColor: 'white',
    padding: '0 50px',
  },
  homeIcon: {
    height: 75,
    marginBottom: 0,
  },
  tabTitle: {
    flexGrow: 1,
    color: '#C54754',
    textAlign: 'center',
    cursor: 'pointer',
  },
  tabUnderline: {
    margin: 'auto',
    borderRadius: 15,
    borderTop: '5px solid #C54754',
    width: 75,
    transition: '0.5s',
    '&:hover': {
      width: 125,
    },
  },
  buttonSignUp: {
    borderRadius: 15,
    backgroundColor: '#C54754',
    color: 'white',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.homeNavBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} lg={2}>
            <img alt="Monggo.io logo" src={monggoLogo} className={classes.homeIcon} />
          </Grid>
          <Grid container lg={8} direction="row">
            <Grid item lg={4}>
              <Typography variant="h6" className={classes.tabTitle}>
                What is Monggo.io?
                <hr className={classes.tabUnderline} />
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography variant="h6" className={classes.tabTitle}>
                How it Works
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography variant="h6" className={classes.tabTitle}>
                About Us
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} lg={2}>
            <Button fullWidth variant="contained" className={classes.buttonSignUp}>Sign Up</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
