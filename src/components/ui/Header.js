import React, { useEffect, useState } from "react";
import {
  AppBar, Toolbar, useScrollTrigger, Slide, makeStyles, Tabs, Tab, Button, Menu, MenuItem,useMediaQuery
} from "@material-ui/core";
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';
import { SwipeableDrawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { List, ListItem, ListItemText } from "@material-ui/core";

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
    marginBottom: "1em",
  },
  logo: {
    height: '4em',
    [theme.breakpoints.down("md")]: {
      height: '5em',
    },
  },
  logoContainer: {
    padding: '0',
    "&:hover": {
      backgroundColor: 'transparent',
    }
  },
  tabContainer: {
    ...theme.fullPageWidth,
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 30,
    marginLeft: '30px'
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
    backgroundColor: theme.palette.common.orange,
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
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    "&:hover": {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
  },
  drawer: {
    backgroundColor: theme.palette.common.orange,
    width: '100%',
    height: 'auto'
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    textAlign: 'center',
    padding: '15px 0',
    opacity: 0.7,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2em',
    },
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1
    }
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  }
}))

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme(); 
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menuOptions = [
    {name: "Supervisor", link: "/Supervisor", activeIndex: 1, selectedIndex: 0}, 
    {name: "Scalevisor", link: "/Scalevisor", activeIndex: 1, selectedIndex: 1},
    {name: "Tehnozavod", link: "/Tehnozavod", activeIndex: 1, selectedIndex: 2}, 
    {name: "Marušić", link: "/Marusic", activeIndex: 1, selectedIndex: 3}
  ];
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const routes = [
      {name: "Home", link: "/", activeIndex: 0}, 
      {name: "Services", link: "/services", activeIndex: 1, 
      ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup:anchorEl ? "true" : undefined, mouseOver: event => handleClick(event)},
      {name: "About", link: "/about", activeIndex: 2}, 
      {name: "Contact", link: "/contact", activeIndex: 3}
    ];
  
  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.selectedIndex);
            }
          } 
          break;
        default: break;
      }
    })
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);
    
  const tabs = (
    <React.Fragment>
      <Tabs className={classes.tabContainer} value={props.value} onChange={handleChange} indicatorColor='main'>
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab} component={Link} to={route.link} label={route.name}
            aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver}
          />
          ))};
      </Tabs>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          classes={{ paper: classes.menu }}
          MenuListProps={{ onMouseLeave: handleClose }}
          style={{zIndex: 1303}}
        >
        {menuOptions.map((option, i) => (
          <MenuItem
          key={`${option}${i}`}
            component={Link}
            to={option.link}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(1);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}>                    
            {option.name}
          </MenuItem>
        ))}
        </Menu>
    </React.Fragment>
    );

    const drawer = (
      <React.Fragment>
        <SwipeableDrawer 
          disableBackdropTransition={!iOS} 
          disableDiscovery={iOS} 
          open={openDrawer} 
          onClose={() => setOpenDrawer(false)} 
          onOpen={() => setOpenDrawer(true)}
          classes={{paper: classes.drawer}}
          >
            <div className={classes.toolbarMargin}/>
            <List 
              disablePadding>
              {routes.map(route => (
                <ListItem
                  key={`${route}${route.activeIndex}`}
                  divider 
                  button 
                  component={Link} 
                  to={route.link} 
                  selected={props.value === route.activeIndex}
                  classes={{selected: classes.drawerItemSelected}}
                  onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}}
                 >
                  <ListItemText 
                    className={classes.drawerItem}
                    disableTypography >
                    {route.name}
                  </ListItemText>
                </ListItem>
              ))} 
            </List>
        </SwipeableDrawer>
        <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
          <MenuIcon className={classes.drawerIcon}></MenuIcon>
        </IconButton>
      </React.Fragment>
    );
      
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position='fixed' color='secondary' className={classes.appBar}>
          <Toolbar disableGutters>
            <Button component={Link} to='/' label='home' className={classes.logoContainer} onClick={() => props.setValue(0)} disableRipple>
              <img src={logo} className={classes.logo} alt='logo' />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}