import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid } from '@material-ui/core';

import SEO from '../seo';
import CardWithText from '../Cards/cardText';
import MonggoExperience from './monggo-experience';

const useStyles = makeStyles(() => ({
    imgBackground: {
        background: `url(https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f112046ab06663a64_d20191005_m211302_c000_v0001061_t0036) no-repeat center bottom`,
        width: '100%',
        height: '90%',
        padding: '30px 30px'
    },
    imgScreenshot: {
        borderRadius: 15,
        margin: '50px 0'
    },
    textTitle: {
        color: '#C54754',
        margin: '30px 0',
    },
}));

const MonggoIo = () => {
    const classes = useStyles();
    return (
        <>
            <SEO title="Monggo.io - Redefining Room Service" />
            <Paper className={classes.imgBackground}>
                <Grid container direction="row" justify="center" className={classes.gridWrapper}>
                    <Grid container xs={12} justify="center">
                        <Grid item>
                            <Typography variant="h4" className={classes.textTitle}>Redefining Room Service</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" xs={12} md={6} lg={3}>
                        <Grid item md={6}>
                            <CardWithText title="57%" description="Hotel guests unlikely to return to a hotel when difficult to communicate to staff" />
                        </Grid>
                        <Grid item md={6}>
                            <CardWithText title="63%" description="Anxious of traveling due to primary concern of language. barriers." />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" xs={12} md={6} spacing={5}>
                        <Grid item xs={12} md={6}>
                            <img
                                src="https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f100aa40158800d64_d20191005_m213854_c000_v0001060_t0042"
                                alt="Monggo IO Home Page"
                                className={classes.imgScreenshot}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img
                                src="https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f119e8b889a32c5ea_d20191005_m213855_c000_v0001060_t0035"
                                alt="Monggo IO Orders Page"
                                className={classes.imgScreenshot}
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="column" xs={12} md={6} lg={3}>
                        <Grid item md={6}>
                            <CardWithText title="3" description="Clicks needed on average to make a request" />
                        </Grid>
                        <Grid item md={6}>
                            <CardWithText title="4" description="Languages supported and counting" />
                        </Grid>
                    </Grid>     
                </Grid>
            </Paper>
            <MonggoExperience />
        </>
    )
};

export default MonggoIo;
