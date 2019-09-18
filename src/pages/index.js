import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/layout';
import SEO from '../components/seo';

const homeBackground = '/images/background.jpg';

const useStyles = makeStyles((theme) => ({
  imgBackground: {
    background: `url(${homeBackground}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: 'calc(100vh - 50px)',
    width: '100%',
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />
      <Paper className={classes.imgBackground}>
        <h1>
Opening your room to
          <br />
a world of possibilities
        </h1>
        <p>
An app made for hotels
          <br />
So travelers can worry less and travel more.
        </p>
        <button>
          <Link to="/sign-up/">Sign Up</Link>
        </button>
        <button>
          <Link to="/learn-more/">Learn More</Link>
        </button>
      </Paper>
    </Layout>
  );
};

export default IndexPage;
