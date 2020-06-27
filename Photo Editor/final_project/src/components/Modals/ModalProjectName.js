import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles, ThemeProvider, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import theme from "./ChangeEmail/theams";

const textStyleProj = makeStyles(() => ({
    darkBackgroundForModalWindow: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.69)',
        zIndex: '500',
    },
    modalWindow: {
        width: '30vw',
        height: '240px',
        textAlign: 'center',
        backgroundColor: '#EEEEEE',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #7C7C7C',
        borderRadius: '2px',
        zIndex: '700',
        '@media (min-width:320px)': {
            width: '90vw',
            height: '250px',
            marginTop: '10px',
        },
        '@media (min-width:768px)': {
            width: '60vw',
            height: '240px',
        },
        '@media (min-width:1200px)': {
            width: '30vw',
            height: '240px',
        },
    },

    cross: {
        float: 'right',
        width: '7px',
        height: '7px',
        marginTop: '10px',
        marginRight: '10px',
        cursor: 'pointer',
        '@media (min-width:360px)': {
            width: '7px',
            height: '7px',
            marginTop: '10px',
            marginRight: '10px',
        },
        '@media (min-width:700px)': {
            width: '13px',
            height: '13px',
            marginTop: '18px',
            marginRight: '17px',
        },

    },

    textInModal: {
        fontSize: '15px',
        fontFamily: "Montserrat, sans-serif",
        marginTop: '55px',
        textAlign: 'center',
        color: '#000000',

    },
    input: {
        width: '60%',
        height: '39px',
        borderRadius: '1px',
        backgroundColor: 'white',
        color: 'Black',
        fontSize: '13px',
        marginTop: '25px',
        marginBottom: '23px',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid #E3E3E3',

    }
}));
const StyledButton = withStyles({
    root: {
        position: 'relative',
        borderRadius: '1px',
        border: "1px solid #8D8D8D",
        fontFamily: "Montserrat, sans-serif",
        textTransform: "capitalize",
        fontStyle: "normal",
        fontWeight: 500,
        color: "#3D3A3A",
        fontSize: '13px',
        height: '35px',
        width: '120px',
        padding: 0,
        "&:hover": {
            backgroundColor: "#3D3A3A",
            color: 'white'
        },
    },
})(Button);



export default function CustomProject({ accept, CloseModal, project_id }) {
    const textClasses = textStyleProj();

    const [projectName, setProjectName] = useState('');

    function handleChange(event) {
        setProjectName(event.target.value);
    }

    return (
        <>
            <Box className={textClasses.darkBackgroundForModalWindow} onClick={CloseModal}></Box>
            <Box className={textClasses.modalWindow}>
                <img src='/images/Modals/Vector.svg' className={textClasses.cross} alt='close' onClick={CloseModal} />
                <Typography variant="body1" className={textClasses.textInModal}>Enter a project name</Typography>
                <ThemeProvider theme={theme}>
                    <input className={textClasses.input} placeholder='' onChange={handleChange} value={projectName} />
                </ThemeProvider>
                <Box className={textClasses.buttonsContainer}>
                    <StyledButton variant="outlined" onClick={() => {
                        accept(project_id, projectName)
                    }}>
                        Apply
                        </StyledButton>
                </Box>
            </Box>
        </>
    );
}
