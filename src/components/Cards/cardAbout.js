import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
    cardWrapper: {
        padding: '1.5rem'
    },
    innerWrapper: {
        padding: '1.5rem 2rem'
    },
    card: {
        borderRadius: 15,
        border: '1px solid #C70000',
        width: '100%',
    },
    title: {
        fontSize: 30,
        color: '#C70000',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 20,
        color: '#C70000'
    },
    cardUnderline: {
        marginBottom: 0,
        borderRadius: 15,
        borderTop: '5px solid #C54754',
    },
    titleUnderline: {
        width: 150,
        marginTop: 10,
        marginBottom: 0,
        borderTop: '2px solid #C54754',
    },
    imgAbout: {
        maxHeight: '30vh'
    }
});

export default function CardWithText({title, description, image, imageAlt}) {
    const classes = useStyles();

    return (
        <Grid container xs={12} className={classes.cardWrapper}>
            <Card className={classes.card}>
                <Grid container direction="row" xs={12} className={classes.innerWrapper}>
                    <Grid item xs={12} lg={9}>
                        <CardContent>
                            <Grid container xs={12} direction="column">
                                <Grid item>
                                    <Typography variant="h4" className={classes.title}>
                                        {title}
                                    </Typography>
                                    <hr className={classes.titleUnderline}></hr>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.description}>
                                        {description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                    <Hidden smDown>
                        <Grid item md={6} lg={3}>
                            <img src={image} alt={imageAlt} className={classes.imgAbout}/>
                        </Grid>
                    </Hidden>
                </Grid>
            </Card>
        </Grid>
    );
}

CardWithText.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
}