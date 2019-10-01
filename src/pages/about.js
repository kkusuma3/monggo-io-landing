import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CardAbout from '../components/cardAbout';
import monggoLogo from '../images/logo_transparent.png';
import ConnectingImage from '../images/problem_solving.png';
import ComfortImage from '../images/adventure_1.png';
import ConsistentImage from '../images/city_building_1.png';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: 150,
        marginBottom: 0,
    },
    textTitle: {
        color: '#C54754',
        margin: 30,
        marginTop: 0,
    },
    titleUnderline: {
        margin: 'auto',
        width: 150,
        marginTop: 40,
        marginBottom: 0,
        borderTop: '2px solid #C54754',
    }
}));

const MonggoIo = () => {
    const classes = useStyles();
    return (
        <Layout>
            <SEO title="About Monggo.io" />
            <Grid container xs={12}>
                <Grid item>
                    <hr className={classes.titleUnderline}></hr>
                    <Typography variant="subtitle1" className={classes.textTitle}>Behind the scenes</Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} direction="column">
                <Grid container xs={12} justify="center">
                    <Grid item>
                        <img alt="Monggo.io logo" src={monggoLogo} className={classes.logo} />
                    </Grid>
                </Grid>
                <Grid container xs={12} justify="center">
                    <CardAbout 
                        title="Connecting the dots" 
                        description="Lorem ipsuasjdnasjndjajdan asdasdad sadsad a"
                        image={ConnectingImage}
                    />
                    <CardAbout 
                        title="Comfort Zone for Customers" 
                        description="Lorem ipsuasjdnasjndjajdan asdasdad sadsad a"
                        image={ComfortImage}
                    />
                    <CardAbout 
                        title="Consistent Hotel Experience" 
                        description="Lorem ipsuasjdnasjndjajdan asdasdad sadsad a"
                        image={ConsistentImage}
                    />
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid item>
                    <hr className={classes.titleUnderline}></hr>
                    <Typography variant="subtitle1" className={classes.textTitle}>Meet the Team</Typography>
                </Grid>
            </Grid>
        </Layout>
    )
};

export default MonggoIo;
