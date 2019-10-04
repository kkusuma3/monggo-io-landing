import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CardAbout from '../components/cardAbout';
import CardTeam from '../components/cardTeam';
import monggoLogo from '../images/logo_transparent.png';
import ConnectingImage from '../images/problem_solving.png';
import ComfortImage from '../images/adventure_1.png';
import ConsistentImage from '../images/city_building_1.png';
import KevinImage from '../images/img-kevin.jpg';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: 150,
        marginBottom: 0,
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
                        description="We aim to build a bridge between hotel and customers where deemed necessary to create a pleasant experience for both parties. This includes language translation, online ordering platform and even more coming!"
                        image={ConnectingImage}
                        imageAlt="Connecting puzzles"
                    />
                    <CardAbout 
                        title="Comfort Zone for Customers" 
                        description="As avid travelers ourselves, we know traveling can be problematic when coupled with a language barrier. Therefore, we envision an ecosystem where travelers can travel without fear of miscommunication especially when it comes to accommodations."
                        image={ComfortImage}
                        imageAlt="Adventure seeking"
                    />
                    <CardAbout 
                        title="Consistent Hotel Experience" 
                        description="Our goal is to build a universal platform for hotels around the globe to keep it consistent for you, wherever you go. Going to Europe? Asia? Don’t worry,  you’ll still be able to understand everything. We've got you covered."
                        image={ConsistentImage}
                        imageAlt="City skycrapers"
                    />
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid item>
                    <hr className={classes.titleUnderline}></hr>
                    <Typography variant="subtitle1" className={classes.textTitle}>Meet the Team</Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" xs={12} justify="space-around" spacing={4} className={classes.cardTeamWrapper}>
                <CardTeam 
                    name="Gideon Yuwono"
                    jobTitle="Co-Founder/ Tech Lead"
                    image={KevinImage}
                    imageAlt="Portrait of Gideon Yuwono"
                />
                <CardTeam 
                    name="Kevin Kusuma"
                    jobTitle="Co-Founder/ Tech Lead"
                    image={KevinImage}
                    imageAlt="Portrait of Kevin Kusuma"
                    fbLink="https://www.facebook.com/kevindk20"
                    linkedInLink="https://www.linkedin.com/in/kevinkusuma"
                    emailLink="mailto:kevindwiputrak@gmail.com"
                />
                <CardTeam 
                    name="Melvin Yuwono"
                    jobTitle="Co-Founder/ Tech Lead"
                    image={KevinImage}
                    imageAlt="Portrait of Kevin Kusuma"
                />
            </Grid>
            <Grid container direction="row" xs={12} justify="space-around" spacing={4} className={classes.cardTeamWrapper}>
                <CardTeam 
                    name="Yosias Paskal"
                    jobTitle="Software Engineer"
                    image={KevinImage}
                    imageAlt="Portrait of Yosias Paskal"
                />
                <CardTeam 
                    name="Stefamikha Suwisar"
                    jobTitle="Lead Designer"
                    image={KevinImage}
                    imageAlt="Portrait of Stefamikha Suwisar"
                />
            </Grid>
        </Layout>
    )
};

export default MonggoIo;
