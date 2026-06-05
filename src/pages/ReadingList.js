import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { readingList } from '../data/data';

const useStyles = makeStyles({
    root: {
        marginTop: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    card: {
        width: '100%',
    },
    header: {
        marginBottom: '16px'
    },
    itemTitle: {
        fontWeight: 'bold'
    },
    itemMeta: {
        marginTop: '8px'
    }
});

const ReadingList = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.header}>
                Reading List
            </Typography>
            {readingList.map((item, index) => (
                <Card className={classes.card} key={index}>
                    <CardContent>
                        <Typography variant="h6" className={classes.itemTitle}>
                            {item.title}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {item.author} · {item.type}
                        </Typography>
                        <Typography variant="body2" className={classes.itemMeta}>
                            {item.description}
                        </Typography>
                        {item.link && (
                            <Typography variant="body2" className={classes.itemMeta}>
                                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                    Read more
                                </Link>
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ReadingList;
