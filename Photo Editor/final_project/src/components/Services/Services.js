import { Box, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getStarted } from "../../store/actions";
import CustomButton from "../Global/CustomButton";
import "./Services.scss";

const StyledParagraph = withStyles({
  root: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 40,
    fontSize: 18,
    color: "#474747",
    fontWeight: "normal",
    textAlign: "center",
    lineHeight: "1.5rem",
    "@media (min-width:600px)": {
      fontSize: 16,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
})(Typography);

const ServiceTitle = withStyles({
  root: {
    paddingTop: 15,
    paddingBottom: 6,
    fontSize: 19,
    fontWeight: 800,
    color: "#5E61A8",
    textTransform: "uppercase",
    "@media (min-width:600px)": {
      fontSize: 20,
      paddingTop: 44,
      paddingBottom: 24,
    },
  },
})(Typography);

const ServiceHeader = withStyles({
  root: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    fontSize: 28,
    color: "#212052",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "2rem",
    "@media (min-width:600px)": {
      fontSize: 30,
      paddingLeft: 20,
      paddingRight: 0,
    },
    "@media (min-width:960px)": {
      fontSize: 34,
      textAlign: "left",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
})(Typography);

const ServiceSubHeader = withStyles({
  root: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#474747",
    textAlign: "center",
    lineHeight: "2rem",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    "@media (min-width:600px)": {
      fontSize: 20,
      paddingLeft: 20,
      paddingRight: 0,
    },
    "@media (min-width:960px)": {
      fontSize: 21,
      textAlign: "left",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
})(Typography);

function Services({ getStarted }) {
  const classes = withStyles();
  return (
    <div className="main-font" alignitems="flex-start">
      <Grid
        container
        direction="row"
        justify="space-evenly"
        className="myServices"
        component={"div"}
      >
        <Box
          component={"div"}
          className="starsSecond"
          display={{ xs: "none", md: "block" }}
        >
          <img src="/images/stars2.svg" alt="stars-logo" />
        </Box>
        <Box
          component={"div"}
          className="starsSecond2"
          display={{ xs: "none", md: "block" }}
        >
          <img src="/images/stars1.svg" alt="stars-logo" />
        </Box>
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="flex-start"
          component="div"
        >
          <Grid component={"div"} container item justify="center">
            <ServiceHeader className={classes.root}>
              Cropman lets you work more effectively
            </ServiceHeader>
          </Grid>
          <Grid component={"div"} container item justify="center">
            <ServiceSubHeader className={classes.root}>
              Focus on the most <strong> necessary features.</strong>
            </ServiceSubHeader>
          </Grid>
        </Grid>
        <Grid component={"div"} className="card-item" item md={1} sm={false}>
          {" "}
        </Grid>
        <Grid
          container
          className="card-item"
          direction="column"
          justify="center"
          alignItems="center"
          item
          md={2}
          xs={12}
          sm={6}
          component={"div"}
        >
          <Grid component={"div"} container item justify="center">
            <img src="/images/Services/crop.svg" alt="crop" />
          </Grid>
          <Grid component={"div"} container item justify="center">
            <ServiceTitle className={classes.root}>Crop</ServiceTitle>
          </Grid>
          <Grid component={"div"} container item justify="center">
            <StyledParagraph className={classes.root}>
              Crop a batch of images in just one click{" "}
            </StyledParagraph>
          </Grid>
        </Grid>
        <Grid component={"div"} className="card-item" item sm={false}>
          {" "}
        </Grid>
        <Grid
          container
          className="card-item"
          direction="column"
          justify="center"
          alignItems="center"
          item
          md={2}
          xs={12}
          sm={6}
          component={"div"}
        >
          <Grid component={"div"} container item justify="center">
            <img src="/images/Services/resize.svg" alt="resize" />
          </Grid>
          <Grid component={"div"} container item justify="center">
            <ServiceTitle className={classes.root}>Resize</ServiceTitle>
          </Grid>
          <Grid component={"div"} container item justify="center">
            <StyledParagraph className={classes.root}>
              Assign defined size to dozens of images
            </StyledParagraph>
          </Grid>
        </Grid>
        <Grid component={"div"} className="card-item" item sm={false}>
          {" "}
        </Grid>
        <Grid
          container
          className="card-item"
          direction="column"
          justify="center"
          alignItems="center"
          item
          md={2}
          xs={12}
          sm={6}
          component={"div"}
        >
          <Grid component={"div"} container item justify="center">
            <img src="/images/Services/rotate.svg" alt="rotate" />
          </Grid>
          <Grid component={"div"} container item justify="center">
            <ServiceTitle className={classes.root}>Rotate</ServiceTitle>
          </Grid>
          <Grid component={"div"} container item justify="center">
            <StyledParagraph className={classes.root}>
              Edit hundreds of inverted photos from vacation
            </StyledParagraph>
          </Grid>
        </Grid>
        <Grid component={"div"} className="card-item" item sm={false}>
          {" "}
        </Grid>
        <Grid
          container
          className="card-item"
          direction="column"
          justify="center"
          alignItems="center"
          item
          md={2}
          xs={12}
          sm={6}
          component={"div"}
        >
          <Grid component={"div"} container item justify="center">
            <img src="/images/Services/watermark.svg" alt="watermark" />
          </Grid>
          <Grid component={"div"} container item justify="center">
            <ServiceTitle className={classes.root}>Watermark</ServiceTitle>
          </Grid>
          <Grid container item justify="center" component={"div"}>
            <StyledParagraph className={classes.root}>
              Mark your property rights in few actions
            </StyledParagraph>
          </Grid>
        </Grid>
        <Grid component={"div"} className="card-item" item md={1} sm={false}>
          {" "}
        </Grid>
        <Grid component={"div"} container item xs={12} justify="center">
          <NavLink className="nav-link-second" to="/edit-images">
            <CustomButton title={"get started"} onClick={() => getStarted()} />
          </NavLink>
        </Grid>
        <Box
          display={{ xs: "none", md: "block" }}
          component={"div"}
          className="red"
        > </Box>
        <Box
          display={{ xs: "none", md: "block" }}
          component={"div"}
          className="grey"
        > </Box>
      </Grid>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getStarted: () => dispatch(getStarted())
  }
}


export default connect(null, mapDispatchToProps)(Services)


