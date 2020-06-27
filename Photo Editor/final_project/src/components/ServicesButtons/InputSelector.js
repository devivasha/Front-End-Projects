import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { connect } from "react-redux";
import { CHANGE_CROP_SIZE, CHANGE_RESIZE_SIZE } from "../../store/constants/types";

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

function InputSelector({ sizeCropType, sizeResizeType, avalibleSizeCropTypes, avalibleSizeResizeTypes, changeCropSize, changeResizeSize, useType }) {
  let sizeArray = [];
  let nowType;
  if (useType === 'crop') {
    sizeArray = avalibleSizeCropTypes;
    nowType = sizeCropType;
  } else if (useType === 'resize') {
    sizeArray = avalibleSizeResizeTypes;
    nowType = sizeResizeType;
  }
  const classes = useStyles();
  const handleChange = (event) => {
    if (useType === 'crop') {
      changeCropSize(event.target.value)
    } else if (useType === 'resize') {
      changeResizeSize(event.target.value)
    }
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        select
        inputProps={
          { style: { fontSize: 13, paddingLeft: 5, paddingRight: 17, marginTop: 8, height:20, disableUnderline: true, fontFamily: 'Montserrat, sans-serif', color: '#7E7E7E' } }
        }
        value={nowType}
        onChange={(event) => handleChange(event)}
        SelectProps={{
          native: true,
        }}
      >
        {sizeArray.map((option) => (
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
    sizeCropType: state.editor.editorParams.sizeCropType,
    sizeResizeType: state.editor.editorParams.sizeResizeType,
    avalibleSizeCropTypes: state.editor.editorParams.avalibleSizeCropTypes,
    avalibleSizeResizeTypes: state.editor.editorParams.avalibleSizeResizeTypes,

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCropSize: (type) => {
      dispatch({
        type: CHANGE_CROP_SIZE,
        payload: type
      })
    },
    changeResizeSize: (type) => {
      dispatch({
        type: CHANGE_RESIZE_SIZE,
        payload: type
      })
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(InputSelector)
