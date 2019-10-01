import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WaveSVG from '../images/wave_how_it_works.svg';
import CardWithText from '../components/cardText';

const useStyles = makeStyles((theme) => ({
    imgBackground: {
        background: `url(${WaveSVG}) no-repeat center bottom fixed`,
        width: '100%',
        height: '90vh'
    },
    textTitle: {
        color: '#C54754',
        margin: '20px 0',
    },
}));

const MonggoIo = () => {
    const classes = useStyles();
    return (
        <Layout>
            <SEO title="Monggo.io - Redefining Room Service" />
            <Paper className={classes.imgBackground}>
                <Grid container xs={12} justify="center">
                    <Grid item>
                        <Typography variant="h4" className={classes.textTitle}>Redefining Room Service</Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} direction="row" className={classes.gridWrapper}>
                    <Grid container direction="column" xs={12} md={6} lg={3}>
                        <Grid item xs={6}>
                            <CardWithText title="57%" description="Hotel guests unlikely to return to a hotel when difficult to communicate to staff" />
                        </Grid>
                        <Grid item xs={6}>
                        <CardWithText title="63%" description="Anxious of traveling due to primary concern of language. barriers." />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" xs={12} md={6}>
                        <Grid item xs={6}>
                            <CardWithText title="3" description="Clicks needed on average to make a request" />
                        </Grid>
                        <Grid item xs={6}>
                            <CardWithText title="4" description="Languages supported and counting" />
                        </Grid>
                    </Grid>
                    <Grid container direction="column" xs={12} md={6} lg={3}>
                        <Grid item xs={6}>
                            <CardWithText title="3" description="Clicks needed on average to make a request" />
                        </Grid>
                        <Grid item xs={6}>
                            <CardWithText title="4" description="Languages supported and counting" />
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Paper>
        </Layout>
    )
};

export default MonggoIo;
