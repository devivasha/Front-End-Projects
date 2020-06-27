import { Input, Zoom } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Slider from '@material-ui/core/Slider';
import { createMuiTheme, MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import ColorPicker from 'material-ui-color-picker';
import React from "react";
import { connect } from "react-redux";
import { uploadWatermark } from "../../../store/actions";
import { UPDATE_EDIT_PARAMS } from "../../../store/constants/types";
import CustomButtonService from "../BatchButton";
import "../BatchPanel.scss";
import '../MobilePanel.scss';

const CustomButtonUpload = withStyles({
    root: {
        borderRadius: 1.4,
        textTransform: "capitalize",
        height: 33,
        width: 77,
        cursor: "pointer",
        marginLeft: '-18px',
        fontFamily: "Montserrat, sans-serif",
        border: "1.4px solid #8D8D8D",
        fontWeight: 'medium',
        marginTop: 6,
        fontSize: 13,
        color: "8D8D8D",
        "&:hover": {
            backgroundColor: "#E5E5E5",
        },
        "@media (min-width:600px)": {
            marginLeft: '0px',
        },
    },
})(Button);

const theme = createMuiTheme({
    overrides: {
        MuiSlider: {
            root: {
                color: '#212052',
                width: "90%",

            }
        }
    }
});

function WatermarkExpansionPanelsMb({ expanded, onBClick, onBAccept, editorParams, updateActionParams, uploadWatermark, updateActionTextParams }) {

    let useParams = {};
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
        <Zoom in={expanded}>
            <div style={{
                position: "absolute",
                marginTop: 81,
                width: 317,
                height: 225,
                marginLeft: 1,
                backgroundColor: "#EEEEEE",
                border: '1px solid #3D3A3A',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.25)',
                display: 'block',
                padding: 0
            }}>
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
                            <p className="titles-watermark">{fusTitle}</p>
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
                            <p className="titles-watermark">Custom text</p>
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
                                style={{ width: 164 }}
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
                            <p className="titles-watermark">Set the opacity</p>
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
                            <p className="titles-watermark">Size</p>
                        </Grid>
                        <Grid
                            container
                            item
                            justify="flex-start"
                            alignItems="center"
                            component={"div"}
                            xs={7}
                        >

                            {/* Setting text size in % */}
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
                            <CustomButtonService title='Apply' icon="/images/vts/apply.svg" onClick={() => { onBAccept({}) }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(WatermarkExpansionPanelsMb)