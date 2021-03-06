import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from 'react-scroll';
import Hidden from '@material-ui/core/Hidden';

import SEO from '../seo';
import CardEmail from '../Cards/cardEmail';

const useStyles = makeStyles((theme) => ({
    signUpWrapper: {
        padding: '0px 20px'
    },
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
        padding: '20px 30px'
    },
    textFooter: {
        fontSize: 20,
        color: '#C54754',
        margin: '40px 0 5px 0',
        textAlign: 'center',
        cursor: 'pointer'
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

const MonggoIo = (props) => {
    const classes = useStyles();
    const { scroll } = props;
    return (
        <>
            <SEO title="Sign Up Page - Drop your Email" />
            <Grid container xs={12} direction="column">
                <Grid container xs={12} justify="center">
                    <CardEmail
                        title="Drop your email below" 
                        description="Greatness takes time. We will notify you about the release date and other updates!"
                        image='https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f102e49d2481a2c0d_d20191005_m211244_c000_v0001051_t0052'
                        imageAlt="Person Checking in Hotel"
                    />
                </Grid>
            </Grid>
            <Grid container xs={12} direction="row" className={classes.gridWrapper}>
                <Grid container xs={6} md={3}>
                    <Grid item>
                        <Link
                            to="home"
                            className={classes.noUnderline}
                            spy={true}
                            smooth={true}
                            duration={2000}
                        >
                            <img
                                src='https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f11187b47b0b7579e_d20191005_m211248_c000_v0001028_t0010'
                                alt="Monggo.io Logo"
                                className={classes.logo}
                            />
                        </Link>
                    </Grid>
                </Grid>
                <Hidden smDown>
                    <Grid container xs={6} md={3} direction="column">
                        <Grid item>
                            <Link
                                to="monggo-io"
                                className={classes.noUnderline}
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                <Typography variant="subtitle2" className={classes.textFooter}>What is Monggo.io?</Typography>
                                <hr className={classes.textUnderline} />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                to="how-it-works"
                                className={classes.noUnderline}
                                spy={true}
                                smooth={true}
                                duration={800}
                            >
                                <Typography variant="subtitle2" className={classes.textFooter}>How it Works</Typography>
                                <hr className={classes.textUnderline} />
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container xs={6} md={3} direction="column">
                    <Grid item>
                        <Link
                            to="about"
                            className={classes.noUnderline}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <Typography variant="subtitle2" className={classes.textFooter}>About Us</Typography>
                            <hr className={classes.textUnderline} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            to="sign-up"
                            className={classes.noUnderline}
                            spy={true}
                            smooth={true}
                            duration={200}
                        >
                            <Typography variant="subtitle2" className={classes.textFooter}>Sign Up</Typography>
                            <hr className={classes.textUnderline} />
                        </Link>
                    </Grid>
                </Grid>
                </Hidden>
                <Grid container xs={6} md={3} direction="column" justify="center">
                    <Grid item>
                        <Typography
                            variant="subtitle2"
                            className={classes.textFooter}
                            onClick={scroll}
                        >
                            Back to Top
                            <ArrowUpwardIcon />
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default MonggoIo;
