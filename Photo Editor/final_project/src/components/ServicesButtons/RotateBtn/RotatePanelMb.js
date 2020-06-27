import { Zoom } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";
import { UPDATE_PHOTOS_PARAMS } from "../../../store/constants/types";
import CustomButtonService from "../BatchButton";
import "../BatchPanel.scss";
import CheckboxLabels from "../Checkbox";
import '../MobilePanel.scss';

function RotateExpansionPanelsMb({ expanded, onBClick, onBAccept, photos, updatePhotosParams, editorParams }) {

  return (
    <Zoom in={expanded}>
      <div style={{
        position: "absolute",
        marginTop: 81,
        width: 317,
        height: 170,
        marginLeft: 1,
        backgroundColor: "#EEEEEE",
        border: '1px solid #3D3A3A',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.25)',
        display: 'block',
        padding: 0
      }}>


        <Grid container direction="column" justify="flex-start" alignItems="flex-start" component={"div"} >
          <Grid
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
            component={"div"}
            style={{ marginTop: '8px' }}
            xs={12}
          >
            <Grid
              container
              item
              justify="flex-start"
              alignItems="flex-start"
              component={"div"}
              xs={12}
            >
              <p className="titles-move-select">Select images and rotate</p>
            </Grid>


            <Grid
              container
              item
              direction="row"
              justify="center"
              alignItems="center"
              component={"div"}
              xs={12}
            >
              <Grid
                container
                item
                justify="flex-start"
                alignItems="flex-start"
                component={"div"}
                xs={7}
              >
                <CheckboxLabels />
              </Grid>

              <Grid
                container
                item
                justify="flex-start"
                alignItems="center"
                component={"div"}
                xs={3}
              >
                <div style={{ display: "flex" }}>
                  <div className="arrow-wrapper" onClick={() => {
                    let photosKeys = Object.keys(photos);
                    photosKeys.forEach((key) => {
                      if (editorParams.selected[key]) {
                        photos[key] = Number.parseInt(photos[key]) - 90
                        if (photos[key] >= 360 || photos[key] <= 0) {
                          photos[key] = 360
                        }
                        updatePhotosParams(key, photos[key]);
                      }
                    });
                  }}>
                    <img style={{ marginTop: 7 }} src="/images/vts/left.svg" alt="left" />
                  </div>
                  <div className="arrow-wrapper" onClick={() => {
                    let photosKeys = Object.keys(photos);
                    photosKeys.forEach((key) => {
                      if (editorParams.selected[key]) {
                        photos[key] = Number.parseInt(photos[key]) + 90
                        if (photos[key] >= 360 || photos[key] <= 0) {
                          photos[key] = 0
                        }
                        updatePhotosParams(key, photos[key]);
                      }
                    });
                  }}>
                    <img style={{ marginTop: 7 }} src="/images/vts/right.svg" alt="right" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
            component={"div"}
            xs={12}
          >
            <Grid
              container
              item
              justify="space-evenly"
              alignItems="center"
              component={"div"}
              xs={6}
            >
              <CustomButtonService
                title="Cancel"
                icon="/images/vts/cancel.svg"
                onClick={() => {
                  onBClick(false);
                }}
              />
            </Grid>
            <Grid
              container
              item
              justify="space-evenly"
              alignItems="center"
              component={"div"}
              xs={6}
            >
              <CustomButtonService
                title="Apply"
                icon="/images/vts/apply.svg"
                onClick={() => {
                  onBAccept({});
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Zoom>
  );
}

function mapStateToProps(state) {
  return {
    editorParams: state.editor.edit.params,
    photos: state.editor.edit.photos,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePhotosParams: (photoId, params) =>
      dispatch({
        type: UPDATE_PHOTOS_PARAMS,
        payload: {
          id: photoId,
          params,
        },
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RotateExpansionPanelsMb);
