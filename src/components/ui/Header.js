import React, { useState, useEffect } from "react";
import {
  AppBar, Toolbar, useScrollTrigger, Slide, makeStyles, Tabs, Tab, Button, Menu, MenuItem
} from "@material-ui/core";
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Raleway',
    marginTop: '40px'
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  }
}))

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  }

  const menuOptions = [{name: "Supervisor", link: "/Supervisor"}, {name: "Scalevisor", link: "/Scalevisor"},
    {name: "Tehnozavod", link: "/Tehnozavod"}, {name: "Marušić", link: "/Marusic"}]

    switch(window.location.pathname) {
      case "/":
        if (value !==0) {
          setValue(0)
        }
        break;
      case "/Supervisor":
        if (value !==1) {
          setValue(1)
          setSelectedIndex(0)
        }
        break;
      case "/Scalevisor":
        if (value !==1) {
          setValue(1)
          setSelectedIndex(1)
        }
        break;
      case "/Tehnozavod":
        if (value !==1) {
          setValue(1)
          setSelectedIndex(2)
        }
        break;
      case "/Marusic":
        if (value !==1) {
          setValue(1)
          setSelectedIndex(3)
        }
        break;
      case "/about":
        if (value !==2) {
          setValue(2)
        }
        break;
      case "/contact":
        if (value !==3) {
          setValue(3)
        }
        break;
      default:
        break;
    }

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button component={Link} to="/" label="home" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
              <img src={logo} className={classes.logo} alt="logo" />
            </Button>
            <Tabs className={classes.tabContainer} value={value} onChange={handleChange} indicatorColor="secondary">
              <Tab className={classes.tab} component={Link} to="/" label="home" />
              <Tab
                className={classes.tab}
                component={Link} to="/services"
                label="services >"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={event => handleClick(event)}
              // endIcon={<KeyboardArrowDownIcon />}
              />
              <Tab className={classes.tab} component={Link} to="/about" label="about" />
              <Tab className={classes.tab} component={Link} to="/contact" label="contact" />
              <Button variant="contained" className={classes.button} color="secondary">
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  classes={{ paper: classes.menu }}
                  MenuListProps={{ onMouseLeave: handleClose }}
                  elevation={0.5}
                >
                {menuOptions.map((option, i) => (
                  <MenuItem
                    component={Link}
                    to={option.link}
                    onClick={(event) => {
                      handleMenuItemClick(event, i);
                      setValue(1);
                      handleClose();
                    }}
                    selected={i === selectedIndex && value === 1}>                    
                    {option.name}
                  </MenuItem>
                ))}
                </Menu>
              </Button>
            </Tabs>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}


