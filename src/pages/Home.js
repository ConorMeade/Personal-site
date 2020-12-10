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
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    image: {
        paddingTop: '81.25%',
        borderRadius: '50%',
        margin: '28px'
    },
    contact: {
        margin: "20px 10px 0px 0px"
    }
    
})


const Home = () => {
    const { firstName, profilePic, headline } = data
    const classes = useStyles();

    return (
        <Grid container spacing = {5} className={classes.root} >
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
                                        className={classes.contact}
                                        variant="outlined"
                                        color="default"
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
            {/* <Grid item xs={12}>
                
            </Grid> */}
        </Grid>

        
    )

}

export default Home;