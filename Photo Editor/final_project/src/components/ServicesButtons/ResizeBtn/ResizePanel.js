import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { connect } from "react-redux";
import { UPDATE_EDIT_PARAMS } from "../../../store/constants/types";
import CustomButtonService from "../BatchButton";
import "../BatchPanel.scss";
import InputSelector from "../InputSelector";
import SelectorByWH from "../SelectorByWH";

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
    display: 'block',
    padding: 0,
  },
})(MuiExpansionPanelDetails);

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          content: ''
        },
        "&:after": {
          content: ''
        }
      }
    }
  }
});

function ResizeExpansionPanels({ expanded, onBClick, onBAccept, editorParams, updateActionParams, sizeType, typeWH }) {
  const classes = withStyles();
  let dviExpanded;
  if (expanded) {
    dviExpanded = false
  } else {
    dviExpanded = true
  }
  let creEdit = {};
  if (editorParams.all === undefined) {
    creEdit.width = 0;
    creEdit.height = 0;
    creEdit.ident = false;
    creEdit.ratio = 0;
  } else {
    if (editorParams.all.width === null || editorParams.all.width === '') {
      creEdit.width = 0;
    } else {
      creEdit.width = editorParams.all.width;
    }
    if (editorParams.all.height === null || editorParams.all.height === '') {
      creEdit.height = 0;
    } else {
      creEdit.height = editorParams.all.height;
    }
    creEdit.ident = editorParams.all.ident;
    creEdit.ratio = editorParams.all.ratio;
  }



  const calcPrevType = (param, pos) => {
    let newParam = param
    if (sizeType === 'mm') {
      newParam = param * 0.26458333333719
    } else if (sizeType === 'percent') {
      let fparam = 'wpercent'
      if (pos === 1) fparam = 'hpercent'
      newParam = editorParams.all[fparam];
    }
    return newParam
  };

  const calcToAction = (newState) => {
    let keys = Object.keys(newState);
    if (sizeType === 'mm') {
      keys = Object.keys(newState);
      keys.forEach(element => {
        let prev = newState[element];
        newState[element] = prev * 3.779527559;
      });
    } else if (sizeType === 'percent') {
      let fparam = 'wpercent', foldParam = 'wold';
      if (Object.keys(newState)[0] === 'height') {
        fparam = 'hpercent';
        foldParam = 'hold';
      }
      newState[fparam] = newState[Object.keys(newState)[0]]
      newState[Object.keys(newState)[0]] = editorParams.all[foldParam] * (newState[fparam] / 100)
    }

    if (creEdit.ident === true) {
      if (Object.keys(newState)[0] === 'width') {
        newState.height = newState.width / creEdit.ratio
      } else if (Object.keys(newState)[0] === 'height') {
        newState.width = newState.height * creEdit.ratio
      }
      newState.wpercent = (newState.width / editorParams.all.wold) * 100
      newState.hpercent = (newState.height / editorParams.all.hold) * 100
    } else {
      if (Object.keys(newState)[0] === 'width') newState.wpercent = (newState.width / editorParams.all.wold) * 100
      if (Object.keys(newState)[0] === 'height') newState.hpercent = (newState.height / editorParams.all.hold) * 100
    }
    updateActionParams(editorParams, newState)
  };


  const different = creEdit.ident === false && <>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      component={"div"}
      xs={12}
    >
      <Grid
        container
        item
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        component={"div"}
        xs={12}
        style={{ paddingLeft: 8 }}
      >
        <MuiThemeProvider theme={theme}>
          <SelectorByWH />
        </MuiThemeProvider>
      </Grid>
      <Grid container
        item
        direction="row"
        justify="center"
        alignItems="center"
        component={"div"}
        xs={12}
        style={(typeWH === 'ByWidth') ? { paddingLeft: 8, display: 'block' } : { paddingLeft: 8, display: 'none' }}
      >
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
            xs={4}
          >
            <p className="titles">width</p>
          </Grid>
          <Grid
            container
            item
            justify="flex-start"
            alignItems="center"
            component={"div"}
            xs={4}
          >
            <input className="inputs" value={Math.round(calcPrevType(creEdit.width, 0))} onChange={(e) => calcToAction({ width: Number.parseInt(e.target.value) })} type="number"></input>
          </Grid>
          <Grid
            container
            item
            justify="flex-start"
            alignItems="center"
            component={"div"}
            xs={4}
          >
            <MuiThemeProvider theme={theme}>
              <InputSelector useType={'resize'} />
            </MuiThemeProvider>
          </Grid>
        </Grid>
      </Grid>

      <Grid container
        item
        direction="row"
        justify="center"
        alignItems="center"
        component={"div"}
        xs={12}
        style={(typeWH === 'ByHeight') ? { paddingLeft: 8, display: 'block' } : { paddingLeft: 8, display: 'none' }}
      >
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
            xs={4}
          >
            <p className="titles">height</p>
          </Grid>
          <Grid
            container
            item
            justify="flex-start"
            alignItems="center"
            component={"div"}
            xs={4}
          >
            <input className="inputs" value={Math.round(calcPrevType(creEdit.height, 1))} onChange={(e) => calcToAction({ height: Number.parseInt(e.target.value) })} type="number"></input>
          </Grid>
          <Grid
            container
            item
            justify="flex-start"
            alignItems="center"
            component={"div"}
            xs={4}
          >
            <MuiThemeProvider theme={theme}>
              <InputSelector useType={'resize'} />
            </MuiThemeProvider>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>

  const same = creEdit.ident === true && <>
    <Grid
      container
      item
      direction="row"
      justify="center"
      alignItems="center"
      component={"div"}
      style={{ position: 'relative' }}
      xs={12}
    >
      <Grid
        container
        item
        justify="flex-start"
        alignItems="flex-start"
        component={"div"}
        xs={4}
      >
        <p className="titles">Width</p>
      </Grid>
      <Grid
        container
        item
        justify="flex-start"
        alignItems="center"
        component={"div"}
        xs={4}
      >
        <input className="inputs" value={Math.round(calcPrevType(creEdit.width, 0))} onChange={(e) => calcToAction({ width: Number.parseInt(e.target.value) })} type="number"></input>
      </Grid>
      <Grid
        container
        item
        justify="flex-start"
        alignItems="center"
        component={"div"}
        xs={4}
      >
        <MuiThemeProvider theme={theme}>
          <div className='move-px2'>
            <InputSelector useType={'resize'} />
          </div>
        </MuiThemeProvider>
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
        justify="flex-start"
        alignItems="flex-start"
        component={"div"}
        xs={4}
      >
        <p className="titles">Height</p>
      </Grid>
      <Grid
        container
        item
        justify="flex-start"
        alignItems="center"
        component={"div"}
        xs={4}
      >
        <input className="inputs" value={Math.round(calcPrevType(creEdit.height, 1))} onChange={(e) => calcToAction({ height: Number.parseInt(e.target.value) })} type="number"></input>
      </Grid>
      <Grid
        container
        item
        justify="flex-start"
        alignItems="center"
        component={"div"}
        xs={4}
      >
      </Grid>
    </Grid>

  </>

  return (
    <div>
      <ExpansionPanel
        square
        expanded={expanded}
      >
        <ExpansionPanelSummary style={{ marginBottom: 15 }}
          aria-controls="panel1d-content"
          id="panel1d-header"
          onClick={() => {
            onBClick(dviExpanded)
          }}
        >
          <div style={{ display: "flex", margin: "auto" }}>
            <img src="/images/vts/resize.svg" alt='resize img' />{" "}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Typography
              style={{
                fontSize: "13px",
                lineHeight: "48px",
                verticalAlign: "center",
              }}
            >
              Resize
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.root}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            component={'div'}
          >
            {different}
            {same}
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
                <CustomButtonService title='Cancel' icon="/images/vts/cancel.svg" onClick={() => { onBClick(false) }} />
              </Grid>
              <Grid
                container
                item
                justify="space-evenly"
                alignItems="center"
                component={"div"}
                xs={6}
              >
                <CustomButtonService title='Apply' icon="/images/vts/apply.svg" onClick={() => { onBAccept() }} />
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
    sizeType: state.editor.editorParams.sizeResizeType,
    typeWH: state.editor.editorParams.typeWH,
    avalibleTypeWH: state.editor.editorParams.avalibleTypeWH
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateActionParams: (prevState, newParams) => dispatch({
      type: UPDATE_EDIT_PARAMS,
      payload: {
        ...prevState,
        ...{
          all: {
            ...prevState.all,
            ...newParams
          }
        }
      }
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResizeExpansionPanels)