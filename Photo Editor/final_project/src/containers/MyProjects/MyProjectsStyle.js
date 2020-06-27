import { red } from "@material-ui/core/colors";



const myProjectsStyle = (theme) => ({
    mywrapper: {
        height: '100vh',
        width: '100vw',
        marginTop: '-28px',
        paddingTop: '28px',
    },
    root2: {
        display: 'flex',
    },
    card: {
        width: 270,

    },
    container: {
        width: '90vw',
        height: '115vh',
        margin: '0px auto',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        "@media (max-width:658px)": {
            margin: '55px auto',
            justifyContent: 'center',
        }
    },
    sort: {
        width: '80vw',
        margin: '0 auto 0 0',
        paddingLeft: '81px',
        height: '50px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        margin: '5px 25px 5px',

    },
    avatar: {
        backgroundColor: red[400],
    },
    paper: {
        marginTop: theme.spacing(16),
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
    },
    one: {
        marginBottom: "15px"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    content: {
        flex: '1 0 auto',
        cursor: 'pointer',
        paddingRight: 0,
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    descText: {
        fontSize: '12px'
    },

})

export default myProjectsStyle;