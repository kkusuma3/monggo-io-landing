import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Hidden from '@material-ui/core/Hidden';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

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
        width: '100%',
        height: '100%',
        fontFamily: 'Roboto',
        padding: 10
    },
    buttonSignUp: {
        borderRadius: 10,
        backgroundColor: '#11368E',
        color: 'white',
        height: 60
    },
    imgHotel: {
        height: 250
    },
    snackbar: {
        backgroundColor: 'green',
    },
    snackbarContent: {
        display: 'flex',
        alignItems: 'center',
    }
});

export default function CardEmail({title, description, image, imageAlt}) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [open, setOpen] = React.useState(false);

    // Snackbar
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    
    // Netlify forms
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
          .then(() => (handleClick()))
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
                            <form
                                name="email"
                                method="post"
                                data-netlify-honeypot="bot-field"
                                data-netlify="true"
                                onSubmit={handleSubmit}
                            >
                                <Grid container xs={12} direction="row" spacing={4}>
                                    <Grid item xs={12} md={8}>
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleChange} 
                                            className={classes.textFieldEmail}
                                            placeholder="example@email.com"
                                        />
                                        <input type="hidden" name="form-name" value="email" />
                                        <input type="hidden" name="bot-field" />
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
                            </form>
                        </Grid>
                    </CardContent>
                </Grid>
                <Hidden smDown>
                    <Grid item md={4}>
                        <img src={image} alt={imageAlt}  className={classes.imgHotel}/>
                    </Grid>
                </Hidden>
            </Grid>
            <Snackbar
                className={classes.snackbar}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={
                    <>
                        <span id="message-id" className={classes.snackbarContent}>
                            <CheckCircleIcon />
                            &nbsp; Thanks for signing up. We will be emailing you soon!
                        </span>
                    </>
                }
                action={
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                }
            />
        </Card>
    );
}

CardEmail.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
}