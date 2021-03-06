
const projectsStyle = (theme) => ({
    mywrapper: {
        marginTop: 60,
        padding: 30
    },
    root2: {
        display: 'flex',
        // paddingBottom: '25px'
    },
    sort: {
        color: 'red'
    },
    card: {
        width: 270,

    },
    media: {
        width: 232,
        height: 150,
        // paddingTop: '56.25%', // 16:9
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
        fontSize: '13px'
    },
    pMenu: {
        padding: '0'
    },

})

export default projectsStyle;