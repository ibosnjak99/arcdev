import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, Grid, Button, Typography } from '@material-ui/core';
import ButtonArrow from '../components/ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';

const useStyles = makeStyles(theme => ({
        fullPageWidth: {
            ...theme.fullPageWidth,
        },
        heroTextContainer: {
            minWidth: '25em',
            marginLeft: '1em',
            maxWidth: '35em',
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
        }
    }
));

export default function LandingPage() {
    const classes = useStyles();

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
            </Grid>
        </React.Fragment>
    );
}

