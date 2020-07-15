import React from 'react';
import Box from '@material-ui/core/Box';

function HeroBox(props) {
    return (
        <Box className={props.className}>
            <Box>WEEKLY TP</Box>
        </Box>
    )
}

export default HeroBox;