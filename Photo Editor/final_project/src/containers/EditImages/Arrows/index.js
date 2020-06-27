import Hidden from "@material-ui/core/Hidden";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { connect } from "react-redux";
import { changeHistory } from '../../../store/actions';
import '../MobMenu.scss';

function Arrows({ prevHistory, changeHistoryByArrows, project, backArrow, forwardArrow, loading }) {

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div className='arrow-outline1'>
                    <div style={{ marginTop: '-8px' }}>
                        < IconButton disabled={backArrow} onClick={() => {
                            let newHistory = [...project.history]
                            newHistory.length = newHistory.length - 1
                            changeHistoryByArrows(newHistory)
                        }} className='backArrow'>
                            <ArrowBackIcon style={{
                                width: 24,
                                height: 24
                            }} />
                            <KeyboardEventHandler
                                handleKeys={['ctrl+z', 'ctrl+Z']}
                                onKeyEvent={() => {
                                    if (backArrow === false && loading === false) {
                                        let newHistory = [...project.history]
                                        newHistory.length = newHistory.length - 1
                                        changeHistoryByArrows(newHistory)
                                    }
                                }} />
                        </IconButton>
                    </div>
                    <Hidden smUp>  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 13, color: "#3D3A3A", marginLeft: '20px', marginTop: '6px' }}>Undo</div> </Hidden>
                </div>
                <div style={{ marginTop: '-8px' }}>
                    <div className='arrow-outline2'> <Hidden smUp>  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 13, color: "#3D3A3A", marginLeft: '20px', marginRight: '20px', marginTop: '6px' }}>Redo</div></Hidden>
                        <IconButton disabled={forwardArrow} onClick={() => {
                            let newHistory = [...project.history];
                            newHistory.push(prevHistory[project.history.length])
                            changeHistoryByArrows(newHistory)
                        }} className='forwardArrow'>
                            <ArrowForwardIcon style={{
                                width: 24,
                                height: 24
                            }} />
                            <KeyboardEventHandler
                                handleKeys={['ctrl+y', 'ctrl+Y']}
                                onKeyEvent={() => {
                                    if (forwardArrow === false && loading === false) {
                                        let newHistory = [...project.history];
                                        newHistory.push(prevHistory[project.history.length])
                                        changeHistoryByArrows(newHistory)
                                    }
                                }} />
                        </IconButton>
                    </div>
                </div>
            </div >
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        project: state.editor.project,
        prevHistory: state.editor.prevHistory,
        loading: state.temp.loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHistoryByArrows: (newHistory) => dispatch(changeHistory(newHistory, false))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Arrows)
