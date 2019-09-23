import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WaveSVG from '../images/wave.svg';

const useStyles = makeStyles((theme) => ({
    imgBackground: {
        background: `url(${WaveSVG}) no-repeat center top fixed`,
        width: '100%',
    },
    textTitle: {
        color: '#C54754',
        margin: '40px 0',
    }
}));

const MonggoIo = () => {
    const classes = useStyles();
    return (
        <Layout>
            <SEO title="Monggo.io - How it Works" />
            <Paper className={classes.imgBackground}>
                <Grid container xs={12} justify="center">
                    <Grid item>
                        <Typography variant="h4" className={classes.textTitle}>How It Works</Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} direction="row">
                    
                </Grid>
            </Paper>
        </Layout>
    )
};

export default MonggoIo;
