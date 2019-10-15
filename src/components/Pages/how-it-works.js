import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid } from '@material-ui/core';

import Layout from '../layout';
import SEO from '../seo';

const useStyles = makeStyles((theme) => ({
    imgBackground: {
        background: `url(https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f112046ab06663a64_d20191005_m211302_c000_v0001061_t0036) no-repeat center top fixed`,
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
        <>
        {/* <Layout> */}
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
        {/* </Layout> */}
        </>
    )
};

export default MonggoIo;
