import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid } from '@material-ui/core';
import SEO from '../seo';

const img_step1 = 'https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f109fe754e47ab455_d20191015_m040957_c000_v0001024_t0040';
const img_step2 = 'https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f10918c9115a93879_d20191015_m040959_c000_v0001007_t0022';
const img_step3 = 'https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f106caf08b0c108a8_d20191015_m041001_c000_v0001060_t0026';
const img_step4 = 'https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f1005b1ef88272965_d20191015_m041002_c000_v0001056_t0040';
const img_relaxing = 'https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f109509f9daea77e5_d20191005_m221352_c000_v0001027_t0001';
const img_waitress = 'https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f118096ce8ca611e7_d20191005_m221154_c000_v0001058_t0041';
const img_world = 'https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f114c41769f76d0bc_d20191005_m221106_c000_v0001061_t0042';
const img_qrcode = 'https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f112441f53d148b4a_d20191015_m041644_c000_v0001027_t0018';

const useStyles = makeStyles(() => ({
    imgBackground: {
        background: `url(https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z836a231ac24c9edf65db051c_f1108668de7dc2810_d20191017_m023646_c000_v0001057_t0014) no-repeat center top`,
        backgroundSize: '100%',
        boxShadow: 'none',
        padding: '40px 0'
    },
    imgSteps: {
        width: 100,
        margin: 'auto'
    },
    imgDesc: {
        width: 'inherit',
        height: 'inherit',
        margin: '40px 0'
    },
    textTitle: {
        color: '#C54754',
        margin: '40px 0',
    },
    textSteps: {
        fontSize: 20,
        margin: 'auto',
        textAlign: 'center'
    },
    gridWrapper: {
        padding: '20px 60px'
    }
}));

const CardSteps = ({classes, imgStep, imgDesc, textTitle}) => (
    <Grid container xs={12} md={6} lg={3} direction="column" className={classes.gridWrapper}>
        <img src={imgStep} className={classes.imgSteps} alt="Step Icon" />
        <img src={imgDesc} className={classes.imgDesc} alt="Step Diagram" />
        <Typography variant="body2" className={classes.textSteps} >{textTitle}</Typography>
    </Grid>
)

const MonggoIo = () => {
    const classes = useStyles();
    return (
        <>
            <SEO title="Monggo.io - How it Works" />
            <Paper className={classes.imgBackground}>
                <Grid container xs={12} justify="center">
                    <Grid item>
                        <Typography variant="h4" className={classes.textTitle}>How It Works</Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} direction="row">
                    <CardSteps classes={classes} imgStep={img_step1} imgDesc={img_world} textTitle={<><b>Choose</b> your language</>} />
                    <CardSteps classes={classes} imgStep={img_step2} imgDesc={img_qrcode} textTitle={<><b>Scan</b> the QR Code in your room</>} />
                    <CardSteps classes={classes} imgStep={img_step3} imgDesc={img_waitress} textTitle={<><b>Request</b> what you need</>} />
                    <CardSteps classes={classes} imgStep={img_step4} imgDesc={img_relaxing} textTitle={<>Sit back and <b>relax</b>!</>} />
                </Grid>
            </Paper>
        </>
    )
};

export default MonggoIo;
