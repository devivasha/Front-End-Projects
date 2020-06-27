import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";
import { UPDATE_EDIT_PARAMS } from "../../store/constants/types";

const GreyCheckbox = withStyles({
    root: {
        color: '#505050'[400],
        "&$checked": {
            color: '#505050'[400],
        },

    },
    checked: {}
})(props => <Checkbox color="default" {...props} />);
function CheckboxLabels({ showParams, setImages, project }) {
    let selected = showParams.selected
    let allImages = false
    if (typeof selected === 'object') {
        let trueCount = 0
        selected.forEach(element => {
            if (element === true) trueCount++
        });
        if (trueCount === selected.length) allImages = true
    }

    const handleChange = event => {
        let newArr = []
        project.photos.last.forEach(() => {
            newArr.push(event.target.checked)
        });
        setImages(newArr)
    };

    return (
        <FormControlLabel
            control={
                <GreyCheckbox
                    checked={allImages}
                    onChange={handleChange}
                    name="checkedG"
                />
            }
            label={<span style={{ fontSize: '13px', color: '#000000' }}>Select all images</span>}
        />
    );
}
const mapStateToProps = (state) => {
    return {
        showParams: state.editor.edit.params,
        project: state.editor.project
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setImages: (array) => dispatch({
            type: UPDATE_EDIT_PARAMS,
            payload: {
                selected: array
            },
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxLabels)