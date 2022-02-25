import React, { useState, useEffect } from "react";
import { 
  AppBar, Toolbar, useScrollTrigger, Slide, makeStyles, Tabs, Tab, Button,  
} from "@material-ui/core";
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,

    window: PropTypes.func,
  };

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em"
  },
  logo: {
    height: '5em',
  },
  logoContainer: {
    padding: '0',
    "&:hover": {
      backgroundColor: 'transparent',
    }
  },
  tabContainer: {
    margin: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 30,
    marginLeft: "30px"
  }, 
  button: {
    ...theme.typography.button,
    marginLeft: '20px',
    borderRadius: '10px',
    height: '45px',
  },
  buttonIcon: {
    marginLeft: '15px',
    paddingLeft: '0px',
  },
}))

export default function Header(props) {
const classes = useStyles();
const [value, setValue] = useState(0);
const handleChange = (e, value) => {
  setValue(value);
};

useEffect(() => {
  if(window.location.pathname === "/" && value !== 0) {
    setValue(0)
  } else if(window.location.pathname === "/services" && value !== 1) {
    setValue(1)
  } else if(window.location.pathname === "/about" && value !== 2) {
    setValue(2)
  } else if(window.location.pathname === "/contact" && value !== 3) {
    setValue(3)
  }
}, [value]);

    return(
      <React.Fragment>
        <HideOnScroll>
            <AppBar position="fixed" color="primary">
                <Toolbar disableGutters>
                  <Button component={Link} to="/" label="home" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
                  <img src={logo} className={classes.logo} alt="logo"/>
                  </Button>
                  <Tabs className={classes.tabContainer} value={value} onChange={handleChange} indicatorColor="secondary">
                    <Tab className={classes.tab} component={Link} to="/" label="home"/>
                    <Tab className={classes.tab} component={Link} to="/services" label="services"/>
                    <Tab className={classes.tab} component={Link} to="/about" label="about"/>
                    <Tab className={classes.tab} component={Link} to="/contact" label="contact"/>
                  </Tabs>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
        <div className={classes.toolbarMargin}/>
      </React.Fragment>
    )
}


