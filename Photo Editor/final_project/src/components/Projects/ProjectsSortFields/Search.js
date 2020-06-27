import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SORT_BY } from '../../../store/constants/types';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 167,
        height: 32,

    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        border: 'none',
        fontSize: 13
    },
    iconButton: {
        padding: 10,
    },

}));
let prevertedSort = { type: 'createdAt', query: 'desc' };
function CustomizedInputBase({ sortBy, setSorting }) {
    const classes = useStyles();
    let qFs;
    if ((sortBy.query === 'asc' || sortBy.query === 'desc') && sortBy.type !== 'search') {
        qFs = ''
        prevertedSort = sortBy
    } else {
        qFs = sortBy.query
    }

    let [query, SetQuery] = useState(qFs)

    const submit = (e) => {
        e.preventDefault()
        setSorting({ type: 'search', query })
    }

    return (
        <Paper component="form" className={classes.root} variant="outlined" square>
            <InputBase
                className={classes.input}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search ' }}
                value={query}
                onChange={(e) => {
                    if (e.target.value.length === 0) {
                        SetQuery(e.target.value)
                        setSorting(prevertedSort)
                    } else {
                        SetQuery(e.target.value)
                        setSorting({ type: 'search', query: e.target.value })
                    }
                }}
            />
            <IconButton type="normal" className={classes.iconButton} aria-label="search" onClick={submit}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

const mapStateToProps = (state) => {
    return {
        sortBy: state.projects.sortBy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSorting: (sObj) => dispatch({
            type: SORT_BY,
            payload: sObj
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomizedInputBase)