import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";
import { UPDATE_EDIT_PARAMS } from "../../store/constants/types";
import './BatchPanel.scss'

const GreyCheckbox = withStyles({
    root: {
        color: '#505050'[400],
        "&$checked": {
            color: '#505050'[400],
        },

    },
    checked: {}
})(props => <Checkbox color="default" {...props} />);
function CheckboxLabelsCrop({ showParams, setCropType }) {
    let checked;
    if (showParams.cropType === 1) {
        checked = true
    } else {
        checked = false
    }

    return (
        <FormControlLabel className='selector-move'
            control={
                <GreyCheckbox
                    checked={checked}
                    onChange={(event) => {
                        if (event.target.checked === false) {

                            setCropType({
                                ...showParams,
                                ...{
                                    cropType: 2
                                }
                            })
                        } else {
                            setCropType({
                                ...showParams,
                                ...{
                                    cropType: 1
                                }
                            })
                        }
                    }}
                    name="checkedG"
                />
            }
            label={<span style={{ fontSize: '13px', color: '#000000' }}>Crop individually</span>}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        showParams: state.editor.edit.params,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCropType: (state) => dispatch({
            type: UPDATE_EDIT_PARAMS,
            payload: state
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxLabelsCrop)