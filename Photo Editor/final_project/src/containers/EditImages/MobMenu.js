import React from "react";
import { connect } from "react-redux";
import CropPanelMb from '../../components/ServicesButtons/CropBtn/CropPanelMb';
import MobileEditTypeSiwth from '../../components/ServicesButtons/MobileEditTypeSwitch';
import OtherPanel from '../../components/ServicesButtons/OtherBtn/OtherPanel';
import ResizePanelMb from '../../components/ServicesButtons/ResizeBtn/ResizePanelMb';
import RotatePanelMb from '../../components/ServicesButtons/RotateBtn/RotatePanelMb';
import WatermarkPanelMb from '../../components/ServicesButtons/WatermarkBtn/WatermarkPanelMb';
import { sendEditRequest, setCurrentEditorAction } from "../../store/actions";
import "./EditImages.scss";
import './MobMenu.scss';




function MobMenu({ confirmCurrentAction, changeEditCollapsed, collapsed, }) {


    return (
        <div style={{ display: 'flex', zIndex: 101 }}>
            <MobileEditTypeSiwth
                expanded={collapsed[0]}
                onBClick={(newat) => { changeEditCollapsed([newat, false, false, false, false]) }}
                src='/images/vts/crop.svg'
                text='Crop'
            />

            <MobileEditTypeSiwth
                expanded={collapsed[1]}
                onBClick={(newat) => { changeEditCollapsed([false, newat, false, false, false]) }}
                src='/images/vts/resize.svg'
                text='Resize'
            />

            <MobileEditTypeSiwth
                expanded={collapsed[2]}
                onBClick={(newat) => { changeEditCollapsed([false, false, newat, false, false]) }}
                src='/images/vts/rotate.svg'
                text='Rotate'
            />

            <MobileEditTypeSiwth
                expanded={collapsed[3]}
                onBClick={(newat) => { changeEditCollapsed([false, false, false, newat, false]) }}
                src='/images/vts/watermark.svg'
                text='W/Mark'
            />

            <MobileEditTypeSiwth
                expanded={collapsed[4]}
                onBClick={(newat) => { changeEditCollapsed([false, false, false, false, newat]) }}
                text='...'
            />

            <CropPanelMb style={{ display: 'inline-block' }}
                expanded={collapsed[0]}
                onBClick={(newat) => { changeEditCollapsed([newat, false, false, false, false]) }}
                onBAccept={() => confirmCurrentAction()} />

            <ResizePanelMb style={{ display: 'inline-block' }}
                expanded={collapsed[1]}
                onBClick={(newat) => { changeEditCollapsed([false, newat, false, false, false]) }}
                onBAccept={() => confirmCurrentAction()} />
            <RotatePanelMb style={{ display: 'inline-block' }}
                expanded={collapsed[2]}
                onBClick={(newat) => { changeEditCollapsed([false, false, newat, false, false]) }}
                onBAccept={() => confirmCurrentAction()} />
            <WatermarkPanelMb style={{ display: 'inline-block' }}
                expanded={collapsed[3]}
                onBClick={(newat) => { changeEditCollapsed([false, false, false, newat, false]) }}
                onBAccept={() => confirmCurrentAction()} />
            <OtherPanel style={{ display: 'inline-block' }}
                expanded={collapsed[4]} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        collapsed: state.editor.editorParams.editorStates,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeEditCollapsed: (newCollapsed) => {
            dispatch(setCurrentEditorAction({ actionsArray: newCollapsed }))
        },
        confirmCurrentAction: () => dispatch(sendEditRequest()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MobMenu)
