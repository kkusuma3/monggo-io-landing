import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    cardImage: {
        objectFit: 'cover',
        width: 300,
        height: 300,
        marginBottom: 0,
    },
    card: {
        borderRadius: 15,
        border: '1px solid #C70000',
        margin: '15px 0'
    },
    name: {
        fontSize: 30,
        color: '#C70000',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    jobTitle: {
        fontSize: 20,
        color: '#C70000',
        textAlign: 'center'
    },
    gridSocialWrapper: {
        paddingLeft: 20,
    }
});

export default function CardTeam({name, jobTitle, image, imageAlt, fbLink, linkedInLink, emailLink}) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Grid container direction="column" xs={12}>
                <Grid item xs={12}>
                    <img src={image} alt={imageAlt} className={classes.cardImage} />
                </Grid>
                <Grid item xs={12}>
                    <CardContent>
                        <Grid container xs={12} direction="column">
                            <Grid item>
                                <Typography variant="h4" className={classes.name}>
                                    {name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.jobTitle}>
                                    {jobTitle}
                                </Typography>
                            </Grid>
                            <Grid container xs={12} direction="row" justify="space-around" className={classes.gridSocialWrapper}>
                                <Grid item xs={4} lg={3}>
                                    <Link href={fbLink} color="inherit">
                                        <FacebookIcon fontSize="large" className={classes.socialIcons}/>
                                    </Link>
                                </Grid>
                                <Grid item xs={4} lg={3}>
                                    <Link href={linkedInLink} color="inherit">
                                        <LinkedInIcon fontSize="large" className={classes.socialIcons}/>
                                    </Link>
                                </Grid>
                                <Grid item xs={4} lg={3}>
                                    <Link href={emailLink} color="inherit">
                                        <EmailIcon fontSize="large" className={classes.socialIcons}/>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
}

CardTeam.propTypes = {
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
}