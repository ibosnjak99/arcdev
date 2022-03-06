import React from "react";
import { makeStyles, Grid, Hidden } from "@material-ui/core";
import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        marginTop: '1400px'
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('xs')]: {
            width: '12em',
        }
    },
    mainContainer: {
        position: 'absolute',
    },
    link: {
        color: 'white',
        fontFamily: 'Raleway',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        "&:hover": {
            fontSize: '0.9rem',
          },
    },
    linkSecondary: {
        color: 'white',
        fontFamily: 'Raleway',
        fontSize: '0.85rem',
        textDecoration: 'none',
        opacity: '0.8',
        "&:hover": {
            opacity: '1',
          },
    },
    gridItem: {
        margin: '4em',
        marginTop: '2.5em',
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-5em',
        right: '1.5em',
        [theme.breakpoints.between('sm','md')]: {
            marginTop: '-7em',
        },
    },
    icon: {
        height: '2em',
        width: '2em',
        marginLeft: '0.5em'
    }
}))

export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden smDown>
                <Grid container justifyContent='center' className={classes.mainContainer}>
                    <Grid item className={classes.gridItem} >
                        <Grid container direction='column'>
                            <Grid item
                                component={Link}
                                to='/'
                                className={classes.link} 
                                onClick={() => props.setValue(0)}
                                >
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item 
                                component={Link} 
                                to='/services' 
                                className={classes.link}
                                onClick={() => props.setValue(1)}
                                >
                                Services
                            </Grid>
                            <Grid item component={Link} to='/supervisor' className={classes.linkSecondary} onClick={() => {props.setValue(1); props.setSelectedIndex(0)}}>
                                Supervisor
                            </Grid>
                            <Grid item component={Link} to='/scalevisor' className={classes.linkSecondary} onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}>
                                Scalevisor
                            </Grid>
                            <Grid item component={Link} to='/tehnozavod' className={classes.linkSecondary} onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>
                                Tehnozavod
                            </Grid>
                            <Grid item component={Link} to='/marusic' className={classes.linkSecondary} onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}>
                                Marušić
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column'>
                            <Grid item 
                                component={Link} 
                                to='/about' 
                                className={classes.link}
                                onClick={() => props.setValue(2)}
                                >
                                About
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item  className={classes.gridItem}>
                        <Grid container direction='column'>
                            <Grid item 
                                component={Link} 
                                to='/contact' 
                                className={classes.link}
                                onClick={() => props.setValue(3)}
                                >
                                Contact
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img 
                alt="black slash" 
                src={footerAdornment} 
                className={classes.adornment}
            />

            <Grid container justifyContent="flex-end" className={classes.socialContainer}>
                <Grid item component={'a'} href={'http://www.facebook.com'} className={classes.icon} rel={"noopener noreferrer"} target="_blank">
                    <img alt="fb logo" src={facebook} className/>
                </Grid>
                <Grid item component={'a'} href={'http://www.instagram.com'} className={classes.icon} rel={"noopener noreferrer"} target="_blank">
                    <img alt="insta logo" src={instagram}/>
                </Grid>
                <Grid item component={'a'} href={'http://www.twitter.com'} className={classes.icon} rel={"noopener noreferrer"} target="_blank">
                    <img alt="twitter logo" src={twitter}/>
                </Grid>
            </Grid>
        </footer>
    );
}
