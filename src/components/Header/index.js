import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.prototypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Header = function HideAppBar(props) {
    return (
        <HideOnScroll {...props}>
            <AppBar className={props.className}>
                <Toolbar> 
                    <Typography variant="h6" color="primary">Blog</Typography>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default Header;