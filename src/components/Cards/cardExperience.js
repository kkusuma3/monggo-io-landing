import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    cardUnderline: {
        margin: 'auto',
        borderRadius: 15,
        borderTop: '5px solid #C54754',
        width: 'inherit',
    },
    cardImage: {
        height: 250,
        maxWidth: 200,
        marginBottom: 0,
        margin: 20
    },
    card: {
        height: 500,
        borderRadius: 15,
        border: '1px solid #C70000',
        margin: 15
    },
    title: {
        fontSize: 25,
        color: '#C70000',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: '#C70000',
        marginTop: 10
    },
});

export default function CardExperience({title, description, image, imageAlt}) {
    const classes = useStyles();

    return (
        <Grid item xs={6} lg={3}>
            <Card className={classes.card}>
            <hr className={classes.cardUnderline} />
                <Grid container direction="column">
                    <img src={image} alt={imageAlt} className={classes.cardImage} />
                    <Grid item>
                        <CardContent>
                            <Grid container xs={12} direction="column">
                                <Grid item>
                                    <Typography variant="h4" className={classes.title}>
                                        {title}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.description}>
                                        {description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
}

CardExperience.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
}