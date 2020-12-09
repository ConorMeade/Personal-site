import React from 'react'
import { Link as RouterLink, BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: "1%"
    }
})

export default function NavBar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {/* <Router> */}
            <Grid container spacing={5}>
                <Grid item xs={3} spaceing={3}>
                    <Link component={RouterLink} to="/" variant="body2" color="inherit">
                        Home
                    </Link>
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <Link component={RouterLink} to="/Projects" variant="body2" color="inherit" >
                        Projects
                    </Link>
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <Link component={RouterLink} to="/Resume" variant="body2" color="inherit">
                        Resume
                    </Link>
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <Link component={RouterLink} to="/Contact" variant="body2" color="inherit">
                        Contact
                    </Link>
                </Grid>
            </Grid>
            {/* </Router> */}
        </div>
    );
}

// export default NavBar;