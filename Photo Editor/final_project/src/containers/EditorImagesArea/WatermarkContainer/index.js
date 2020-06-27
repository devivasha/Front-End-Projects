import React from "react";
import { connect } from "react-redux";
import { UPDATE_EDIT_PARAMS } from "../../../store/constants/types";
let presaved = {};
function Watermark({ src, className, editorParams, updateActionParams, index, updateActionTextParams }) {
    if (!presaved[index]) {
        presaved[index] = { loaded: false }
    }

    let boxSizes = {
        display: 'block',
        position: 'relative',
        // maxHeight: '250px',
        maxHeight: '110%',
        maxWidth: '250px',
        overflow: 'hidden'
    }
    let wStyle, useWatermark = false;
    let editEparams = {};
    if (editorParams.all) {
        editEparams = {
            ...editorParams.all
        }
    }
    const moveAt = (e) => {
        let newX = ((e.pageX - presaved[index].ouX) - presaved[index].shiftX) / (presaved[index].width - presaved[index].watermark.width) * 100
        let newY = ((e.pageY - presaved[index].ouY) - presaved[index].shiftY) / (presaved[index].height - presaved[index].watermark.height) * 100;

        if (newX < 0) newX = 0;
        if (newX > 100) newX = 100;
        if (newY < 0) newY = 0;
        if (newY > 100) newY = 100;

        updateActionParams(editorParams, {
            x: newX,
            y: newY
        });
    }

    if (editEparams.type === 'image' || editEparams.type === 'text') {
        let { watermark } = editEparams, useFirst = false;
        if (!presaved[index].watermark || !presaved[index].watermark.type !== editEparams.type) useFirst = true
        if (useFirst || presaved[index].size !== editEparams.size) {
            let reorderedWatermark = {}
            if (editEparams.type === 'text') {
                let minCanvas = document.createElement('canvas');
                let ctx = minCanvas.getContext('2d');
                ctx.font = (presaved[index].waterScaler * (editEparams.size / 100)) / 3 + "px sans-serif";
                let { width } = ctx.measureText(watermark.text);
                let ws = editEparams.size / 2.30;//6.25
                let hs = editEparams.size / 5;
                if (width + ws > presaved[index].width) {
                    updateActionTextParams(editorParams, {
                        text: editEparams.watermark.text.substr(0, editEparams.watermark.text.length - 2)
                    })
                }
                reorderedWatermark.width = width + ws;
                reorderedWatermark.height = ((presaved[index].waterScaler * (editEparams.size / 100)) / 3) + hs;

            } else if (editEparams.type === 'image') {
                if (watermark.max === 'width') {
                    reorderedWatermark.width = presaved[index].waterScaler * (editEparams.size / 100);
                    if (watermark.ratio === 1) {
                        reorderedWatermark.height = reorderedWatermark.width
                    } else {
                        reorderedWatermark.height = reorderedWatermark.width / watermark.ratio
                    }
                } else if (watermark.max === 'height') {
                    reorderedWatermark.height = presaved[index].waterScaler * (editEparams.size / 100);
                    if (watermark.ratio === 1) {
                        reorderedWatermark.width = reorderedWatermark.height
                    } else {
                        reorderedWatermark.width = reorderedWatermark.height * watermark.ratio
                    }
                }
            }


            presaved[index].watermark = {
                ...{ type: editEparams.type },
                ...reorderedWatermark
            }
        }

        if (!presaved[index].x || !presaved[index].y || presaved[index].x !== editEparams.x || presaved[index].y !== editEparams.y || useFirst) {
            presaved[index].x = editEparams.x;
            presaved[index].y = editEparams.y;
            presaved[index].watermark.x = (presaved[index].width - presaved[index].watermark.width) * (presaved[index].x / 100)
            presaved[index].watermark.y = (presaved[index].height - presaved[index].watermark.height) * (presaved[index].y / 100)
        }

        if (editEparams.type === 'image') {
            wStyle = {
                position: 'absolute',
                top: presaved[index].watermark.y,
                left: presaved[index].watermark.x,
                width: presaved[index].watermark.width,
                height: presaved[index].watermark.height,
                opacity: editEparams.opacity / 100,
                margin: 0,
                cursor: 'pointer'

            }
            useWatermark = (
                <img src={watermark.url} style={wStyle} alt='watermark' onMouseDown={(e) => {
                    e.preventDefault()
                    presaved[index].shiftX = (e.pageX - presaved[index].ouX) - presaved[index].watermark.x;
                    presaved[index].shiftY = (e.pageY - presaved[index].ouY) - presaved[index].watermark.y;
                    moveAt(e)
                    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.onmousemove = (e) => {
                        moveAt(e)
                    }
                    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.onmouseup = (e) => {
                        e.currentTarget.onmousemove = null;
                        e.currentTarget.onmouseup = null
                    }
                }} onTouchStart={e => {
                    e.preventDefault()
                    let touchLocation = e.targetTouches[0];
                    presaved[index].shiftX = (touchLocation.pageX - presaved[index].ouX) - presaved[index].watermark.x;
                    presaved[index].shiftY = (touchLocation.pageY - presaved[index].ouY) - presaved[index].watermark.y;
                    moveAt(touchLocation)
                    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.ontouchmove = (e) => {
                        let touchLocation = e.targetTouches[0];
                        moveAt(touchLocation)
                    }
                    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.ontouchend = (e) => {
                        e.currentTarget.ontouchmove = null;
                        e.currentTarget.ontouchend = null
                    }

                }}></img>
            );
        } else if (editEparams.type === 'text') {
            wStyle = {
                position: 'absolute',
                color: watermark.color,
                top: presaved[index].watermark.y,
                left: presaved[index].watermark.x,
                width: presaved[index].watermark.width,
                height: presaved[index].watermark.height,
                fontSize: (presaved[index].waterScaler * (editEparams.size / 100)) / 3,
                opacity: editEparams.opacity / 100,
                margin: 0,
                fontFamily: 'Open Sans',
                cursor: 'pointer',
                userSelect: 'none',
                textAlign: 'center'
            }
            useWatermark = (
                <p style={wStyle} onMouseDown={(e) => {
                    e.preventDefault()
                    presaved[index].shiftX = (e.pageX - presaved[index].ouX) - presaved[index].watermark.x;
                    presaved[index].shiftY = (e.pageY - presaved[index].ouY) - presaved[index].watermark.y;
                    moveAt(e)
                    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.onmousemove = (e) => {
                        moveAt(e)
                    }
                    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.onmouseup = (e) => {
                        e.currentTarget.onmousemove = null;
                        e.currentTarget.onmouseup = null

                    }
                }} onTouchStart={e => {
                    e.preventDefault()
                    let touchLocation = e.targetTouches[0];
                    console.log(touchLocation)
                    presaved[index].shiftX = (touchLocation.pageX - presaved[index].ouX) - presaved[index].watermark.x;
                    presaved[index].shiftY = (touchLocation.pageY - presaved[index].ouY) - presaved[index].watermark.y;
                    moveAt(touchLocation)
                    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.ontouchmove = (e) => {
                        let touchLocation = e.targetTouches[0];
                        moveAt(touchLocation)
                    }
                    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.ontouchend = (e) => {
                        e.currentTarget.ontouchmove = null;
                        e.currentTarget.ontouchend = null
                    }

                }} >{watermark.text}</p>
            );
        }

    }
    return (
        <div style={boxSizes}>

            {useWatermark}
            <img
                alt="Awesome img"
                src={src}
                className={className}
                onLoad={(e) => {
                    if (!presaved[index].loaded) {
                        presaved[index].loaded = true
                        let { width, height } = e.target;
                        let { x, y } = e.currentTarget.getBoundingClientRect();
                        presaved[index].width = width;
                        presaved[index].height = height;
                        presaved[index].ouX = x;
                        presaved[index].ouY = y;
                        let waterScaler = height;
                        if (width < height) waterScaler = width;
                        presaved[index].waterScaler = waterScaler
                    }
                }}
            ></img>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        editorParams: state.editor.edit.params,
        photosParams: state.editor.edit.photos,
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Watermark)