import React from 'react'
import { Link as RouterLink, BrowserRouter as Router } from 'react-router-dom'
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
    }
})

export default function NavBar() {
    const classes = useStyles()

    return (
        <div className={classes.grid}>
            {/* <Router> */}
            <Grid container xs={12} spacing={5} className={classes.nav}>
                <Grid item xs={6} sm ={3}>
                        Conor Meade
                </Grid>
                <Grid item xs={2} sm={2}>
                    <Link component={RouterLink} to="/" variant="body1" color="inherit">
                        Home
                    </Link>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <Link component={RouterLink} to="/Projects" variant="body1" color="inherit" >
                        Projects
                    </Link>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <Link component={RouterLink} to="/Resume" variant="body1" color="inherit">
                        Resume
                    </Link>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <Link component={RouterLink} to="/Contact" variant="body1" color="inherit">
                        Contact
                    </Link>
                </Grid>
            </Grid>
            {/* </Router> */}
        </div>
    );
}

// export default NavBar;