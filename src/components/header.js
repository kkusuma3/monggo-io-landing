import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        fontSize: 20
    },
    tabUnderline: {
        margin: 'auto',
        borderRadius: 15,
        borderTop: '3px solid #C54754',
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
    noUnderline: {
        textDecoration: 'none'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
    <AppBar position="static" className={classes.homeNavBar}>
        <Toolbar>
            <Grid container alignItems="center">
                <Grid item xs={6} lg={2}>
                    <Link to="/" className={classes.noUnderline}>
                        <img
                            alt="Monggo.io logo"
                            src='https://f000.backblazeb2.com/file/landing-page/logo_transparent.png'
                            className={classes.homeIcon}
                        />
                    </Link>
                </Grid>
                <Grid container lg={8} direction="row">
                    <Grid item lg={4}>
                        <Link to="/monggo-io" className={classes.noUnderline}>
                            <Typography variant="h6" className={classes.tabTitle}>
                                What is Monggo.io?
                                <hr className={classes.tabUnderline} />
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item lg={4}>
                        <Link to="/how-it-works" className={classes.noUnderline}>
                            <Typography variant="h6" className={classes.tabTitle}>
                                How it Works
                                <hr className={classes.tabUnderline} />
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item lg={4}>
                        <Link to="/about" className={classes.noUnderline}>
                            <Typography variant="h6" className={classes.tabTitle}>
                                About Us
                                <hr className={classes.tabUnderline} />
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item xs={6} lg={2}>
                    <Link to="/sign-up" className={classes.noUnderline}>
                        <Button fullWidth variant="contained" className={classes.buttonSignUp}>Sign Up</Button>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
    );
}
