import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import Slider from '@material-ui/core/Slider';
import { createMuiTheme, MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ColorPicker from 'material-ui-color-picker';
import React from "react";
import { connect } from "react-redux";
import { uploadWatermark } from "../../../store/actions";
import { UPDATE_EDIT_PARAMS } from "../../../store/constants/types";
import CustomButtonService from "../BatchButton";
import "../BatchPanel.scss";


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
        height: 'auto',
        display: 'block',
        padding: 0,
    },
})(MuiExpansionPanelDetails);

const CustomButtonUpload = withStyles({
    root: {
        borderRadius: 1.4,
        textTransform: "capitalize",
        height: 33,
        width: 77,
        cursor: "pointer",
        fontFamily: "Montserrat, sans-serif",
        border: "1.4px solid #8D8D8D",
        fontWeight: 'medium',
        marginTop: 6,
        fontSize: 13,
        color: "8D8D8D",

        "&:hover": {
            backgroundColor: "#E5E5E5",
        },
    },
})(Button);

const theme = createMuiTheme({
    overrides: {
        MuiSlider: {
            root: {
                color: '#212052'

            }
        }
    }
});

function WatermarkExpansionPanels({ expanded, onBClick, onBAccept, editorParams, updateActionParams, uploadWatermark, updateActionTextParams }) {
    const classes = withStyles();
    let dviExpanded, useParams = {};
    if (expanded) {
        dviExpanded = false
    } else {
        dviExpanded = true
    }
    useParams = {
        transparency: 0,
        x: 100,
        y: 100,
        size: 25,
        type: null,
        opacity: 100,
        watermark: {
            color: '#000000',
            text: ''
        }
    }
    if (editorParams.all.transparency !== undefined) {
        useParams = {
            ...editorParams.all,
            ...{
                watermark: {
                    ...useParams.watermark,
                    ...editorParams.all.watermark

                }
            }
        }
    }
    let { type, size, transparency, watermark } = useParams, fusTitle;

    let useTextStyle = {
        height: 'auto'
    },
        useWatermarkStyle = {
            height: 'auto'
        }
    if (type === null) {
        fusTitle = 'Upload logo for watermark'
    } else if (type === 'image') {
        let ds = watermark.name;
        if (ds.length > 20) {
            ds = watermark.name.substr(0, 16);
            ds += '...'
        }
        fusTitle = ds
        useTextStyle = {
            maxHeight: '0px',
            overflow: 'hidden'
        };
    } else if (type === 'text') {
        useWatermarkStyle = {
            maxHeight: '0px',
            overflow: 'hidden'
        }
    }

    return (
        <div>
            <ExpansionPanel style={{ marginBottom: 15 }}
                square
                expanded={expanded}
            >
                <ExpansionPanelSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    onClick={() => {
                        onBClick(dviExpanded)
                    }}
                >
                    <div style={{ display: "flex", margin: "auto" }}>
                        <img src="/images/vts/watermark.svg" alt="ico" />{" "}
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Typography
                            style={{
                                fontSize: "13px",
                                lineHeight: "48px",
                                verticalAlign: "center",
                            }}
                        >
                            Watermark
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
                        style={{ position: 'relative' }}
                    >

                        <Grid
                            container
                            item
                            direction="row"
                            justify="center"
                            alignItems="center"
                            component={"div"}
                            xs={12}
                            style={useWatermarkStyle}
                        >
                            <Grid
                                container
                                item
                                justify="flex-start"
                                alignItems="flex-start"
                                component={"div"}
                                xs={9}
                            >
                                <p className="titles">{fusTitle}</p>
                            </Grid>
                            <Grid
                                container
                                item
                                justify="flex-start"
                                alignItems="center"
                                component={"div"}
                                xs={3}
                            >

                                {/* Uploading File from PC    */}
                                <CustomButtonUpload type='button' component="label"
                                    variant="outlined">
                                    <input type={type === 'image' ? 'none' : 'file'} style={{ display: "none" }} onChange={(e) => {
                                        if (type === 'image') {
                                            e.preventDefault()
                                        } else {
                                            uploadWatermark(e.target.files[0])
                                        }
                                    }} onClick={(e) => {
                                        if (type === 'image') {
                                            updateActionTextParams({
                                                ...editorParams,
                                                ...{
                                                    all: {
                                                        ...editorParams.all,
                                                        ...{
                                                            type: null,
                                                        }
                                                    }
                                                }
                                            }, {

                                            })
                                        }
                                    }} />{type === 'image' ? 'Remove' : 'Upload'} </CustomButtonUpload>
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
                            style={useTextStyle}
                        >
                            <Grid
                                container
                                item
                                justify="flex-start"
                                alignItems="flex-start"
                                component={"div"}
                                xs={5}
                            >
                                <p className="titles">Custom text</p>
                                <p className="titles-or" style={{
                                    display: type === null ? 'inline' : 'none'
                                }}>or</p>
                            </Grid>
                            <Grid
                                container
                                item
                                justify="flex-start"
                                alignItems="flex-start"
                                component={"div"}
                                xs={7}
                            >

                                {/* Setting custom text */}
                                <ColorPicker
                                    name='color'
                                    value={watermark.color}
                                    onChange={(newColor) => {
                                        if (newColor[0] === '#') updateActionTextParams(editorParams, {
                                            color: newColor,
                                        })
                                    }}
                                    placeholder=''
                                    TextFieldProps={
                                        {
                                            value: watermark.text || '',
                                            onChange: (e) => {
                                                let text = e.target.value, type = 'text';
                                                if (text === '') {
                                                    console.log('h,,')
                                                    type = null
                                                }
                                                updateActionTextParams({
                                                    ...editorParams,
                                                    ...{
                                                        all: {
                                                            ...editorParams.all,
                                                            ...{
                                                                type,
                                                            }
                                                        }
                                                    }
                                                }, {
                                                    text
                                                })

                                            }
                                        }
                                    }
                                >
                                    <Input></Input>
                                </ColorPicker>
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
                                xs={5}
                            >
                                <p className="titles">Transparency</p>
                            </Grid>
                            <Grid
                                container
                                item
                                justify="flex-start"
                                alignItems="center"
                                component={"div"}
                                xs={7}
                            >

                                {/* Setting the Opacity */}

                                <MuiThemeProvider theme={theme}>
                                    <Slider
                                        value={transparency || 0}
                                        valueLabelDisplay="auto"
                                        onChange={(e, val) => updateActionParams(editorParams, { transparency: val, opacity: 100 - val })}
                                        aria-labelledby="watermark-opacity"
                                        min={1}
                                        max={100}
                                    />
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
                                xs={5}
                            >
                                <p className="titles">Size</p>
                            </Grid>
                            <Grid
                                container
                                item
                                justify="flex-start"
                                alignItems="center"
                                component={"div"}
                                xs={7}
                            >

                                {/* Setting watermark size in % */}
                                <MuiThemeProvider theme={theme}>
                                    <Slider
                                        value={size || 0}
                                        valueLabelDisplay="auto"
                                        onChange={(e, val) => updateActionParams(editorParams, { size: val })}
                                        min={1}
                                        max={100}
                                    />
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
                            style={{ marginTop: -25 }}
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
            </ExpansionPanel >
        </div >
    );
}

function mapStateToProps(state) {
    return {
        editorParams: state.editor.edit.params,

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
        }),
        updateActionTextParams: (prevState, newParams) => dispatch({
            type: UPDATE_EDIT_PARAMS,
            payload: {
                ...prevState,
                ...{
                    all: {
                        ...prevState.all,
                        ...{
                            watermark: {
                                ...prevState.all.watermark,
                                ...newParams
                            }
                        }
                    }
                }
            }
        }),
        uploadWatermark: (file) => dispatch(uploadWatermark(file))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatermarkExpansionPanels)