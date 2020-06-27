import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./Video.scss";

const VideoHeader = withStyles({
  root: {
    fontFamily: "Montserrat, sans-serif",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    fontSize: 28,
    color: "#212052",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "2rem",
    "@media (min-width:320px)": {
      fontSize: 30,
      paddingTop: 62,
      paddingLeft: 20,
      paddingRight: 0,
    },
    "@media (min-width:600px)": {
      fontSize: 30,
      paddingLeft: 20,
      paddingRight: 0,
      paddingTop: 22,
    },
    "@media (min-width:960px)": {
      fontSize: 34,
      textAlign: "left",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
})(Typography);

const VideoSubHeader = withStyles({
  root: {
    fontFamily: "Montserrat, sans-serif",
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

export default function Video() {
  const classes = withStyles();
  return (
    <div className="main-font">
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        className="mainVideo css3-shadow"
        component={"div"}
      >
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="flex-start"
          component="div"
          md={12}
          xs={12}
          sm={12}
        >
          <Grid component={"div"} container item justify="center">
            <VideoHeader className={classes.root}>
              Just load images and enjoy the workflow
            </VideoHeader>
          </Grid>
          <Grid component={"div"} container item justify="center">
            <VideoSubHeader className={classes.root}>
              Look throuh our <strong>short tutorial</strong>
            </VideoSubHeader>
          </Grid>
        </Grid>
        <Grid
          container
          item
          maxWidth="sm"
          direction="column"
          justify="center"
          alignItems="center"
          md={12}
          xs={12}
          sm={12}
        >
          <Grid container item justify="center">
            <iframe
              height="100%"
              title="video"
              className="outBorders"
              src="https://www.youtube.com/embed/crUPnZioX8Q?modestbranding=1&autohide=1&showinfo=0&controls=1&color=white"
            > </iframe>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
