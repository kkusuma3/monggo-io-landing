import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
    gridWrapper: {
        margin: '50px 0 0 50px'
    },
    card: {
        border: '1px solid #C70000',
        width: '100%',
        backgroundColor: '#C70000',
        margin: '40px 0'
    },
    title: {
        fontSize: 35,
        color: '#C70000',
        color: 'white'
    },
    description: {
        fontSize: 20,
        color: 'white',
        margin: '20px 0'
    },
    textFieldEmail: {
        borderRadius: 10,
        backgroundColor: 'white',
    },
    buttonSignUp: {
        borderRadius: 10,
        backgroundColor: '#11368E',
        color: 'white',
        height: 60
    },
    imgHotel: {
        height: 250
    }
});

export default function CardEmail({title, description, image, imageAlt}) {
    const classes = useStyles();
    const [email, setEmail] = useState('');

    const handleChange = () => event => setEmail(event.target.value);

    return (
        <Card className={classes.card}>
            <Grid container xs={12} className={classes.gridWrapper}>
                <Grid item xs={8}>
                    <CardContent>
                        <Grid container xs={10} direction="column">
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
                            <Grid container xs={12} direction="row" spacing={4}>
                                <Grid item xs={12} md={8}>
                                    <TextField
                                        placeholder="example@email.com"
                                        value={email}
                                        variant="outlined"
                                        onChange={handleChange()}
                                        className={classes.textFieldEmail}
                                        fullWidth="true"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Button
                                        variant="contained"
                                        className={classes.buttonSignUp}
                                        fullWidth="true"
                                    >
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid item xs={3}>
                    <img src={image} alt={imageAlt}  className={classes.imgHotel}/>
                </Grid>
            </Grid>
        </Card>
    );
}

CardEmail.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
}