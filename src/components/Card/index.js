import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { CardActionArea, CardMedia, CardContent, Typography, CardActions, Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import SaveIcon from '@material-ui/icons/Save';

function Posts(props) {
    return (
        <Grid container spacing={3} >
            <Grid item xs={12} sm={6} md={4}>
                <Card className={props.className}>
                    <CardActionArea>
                        <CardMedia
                            className={props.media}
                            image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            title="contemplative Reptitle"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Codes
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Autarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={props.avatarContent}>
                        <Box className={props.author}>
                            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    Guy Clemons
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    May 14, 2020
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <SaveIcon />
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card></Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card></Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card></Card> 
            </Grid>
        </Grid>
    )
}


export default Posts;