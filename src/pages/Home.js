import React from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { data, contactData } from '../data/data'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        // backgroundColor:"red",
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    image: {
        paddingTop: '81.25%',
        borderRadius: '50%',
        margin: '28px'
    },
    header: {
        textAlign: "left",
        padding: "5%",
        margin: "1%"
    },
    contact: {
        top: "35px",
        margin: "10px"
    }
    
})


const Home = () => {
    const { firstName, profilePic, headline } = data
    const classes = useStyles();

    return (
        // Main card
        <Grid container spacing = {8} className={classes.root} >
            <Grid item xs={12}>
                <Card>
                    <Grid container className={classes.root}>
                        {/* Profile Picture */}
                        <Grid item sm={3}>
                            <CardMedia 
                                className = {classes.image}
                                image={profilePic}/>
                        </Grid>
                        <Grid item sm={5}>
                            <CardContent className={classes.header}>
                                <Typography gutterBottom variant="h2" component="h2">
                                    Hi, I'm {firstName}
                                </Typography>
                                <Typography variant="body1" component="body1">
                                    {headline}
                                    <br />
                                </Typography>
                                {contactData.map(social => 
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        className={classes.contact}
                                        href={social.href}
                                        key={contactData.indexOf(social)}
                                        aria-label={social.text}
                                        >
                                            <Icon className={social.icon}/>
                                    </Button>)}
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            {/* End Main Card */}


            {/* About Me */}
            <Grid item xs = {12}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="body2">
                            ABOUT ME
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            
            {/* End About Me */}


            {/* Technichal Skills & Interests */}
            <Grid item xs = {6}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="body2">
                            SKILLS
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs = {6}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="body2">
                            INTERESTS
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>

        
    )

}

export default Home;