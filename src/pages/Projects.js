import React from 'react'
import { projects } from '../data/data'
import ProjectCard from '../Components/ProjectCard'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexWrap: "wrap",
      justifyContent: "space-between",
      flexGrow: 1,
    }
});

const Projects = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={1} className={classes.root}>
            {projects.map(project =>
                <Grid item sm={12} key={projects.indexOf(project)}>
                    <ProjectCard project={project} />
                </Grid>
            )}
        </Grid>
    )

}

export default Projects;