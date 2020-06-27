import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { CHANGE_TYPEWH } from "../../store/constants/types";


const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(0),
        },
        "& .MuiInput-root-underline": {
            "&:before": {
                content: '',
            },
        },
    },

}));

function SelectorByWH({ avalibleTypeWH, typeWH, changeWH}) {
    const classes = useStyles();


    const handleChange = (event) => {
        changeWH(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                select
                inputProps={
                    { style: { fontSize: 14, paddingLeft: 5, paddingRight: 23, marginTop: -2, disableUnderline: true, fontFamily: 'Montserrat, sans-serif', color: 'black' } }
                }
                value={typeWH}
                onChange={(event) => handleChange(event)}
                SelectProps={{
                    native: true,
                }}
            >
                {avalibleTypeWH.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
        </form>
    );
}

function mapStateToProps(state) {
    return {
        typeWH: state.editor.editorParams.typeWH,
        avalibleTypeWH: state.editor.editorParams.avalibleTypeWH
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeWH: (type) => {
            dispatch({
                type: CHANGE_TYPEWH,
                payload: type
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (SelectorByWH)
