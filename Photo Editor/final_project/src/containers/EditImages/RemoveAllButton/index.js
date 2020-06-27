import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from "react";
import { connect } from "react-redux";
import { removePhotos } from "../../../store/actions";

const LongButton = withStyles({
    root: {
        borderRadius: 1,
        border: "1px solid #8D8D8D",
        height: 32,
        width: 281,
        fontFamily: "Montserrat, sans-serif",
        textTransform: "capitalize",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 13,
        color: "#3D3A3A",
        textDecoration: 'none',
        cursor: 'pointer',
        "@media (min-width:600px)": {
            height: 43,

        },

        "&:hover": {
            backgroundColor: " #E5E5E5",
            textDecoration: 'none',
        },
        label: {
            backgroundColor: " #E5E5E5",
            textDecoration: 'none',
            "&:link": {
                backgroundColor: " #E5E5E5",
                textDecoration: 'none',
            },
            "&:visited": {
                backgroundColor: " #E5E5E5",
                textDecoration: 'none',
            },
            "&:active": {
                textDecoration: 'none',
                backgroundColor: " #E5E5E5",
            },
        }
    },
})(Button);

function RemoveAllImages({ editType, removePhotos, project }) {
    const classes = withStyles();
    const dBtn = ((editType === 'default' || editType === 'others') && project.photos.origin.length > 0) && <LongButton className={classes.root} onClick={() => removePhotos(project.photos.origin.map(photo => { return photo.url }))}> <DeleteForeverIcon />Remove all images </LongButton>
    return (
        <>{dBtn}</>
    )
}

const mapStateToProps = (state) => {
    return {
        editType: state.editor.edit.type,
        project: state.editor.project,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePhotos: (originArray) => dispatch(removePhotos(originArray))

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveAllImages)