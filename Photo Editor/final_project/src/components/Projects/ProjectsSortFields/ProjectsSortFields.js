import { Typography } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';
import Search from "./Search";
import Sorting from "./Sorting";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            // width: '25ch',
        },
        display: 'flex',
        paddingBottom: '25px',
        "@media (max-width:480px)": {
            display: "block"
        }
    },
    searchStyle: {
        display: 'flex'
    }
}));

const SortText = withStyles({
    root: {
        fontSize: 16,
        color: '#C4C4C4',
        fontWeight: 500,
        textAlign: 'right',
        lineHeight: '1.4rem',
        padding: 0,
        marginTop: 13,

    }
})(Typography);

export default function ProjectsSortFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.searchStyle}>
                <SortText>Sort:</SortText>
                <Sorting />
            </div>
            <Search />
        </form>
    );
}
