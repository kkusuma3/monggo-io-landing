import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper } from '@material-ui/core';
import Layout from '../layout';
import SEO from '../seo';
import CardAbout from '../Cards/cardAbout';
import CardTeam from '../Cards/cardTeam';

const useStyles = makeStyles((theme) => ({
    pageWrapper: {
        padding: '50px 30px',
        boxShadow: 'none'
    },
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
        <Paper className={classes.pageWrapper}>
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
                        <img
                            alt="Monggo.io logo" 
                            src='https://f000.backblazeb2.com/file/landing-page/logo_transparent.png'
                            className={classes.logo} 
                        />
                    </Grid>
                </Grid>
                <Grid container xs={12} justify="center">
                    <CardAbout 
                        title="Connecting the dots" 
                        description="We aim to build a bridge between hotel and customers where deemed necessary to create a pleasant experience for both parties. This includes language translation, online ordering platform and even more coming!"
                        image='https://f000.backblazeb2.com/file/landing-page/problem_solving.png'
                        imageAlt="Connecting puzzles"
                    />
                    <CardAbout 
                        title="Comfort Zone for Customers" 
                        description="As avid travelers ourselves, we know traveling can be problematic when coupled with a language barrier. Therefore, we envision an ecosystem where travelers can travel without fear of miscommunication especially when it comes to accommodations."
                        image='https://f000.backblazeb2.com/file/landing-page/adventure_1.png'
                        imageAlt="Adventure seeking"
                    />
                    <CardAbout 
                        title="Consistent Hotel Experience" 
                        description="Our goal is to build a universal platform for hotels around the globe to keep it consistent for you, wherever you go. Going to Europe? Asia? Don’t worry,  you’ll still be able to understand everything. We've got you covered."
                        image='https://f000.backblazeb2.com/file/landing-page/city_building_1.png'
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
                    image='https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f10749101a93d2dd4_d20191017_m030212_c000_v0001057_t0035'
                    imageAlt="Portrait of Gideon Yuwono"
                    fbLink="www.facebook.com/gideonyuwono"
                    linkedInLink="https://www.linkedin.com/in/gideonyuwono/"
                    emailLink="mailto:gideontjahjono@gmail.com"
                />
                <CardTeam 
                    name="Kevin Kusuma"
                    jobTitle="Co-Founder/ Tech Lead"
                    image='https://f000.backblazeb2.com/file/landing-page/img-kevin.jpg'
                    imageAlt="Portrait of Kevin Kusuma"
                    fbLink="https://www.facebook.com/kevindk20"
                    linkedInLink="https://www.linkedin.com/in/kevinkusuma"
                    emailLink="mailto:kevindwiputrak@gmail.com"
                />
                <CardTeam 
                    name="Melvin Yuwono"
                    jobTitle="Co-Founder/ Tech Lead"
                    image='https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f115e57342d567a04_d20191017_m030215_c000_v0001057_t0008'
                    imageAlt="Portrait of Melvin Yuwono"
                    fbLink="https://www.facebook.com/melvin.a.yuwono"
                    linkedInLink="https://www.linkedin.com/in/melvinjuwono/"
                    emailLink="mailto:melvinyuwono@gmail.com"
                />
            </Grid>
            <Grid container direction="row" xs={12} justify="space-around" spacing={4} className={classes.cardTeamWrapper}>
                <CardTeam 
                    name="Yosias Sapari"
                    jobTitle="Software Engineer"
                    image='https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f103f7516fbac8f8b_d20191017_m030213_c000_v0001035_t0050'
                    imageAlt="Portrait of Yosias Paskal"
                    fbLink="https://www.facebook.com/YosiasSapari"
                    linkedInLink="https://www.linkedin.com/in/yosias-p-pascal-sapari-30207169/"
                    emailLink="mailto:melvinyuwono@gmail.com"
                />
                <CardTeam 
                    name="Stefamikha Suwisar"
                    jobTitle="Lead Designer"
                    image='https://f000.backblazeb2.com/file/landing-page/img-kevin.jpg'
                    imageAlt="Portrait of Stefamikha Suwisar"
                    fbLink="www.facebook.com/melvin.a.yuwono"
                    linkedInLink="https://www.linkedin.com/in/melvinjuwono/"
                    emailLink="mailto:melvinyuwono@gmail.com"
                />
            </Grid>
        </Paper>
    )
};

export default MonggoIo;
