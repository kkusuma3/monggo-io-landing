import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Layout from '../components/layout';
import SEO from '../components/seo';

const homeBackground = '/images/background.jpg';

const useStyles = makeStyles((theme) => ({
    gridWrapper: {
        padding: '7rem 0 0 3.5rem'
    },
    imgBackground: {
        background: `url(${homeBackground}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: 'calc(100vh - 50px)',
        width: '100%',
    },
    buttonSignUp: {
        borderRadius: 15,
        backgroundColor: '#C54754',
        color: 'white',
    },
    buttonLearnMore: {
        borderRadius: 15,
        backgroundColor: 'white',
        border: '2px solid #FBA4AD',
        color: '#C54754',
    },
    textHeading: {
        color: '#C54754',
        marginBottom: 20,
    },
    textSubheading: {
        color: 'rgba(30, 74, 110, 0.9)',
        marginBottom: 20,
        fontSize: 30
    },
    noUnderline: {
        textDecoration: 'none'
    }
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout>
        <SEO title="Home" />
        <Paper className={classes.imgBackground}>
            <Grid container xs={12} lg={7} direction="column" alignItems="center" className={classes.gridWrapper}>
                <Grid item>
                    <Typography variant="h2" className={classes.textHeading}>Opening your room to<br/>a world of possibilities</Typography>
                    <Typography variant="subtitle1" className={classes.textSubheading}>
                        An App made for <strong>Hotels</strong><br/>So travelers can <strong>worry less and travel more.</strong>
                    </Typography>
                </Grid>
                <Grid container direction="row" justify="space-around" spacing={1}>
                    <Grid item xs={10} lg={4}>
                        <Link to="/sign-up" className={classes.noUnderline}>
                            <Button fullWidth variant="contained" className={classes.buttonSignUp}>
                                Sign Up
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={10} lg={4}>
                        <Link to="/monggo-io" className={classes.noUnderline}>
                            <Button fullWidth variant="contained" className={classes.buttonLearnMore}>Learn More</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </Layout>
  );
};

export default IndexPage;
