import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    nav: {
        flexGrow: 1,
        fontSize: 30,
        height: '100%',
        justifyContent: "space-between"
    },
    grid: {
        position: 'relative',
        padding: 0,
        margin: 0
    },
    links: {
        color: '#dbe9f1',
        '&:hover': {
            background: '#black'
        }
    },
})

export default function NavBar() {
    const classes = useStyles()

    return (
        <div className={classes.grid}>
            {/* <Router> */}
            <Grid container spacing={3} className={classes.nav}>
                <Grid style={{color: '#dbe9f1'}} item xs={6} sm ={3}>
                        Conor Meade
                </Grid>
                <Grid item xs={2}>
                    <Link className={classes.links} component={RouterLink} to="/" variant="body1" color="inherit">
                        Home
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link className={classes.links} component={RouterLink} to="/Projects" variant="body1" color="inherit" >
                        Projects
                    </Link>
                </Grid>
                <Grid item xs={2} >
                    <Link className={classes.links} href={'Conor Meade Resume (2023).pdf'} variant="body1" color="inherit">
                        Resume
                    </Link>
                </Grid>
            </Grid>
            {/* </Router> */}
        </div>
    );
}

// export default NavBar;