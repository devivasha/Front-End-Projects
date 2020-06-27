import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    container: {
        margin: '200px auto'
    },
    containerEditor: {
        paddingTop: '20px',
        margin: '0px, 0px',
        width: '100%',
        height: '100%',
        transition: 'all 400ms ease-out',
        "@media (max-width:600px)": {
            paddingTop: '215px',
        },
    },

    containerIsHidden: {
        paddingTop: '20px',
        margin: '0px, 0px',
        width: '100%',
        height: '100%',
        transition: 'all 400ms ease-out',
        "@media (min-width:600px)": {
            paddingTop: '20px',
        },
    },

    squareForCross: {
        width: '13px',
        height: '13px',
        padding: 2,
        backgroundColor: '#3D3A3A',
        marginLeft: '-16px',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    crossToClosePhoto: {
        marginLeft: '2px',
        marginBottom: "2px"
    },
    dropAreaGlobal: {
        marginLeft: "50%",
        transform: 'translateX(-50%)',
        width: "226px",
    },
    dropzoneImage: {
        marginLeft: "53%",
        transform: 'translateX(-50%)'
    },
    textInDrop: {
        fontFamily: "Montserrat, sans-serif",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#BDBDBD',
    },
    styledButton: {
        backgroundColor: '#3D3A3A',
        width: '226px',
        height: '32px',
        color: '#ffffff',
        paddingTop: "8px",
        boxSizing: 'border-box',
        fontFamily: "Montserrat, sans-serif",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
        lineHeight: '16px',
        textAlign: 'center',
        textTransform: 'uppercase',
        cursor: 'pointer',
    },
    shadow: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(191, 191, 191, 0.5)',
        marginTop: '-150px',
        zIndex: '1000',
        float: 'right'
    },
    thumbInner: {
        width: 'auto',
        overflow: 'visible',
    },
    image: {
        display: 'block',
        maxWidth: '250px',
        maxHeight: '300px',
    },
    thumbContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '55px',
        "@media (min-width:600px)": {
            marginLeft: '20px',
        },

    },
    thumb: {
        display: 'inline-flex',
        borderRadius: 2,
        marginBottom: 8,
        marginRight: 8,
        boxSizing: 'border-box',
        padding: 4,
        maxWidth: '258px',
        maxHeight: '300px'
    },
    delBtnHidden: {
        display: 'none'
    },
    projectName: {
        fontFamily: "Montserrat, sans-serif",
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '22px',
        marginLeft: '59px',
        marginTop: '15px',
        marginBottom: '15px',
        color: "#808080",
        "@media (min-width:600px)": {
            marginLeft: '25px',
        },
    }

}));



export default useStyles;