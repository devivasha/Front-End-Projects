
const projectsStyle = (theme) => ({
    mywrapper: {
        marginTop: 10,
        padding: 30
    },
    root2: {
        display: 'flex',
        // paddingBottom: '25px'
    },
    // container: {
    //     width: '100vw',
    //     height:'80vh',
    //     backgroundColor:'pink',
    // },
    // sort: {
    //     color: 'red'
    // },
    card: {
        width: 270,

    },
    media: {
        height: 0,
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: '40px',
        marginRight: '40px',
        backgroundColor: '#f2f2f2',
        paddingTop: '46.25%', // 16:9
        // margin: '10px',

    },

    details: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'none'
    },
    content: {
        flex: '1 0 auto',
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
    prjTitle: {
        fontWeight: '600'
    },
    descText: {
        fontSize: '12px'
    },
    pMenu: {
        padding: '0'
    },

})

export default projectsStyle;