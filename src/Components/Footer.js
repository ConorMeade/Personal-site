import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {data} from '../data/data'


const useStyles = makeStyles({
    link: {
        color: "black",
        borderBottomStyle: "dotted",
        border: "thin",
    }
});

const Footer = () => {
    const classes = useStyles();
    let date = new Date();
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link className={classes.link} href={data.website} underline="none">
                {data.firstName + " " + data.lastName}
            </Link>{" "}
            {date.getFullYear()}
        </Typography>
    )
}

export default Footer;