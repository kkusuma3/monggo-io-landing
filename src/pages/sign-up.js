import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CardEmail from '../components/cardEmail';
import monggoLogo from '../images/logo_transparent.png';
import CheckInImage from '../images/img-checkin.jpg';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: 150,
        margin: 20
    },
    textTitle: {
        color: '#C54754',
        margin: '10px 50px',
        marginTop: 0,
        fontSize: 20
    },
    titleUnderline: {
        margin: 'auto',
        width: 200,
        marginTop: 40,
        marginBottom: 0,
        borderTop: '2px solid #C54754',
    },
    cardTeamWrapper: {
        margin: '20px 0'
    },
    gridWrapper: {
        margin: '20px 30px'
    },
    textFooter: {
        fontSize: 20,
        color: '#C54754',
        margin: '40px 0 5px 0',
        textAlign: 'center',
    },
    noUnderline: {
        textDecoration: 'none'
    },
    textUnderline: {
        margin: 'auto',
        borderRadius: 15,
        borderTop: '3px solid #C54754',
        width: 75,
        transition: '0.5s',
        '&:hover': {
            width: 125,
        },
    },
}));

const MonggoIo = () => {
    const classes = useStyles();
    return (
        <Layout>
            <SEO title="Sign Up Page - Drop your Email" />
            <Grid container xs={12} direction="column">
                <Grid container xs={12} justify="center">
                    <CardEmail 
                        title="Drop your email below" 
                        description="Greatness takes time. We will notify you about the release date and other updates!"
                        image={CheckInImage}
                        imageAlt="Person Checking in Hotel"
                    />
                </Grid>
            </Grid>
            <Grid container xs={12} direction="row" className={classes.gridWrapper}>
                <Grid container xs={6} lg={3}>
                    <Grid item>
                        <img src={monggoLogo} alt="Monggo.io Logo" className={classes.logo} />
                    </Grid>
                </Grid>
                <Grid container xs={6} lg={3} direction="column">
                    <Grid item>
                        <Link to="/" className={classes.noUnderline}>
                            <Typography variant="subtitle2" className={classes.textFooter}>What is Monggo.io?</Typography>
                            <hr className={classes.textUnderline} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/how-it-works" className={classes.noUnderline}>
                            <Typography variant="subtitle2" className={classes.textFooter}>How it Works</Typography>
                            <hr className={classes.textUnderline} />
                        </Link>
                    </Grid>
                </Grid>
                <Grid container xs={6} lg={3} direction="column">
                    <Grid item>
                        <Link to="/about-us" className={classes.noUnderline}>
                            <Typography variant="subtitle2" className={classes.textFooter}>About Us</Typography>
                            <hr className={classes.textUnderline} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/sign-up" className={classes.noUnderline}>
                            <Typography variant="subtitle2" className={classes.textFooter}>Sign Up</Typography>
                            <hr className={classes.textUnderline} />
                        </Link>
                    </Grid>
                </Grid>
                <Grid container xs={6} lg={3} direction="column" justify="center">
                    <Grid item>
                        <Link to="/" className={classes.noUnderline}>
                            <Typography variant="subtitle2" className={classes.textFooter}>
                                Back to Top
                                <ArrowUpwardIcon />
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                
            </Grid>
        </Layout>
    )
};

export default MonggoIo;
