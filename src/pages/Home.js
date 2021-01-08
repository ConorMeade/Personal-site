import React from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { data, contactData, skills } from '../data/data'
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
        top: '15px',
        margin: "20px 10px 10px1px",
        // top: "35px",
        // margin: "10px",
        // marginright: '40',
        // spacing: 8
    },
    links: {

    },
    skillsback: {
        minHeight: "65px",
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "space-evenly"
      },
    skillsstyle: {
        fontVariant: "all-small-caps",
        fontSize: "large",
        border: "thin",
        borderStyle: "dotted",
        borderRadius: "5px",
        margin: "5px 5px 5px 8px",
        padding: "5px",
        background: "#dbe9f1",
        fontWeight: "bold",
        textDecoration: "none",
        color: "#0a3f5e"
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
            {/* End Main Card */}


            {/* About Me */}
            <Grid item xs = {12}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h4">
                            About Me
                        </Typography>
                        <br />

                        <Typography variant="body2">
                            In May 2020, I graduated from the <Link href="https://www.cics.umass.edu/">UMass Amherst College of Information & Computer Sciences</Link> where I majored in Computer Science with a minor in Mathematics. I have been programming since I was a sophomore in high school and have studied variety of Computer Science disceplines. 
                            My main interests are in Web Programming, Database Management, and Digitial Forensics. I am eager to enter the world of software development where I can develop my skills further and become a dependable engineer.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            
            {/* End About Me */}


            {/* Technichal Skills & Interests */}
            <Grid item xs = {6}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h6">
                            Technichal Skills
                        </Typography>
                        <CardActions className={classes.skillsback}>
                            {skills.map(skill => <a className={classes.skillsstyle}><span key={skill.key}><code>{skill.name}</code></span></a>)}
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs = {6}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h6">
                            Interests
                        </Typography>
                        <Typography variant="body2">
                            Aside from coding, I have an affinity for music, exercising, gaming, reading, and Boston Celtics Basketball. I hope to one day travel and experience the world.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>

        
    )

}

export default Home;