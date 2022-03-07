import React from 'react';
import Lottie from 'react-lottie';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Grid, Button, Typography } from '@material-ui/core';
import ButtonArrow from '../components/ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';
import supervisorLogo from '../assets/supervisor-logo.png';

const useStyles = makeStyles(theme => ({
        fullPageWidth: {
            ...theme.fullPageWidth,
        },
        heroTextContainer: {
            minWidth: '25em',
            marginLeft: '1em',
            maxWidth: '30em',
            [theme.breakpoints.down('sm')]: {
                margin: 'auto'
            },
        },
        animation: {
            maxWidth: '50em',
            minWidth: '20em',
            marginTop: '2em',
            marginLeft: '10%',
            [theme.breakpoints.only('sm')]: {
            marginLeft: 0,
            maxWidth: '35em',
            }
        },
        estimateButton: {
            backgroundColor: theme.palette.common.orange,
            color: 'white',
            borderRadius: 50,
            height: 45,
            width: 170,
            marginRight: 20,
            fontFamily: 'Quicksand',
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
            },
        },
        learnButton: {
            backgroundColor: 'transparent',
            borderRadius: 50,
            color: theme.palette.common.blue,
            borderColor: theme.palette.common.blue,
            height: 45,
            width: 170,
            fontFamily: 'Quicksand',
        },
        buttonsContainer: {
            marginTop: 20
        },
        icon: {
            width: '18em',
        },
        serviceContainer: {
            backgroundColor: '#f7f7f7',
            padding: '2em 0 2em 0',
            margin: '8em auto',
            justifyContent: 'space-around',
            [theme.breakpoints.between('xs','md')]: {
                padding: '5%',
                width: '100%',
            },
        },
        serviceContainerLeft: {
            paddingTop: '1.5em',
        },
        learnButton2: {
            marginBottom: '2em'
        },
        h4: {
            padding: '0 2em 0 0.5em',
            ...theme.typography.h4,
            color: 'white',
            width: 'fit-content',
            backgroundColor: theme.palette.common.blue,
            borderRadius: '0 0 20px 0'
        }
    }
));

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme(); 

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <React.Fragment>
            <br/><br/><br/><br/><br/>
            <Grid container direction='column'>
                {/*----Hero block----*/}
                <Grid item>
                    <Grid container className={classes.fullPageWidth} justifyContent='flex-end' alignItems='center'>
                        <Grid sm item className={classes.heroTextContainer}>
                            <Typography variant='h2' align='center'>
                                Bringing West Coast Technology<br/>to the Midwest
                            </Typography>
                            <Grid className={classes.buttonsContainer} container justifyContent='center'>
                                <Grid item>
                                    <Button className={classes.estimateButton} variant='contained'>Free Estimate</Button>
                                </Grid>
                                <Grid item>
                                    <Button 
                                        className={classes.learnButton} 
                                        variant='outlined'
                                        >
                                        <span style={{ marginRight: 7}}/>
                                        Learn More 
                                        <ButtonArrow height={15} width={15} fill='#0B72B9'/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.animation} sm item>
                            <Lottie options={defaultOptions} height={'100%'} width={'100%'}/>
                        </Grid>
                    </Grid>
                </Grid>
                {/*----Services block----*/}
                <Grid container className={[classes.serviceContainer, classes.fullPageWidth]} alignItems='center'> 
                    <Grid item className={classes.serviceContainerLeft}>
                        <Typography className={classes.h4}>Supervisor</Typography>
                        <Typography variant='subtitle1' className={classes.subtitle1}>
                            Imagine having a solution that can replace multiple security software interfaces that you currently use. 
                        </Typography>
                        <Typography variant='subtitle2'>Imagine Supervisor.</Typography>
                        <Button className={[classes.learnButton, classes.learnButton2]} variant='outlined'>
                            Learn more
                            <span style={{ marginRight: 7}}/>
                            <ButtonArrow
                                width={15}
                                height={15}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                    <Grid item><img alt='sv-logo' className={classes.icon} src={supervisorLogo}/></Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

