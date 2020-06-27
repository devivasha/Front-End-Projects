import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";
import React from "react";
import { connect } from "react-redux";
import { UPDATE_PHOTOS_PARAMS } from "../../../store/constants/types";
import CustomButtonService from "../BatchButton";
import "../BatchPanel.scss";
import CheckboxLabels from "../Checkbox";

const useStyles = makeStyles(() => ({
  customWidth: {
    borderRadius: '2px',
    height: '25px',
    width: '90px',
    fontSize: '14px',
    paddingTop: '3px',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
}));

const ExpansionPanel = withStyles({
  root: {
    width: 281,
    marginTop: 15,
    align: "center",
    backgroundColor: "#EEEEEE",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "#3D3A3A",
    fontSize: 8,
    color: "white",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    height: 40,
    textTransform: "uppercase",
    alignItems: "center",
    justifyContent: "center",
    "&$expanded": {
      minHeight: 48,
      backgroundColor: "#4E4A4A",
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles({
  root: {
    width: 281,
    height: 155,
    display: "block",
    padding: 0,
  },
})(MuiExpansionPanelDetails);

function RotateExpansionPanels({ expanded, onBClick, onBAccept, photos, updatePhotosParams, editorParams }) {
  const classes = withStyles();
  const classesTooltip = useStyles();
  let dviExpanded;
  if (expanded) {
    dviExpanded = false;
  } else {
    dviExpanded = true;
  }

  return (
    <div>
      <ExpansionPanel square expanded={expanded}>
        <ExpansionPanelSummary
          style={{ marginBottom: 15 }}
          aria-controls="panel1d-content"
          id="panel1d-header"
          onClick={() => { onBClick(dviExpanded); }} >
          <div style={{ display: "flex", margin: "auto" }}>
            <img src="/images/vts/rotate.svg" alt="ico" />{" "}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Typography style={{ fontSize: "13px", lineHeight: "48px", verticalAlign: "center", }} >
              Rotate
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.root}>
          <Grid container direction="column" justify="flex-start" alignItems="flex-start" component={"div"} >
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
                xs={12}
              >
                <p className="titles-move">Select images and rotate</p>
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
                    <Tooltip title='Turn left' classes={{ tooltip: classesTooltip.customWidth }}>
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
                    </Tooltip>
                    <Tooltip title='Turn right' classes={{ tooltip: classesTooltip.customWidth }}>
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
                    </Tooltip>
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
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
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
)(RotateExpansionPanels);
