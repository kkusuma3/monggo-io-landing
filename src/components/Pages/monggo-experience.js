import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid } from '@material-ui/core';

import SEO from '../seo';
import CardExperience from '../Cards/cardExperience';

const useStyles = makeStyles(() => ({
    pinkBackground: {
        backgroundColor: '#FFEBEB',
        boxShadow: 'none',
        padding: '20px 50px'
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
        <>
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
                        image='https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f10586ac09420a7bb_d20191005_m211300_c000_v0001028_t0038'
                        imageAlt="Person holding phone around the world"
                    />
                    <CardExperience
                        title="Anytime"
                        description="No waiting in line. Need an extra bed in the middle of the night? We got you covered!"
                        image='https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f10652a334709b681_d20191005_m211247_c000_v0001058_t0047'
                        imageAlt="Smart Watch"
                    />
                    <CardExperience
                        title="Simple"
                        description="A simple web app with no download or login required. Best part: it’s optimized for your phone!"
                        image='https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f1012c86201d007c7_d20191005_m211249_c000_v0001035_t0041'
                        imageAlt="Mobile Phone"
                    />
                    <CardExperience
                        title="Connected"
                        description="Stay connected throughout and avoid miscommunication. Everything is translated from your language to the hotel you are staying at."
                        image='https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f101d3b8962a8e4a5_d20191005_m211249_c000_v0001061_t0045'
                        imageAlt="Computer connected to other networks"
                    />
                </Grid>
            </Paper>
        </>
    )
};

export default MonggoIo;
