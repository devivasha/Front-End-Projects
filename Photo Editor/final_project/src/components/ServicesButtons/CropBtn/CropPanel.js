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
import CheckboxLabelsCrop from "../CheckboxCrop";
import InputSelector from "../InputSelector";
import '../MobilePanel.scss';
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
		height: 205,
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

function CropPanel({ expanded, onBClick, onBAccept, editorParams, updateActionParams, sizeType, updateActionRatioParams }) {
	const classes = withStyles();
	let dviExpanded, restyle, editParams = { width: 0, height: 0 }, ratioParam = { enabled: false, current: 0 };
	if (expanded) {
		dviExpanded = false
	} else {
		dviExpanded = true
	}
	if (editorParams.all !== undefined) {
		editParams = {
			...editParams,
			...editorParams.all
		};
		ratioParam = {
			...ratioParam,
			...editorParams.ratio
		}
	}
	if (editorParams.cropType === 1) {
		restyle = { display: 'none' }
	} else {
		restyle = {}
	}

	const calcPrevType = (param) => {
		let newParam = param
		if (sizeType === 'mm') {
			newParam = param * 0.26458333333719
		}
		return newParam
	}

	const calcToAction = (newState) => {
		if (sizeType === 'mm') {
			let keys = Object.keys(newState);
			keys.forEach(element => {
				let prev = newState[element];
				newState[element] = prev * 3.779527559;
			});
		}

		if (editorParams.cropType === 2 && ratioParam.enabled) {
			if (Object.keys(newState)[0] === 'width') {
				newState.height = newState.width / ratioParam.current
			} else if (Object.keys(newState)[0] === 'height') {
				newState.width = newState.height * ratioParam.current
			}
		}

		updateActionParams(editorParams, newState)
	}

	return (
		<div>
			<ExpansionPanel
				square
				expanded={expanded}
			>
				<ExpansionPanelSummary style={{ marginBottom: 15 }}
					// DONT TOUCH THIS
					aria-controls="panel1d-content"
					id="panel1d-header"
					onClick={() => {
						onBClick(dviExpanded)
					}}
				>
					<div
						style={{ display: "flex", margin: "auto" }}

					>
						<img src="/images/vts/crop.svg" alt="crop ico" />{" "}
						<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
						<Typography
							style={{
								fontSize: "13px",
								lineHeight: "48px",
								verticalAlign: "center",
							}}

						>
							Crop
            </Typography>
					</div>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.root}>
					<Grid container direction="column" justify="flex-start" alignItems="flex-start" component={'div'} style={{ position: 'relative' }}
					>

						<Grid container item direction="row" justify="center" alignItems="center" component={"div"} xs={12} style={restyle}>
							<Grid container item justify="flex-start" alignItems="flex-start" component={"div"} xs={4}>
								<p className="titles">Width</p>
							</Grid>
							<Grid container item justify="flex-start" alignItems="center" component={"div"} xs={4}>
								<input className="inputs" value={Math.round(calcPrevType(editParams.width))} onChange={(e) => calcToAction({ width: Number.parseInt(e.target.value) })} type="number"></input>
							</Grid>
							<Grid container item justify="flex-start" alignItems="center" component={"div"} xs={4}>
								<MuiThemeProvider theme={theme}>
									<div className='move-px'>
										<InputSelector useType={'crop'} />
									</div>
								</MuiThemeProvider>
							</Grid>
						</Grid>

						<Grid container item direction="row" justify="center" alignItems="center" component={"div"} xs={12} style={restyle}>
							<Grid container item justify="flex-start" alignItems="flex-start" component={"div"} xs={4}>
								<p className="titles">Height</p>
								<div className='icon-move' onClick={() => {
									let nowEnabled = !ratioParam.enabled, nObj = { enabled: nowEnabled }
									if (nowEnabled) {
										nObj.current = editParams.width / editParams.height
									}
									updateActionRatioParams(editorParams, nObj)
								}} style={{
									backgroundColor: ratioParam.enabled ? '#DBDBDB' : ''
								}}>
									{/*  */}
									<img src={ratioParam.enabled ? '/images/Services/crop_ratio_enabled.svg' : '/images/Services/crop_ratio_disabled.svg'} alt="crop ico" />
								</div>
							</Grid>
							<Grid container item justify="flex-start" alignItems="center" component={"div"} xs={4}>
								<input className="inputs" value={Math.round(calcPrevType(editParams.height))} onChange={(e) => calcToAction({ height: Number.parseInt(e.target.value) })} type="number"></input>
							</Grid>
							<Grid container item justify="flex-start" alignItems="center" component={"div"} xs={4}>
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
								xs={11}
							>
								<CheckboxLabelsCrop />
							</Grid>
						</Grid>
						<Grid
							container
							item
							justify="flex-start"
							alignItems="flex-start"
							component={"div"}
							xs={12}
							style={{ marginTop: -15, marginBottom: 10 }}
						>
							<p className="titles-move"> Hold "Shift" while changing frame to constraint proportions </p>
						</Grid>
						<Grid container item direction="row" justify="center" alignItems="center" component={"div"} xs={12} style={{ marginTop: -35 }}>
							<Grid container item justify="space-evenly" alignItems="center" component={"div"} xs={6}>
								<CustomButtonService title='Cancel' icon="/images/vts/cancel.svg" onClick={() => { onBClick(false) }} />
							</Grid>
							<Grid container item justify="space-evenly" alignItems="center" component={"div"} xs={6}>
								<CustomButtonService title='Apply' icon="/images/vts/apply.svg" onClick={() => { onBAccept() }} />
							</Grid>
						</Grid>
					</Grid>

				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div >
	);
}

function mapStateToProps(state) {
	return {
		editorParams: state.editor.edit.params,
		sizeType: state.editor.editorParams.sizeCropType
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
		updateActionRatioParams: (prevState, newParams) => dispatch({
			type: UPDATE_EDIT_PARAMS,
			payload: {
				...prevState,
				...{
					ratio: {
						...prevState.ratio,
						...newParams
					}
				}
			}
		})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CropPanel)