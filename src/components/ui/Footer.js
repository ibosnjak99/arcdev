import React from "react";
import { makeStyles, Grid, Hidden } from "@material-ui/core";
import footerAdornment from '../../assets/Footer Adornment.svg';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        marginTop: '1000px'
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down("md")]: {
            width: '21em',
        },
        [theme.breakpoints.down("xs")]: {
            width: '12em',
        }
    },
    mainContainer: {
        position: 'absolute'
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
        margin: '5em',
        marginTop: '2em',
    }
}))

export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container justify='center' className={classes.mainContainer}>
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
            <img 
                alt="black slash" 
                src={footerAdornment} 
                className={classes.adornment}
            />
        </footer>
    );
}
