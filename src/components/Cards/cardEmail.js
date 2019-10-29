import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles({
    gridWrapper: {
        padding: '1.5rem 0 0 1.5rem'
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('email'),
                ...email,
            }),
        })
          .then(() => (console.log('success')))
          .catch((error) => alert(error))
    }

    return (
        <Card className={classes.card}>
            <Grid container xs={12} className={classes.gridWrapper}>
                <Grid item xs={12} md={8}>
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
                                    <form
                                        name="email"
                                        method="post"
                                        data-netlify-honeypot="bot-field"
                                        data-netlify="true"
                                        onSubmit={handleSubmit}
                                        // action=""
                                    >
                                        <input type="text" name="email" onChange={handleChange} />
                                        <input type="hidden" name="form-name" value="email" />
                                        <input type="hidden" name="bot-field" />
                                    </form>
                                    {/* <TextField
                                        placeholder="example@email.com"
                                        value={email}
                                        variant="outlined"
                                        onChange={handleChange()}
                                        className={classes.textFieldEmail}
                                        fullWidth="true"
                                    /> */}
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Button
                                        variant="contained"
                                        className={classes.buttonSignUp}
                                        fullWidth="true"
                                        type="submit"
                                    >
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Hidden smDown>
                    <Grid item md={4}>
                        <img src={image} alt={imageAlt}  className={classes.imgHotel}/>
                    </Grid>
                </Hidden>
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