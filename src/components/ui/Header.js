import React from "react";
import { AppBar, Toolbar, useScrollTrigger, Slide } from "@material-ui/core";
import PropTypes from 'prop-types';

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

export default function Header(props) {
    return(
        <HideOnScroll>
            <AppBar position="fixed">
                <Toolbar>Arc Devs</Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}