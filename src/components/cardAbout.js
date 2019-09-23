import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    card: {
        borderRadius: 15,
        border: '1px solid #C70000',
        margin: '20px 25px',

    },
    title: {
        fontSize: 70,
        color: '#C70000',
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#C70000'
    },
    cardUnderline: {
        marginBottom: 0,
        borderRadius: 15,
        borderTop: '5px solid #C54754',
    },
    titleUnderline: {
        margin: 'auto',
        width: 150,
        marginTop: 40,
        marginBottom: 0,
        borderTop: '2px solid #C54754',
    }
});

export default function CardWithText({title, description, image}) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container xs={12} direction="column">
                    <Grid item>
                        <Typography variant="h4" className={classes.title}>
                            {title}
                        </Typography>
                        <hr className={classes.titleUnderline}></hr>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={classes.description}>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

CardWithText.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}