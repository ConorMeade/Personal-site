import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.background.paper,
    },
    media: {
        width: '100%',
        height: 0,
        paddingTop: '56.25%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '75%',
        },
    },
    caps: {
        fontVariant: 'all-small-caps',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1),
    },
    actions: {
        justifyContent: 'flex-end',
    },
}))

const ProjectCard = props => {
    const classes = useStyles();
    const {title, imageUrl, description, technology, git} = props.project

    return (
        <Card className={classes.root}>
            <CardActionArea component="a" href={git} target="_blank" rel="noopener noreferrer">
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={title}
                />
            </CardActionArea>
            <CardContent className={classes.content}>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.caps}>
                    {technology}
                </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button size="small" color="default" href={git} aria-label="view source code" target="_blank" rel="noopener noreferrer">
                    <Icon className="fa fa-github" />
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;