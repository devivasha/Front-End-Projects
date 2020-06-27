import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { SORT_BY } from '../../../store/constants/types';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    menuItem: {
        fontSize: 14,
    }
}));

const FormSelect = withStyles({
    root: {
        marginLeft: '10px',
        marginTop: '7px',
    }
})(FormControl);
let prevertedSort = { type: 'createdAt', query: 'desc' };
function Sorting({ sortBy, setSorting }) {
    const classes = useStyles();

    const handleChange = (event) => {
        setSorting(JSON.parse(event.target.value))
    };
    if (sortBy.type !== 'search') {
        prevertedSort = sortBy
    }
    return (
        <div>
            <FormSelect className={classes.formControl}>
                <Select
                    value={JSON.stringify(prevertedSort)}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}>

                    <MenuItem value={'{"type":"createdAt","query":"desc"}'} className={classes.menuItem}>
                        <em className={classes.menuItem}>Date created (descending)</em>
                    </MenuItem>
                    <MenuItem value={'{"type":"createdAt","query":"asc"}'} className={classes.menuItem}>Date created (ascending)</MenuItem>
                    <MenuItem value={'{"type":"updatedAt","query":"desc"}'} className={classes.menuItem}>Date modified (descending)</MenuItem>
                    <MenuItem value={'{"type":"updatedAt","query":"asc"}'} className={classes.menuItem}>Date modified (ascending)</MenuItem>
                    <MenuItem value={'{"type":"title","query":"desc"}'} className={classes.menuItem}>Project name (descending)</MenuItem>
                    <MenuItem value={'{"type":"title","query":"asc"}'} className={classes.menuItem}>Project name (ascending)</MenuItem>
                </Select>
            </FormSelect>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Sorting)
