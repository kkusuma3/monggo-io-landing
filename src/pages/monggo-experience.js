import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CardExperience from '../components/Cards/cardExperience';
import ImageWaiting from '../images/waiting_notifications.svg';
import ImageWatch from '../images/iwatch.svg';
import ImagePhone from '../images/mobile_phone.svg';
import ImageNetwork from '../images/network_1.svg';

const useStyles = makeStyles(() => ({
    pinkBackground: {
        backgroundColor: '#FFEBEB',
    },
    textTitle: {
        color: '#C54754',
        margin: '20px 0',
    },
    gridWrapper: {
        margin: 'auto'
    }
}));

const MonggoIo = () => {
    const classes = useStyles();
    return (
        <Layout>
            <SEO title="Monggo.io - Empowering Hotel Experience" />
            <Paper className={classes.pinkBackground}>
                <Grid container xs={12} justify="center">
                    <Grid item>
                        <Typography variant="h4" className={classes.textTitle}>Empowering Hotel Experience</Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} direction="row" className={classes.gridWrapper} spacing={6}>
                    <CardExperience
                        title="Anywhere"
                        description="Make room requests from anywhere. Need to get your room done before you get back? Now, you can!"
                        image={ImageWaiting}
                        imageAlt="Person holding phone around the world"
                    />
                    <CardExperience
                        title="Anytime"
                        description="No waiting in line. Need an extra bed in the middle of the night? We got you covered!"
                        image={ImageWatch}
                        imageAlt="Smart Watch"
                    />
                    <CardExperience
                        title="Simple"
                        description="A simple web app with no download or login required. Best part: it’s optimized for your phone!"
                        image={ImagePhone}
                        imageAlt="Mobile Phone"
                    />
                    <CardExperience
                        title="Connected"
                        description="Stay connected throughout and avoid miscommunication. Everything is translated from your language to the hotel you are staying at."
                        image={ImageNetwork}
                        imageAlt="Computer connected to other networks"
                    />
                </Grid>
            </Paper>
        </Layout>
    )
};

export default MonggoIo;
