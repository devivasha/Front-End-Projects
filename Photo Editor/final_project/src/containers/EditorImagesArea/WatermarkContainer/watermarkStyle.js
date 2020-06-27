const watermarkStyle = (theme) => ({
    root: {
        width: 200,
    },
    wmcontainer: {
        display: 'flex',
        height: '389px',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        background: 'no-repeat url(https://i.ibb.co/BcGrhc5/bad-range-rover.jpg) center',
        backgroundColor: '#f2f2f2'
    },
    wmimage: {
        display: 'block',
        flex: '0 1 auto',
        padding: 5,
        alignSelf: 'center',
        zIndex: '9999',
        opacity: '0.9',
        border: '2px solid #25D8EA',
    },
    wmtext: {
        display: 'block',
        flex: '0 1 auto',
        padding: 5,
        alignSelf: 'center',
        zIndex: '9999',
        fontWeight: '700',
        fontSize: '50px',
        color: '#fff',
        border: '2px solid #25D8EA',
        // opacity: '0.7'
    },
    wmtextfield: {
        margin: '10px 0 20px'
    },
    input: {
        display: 'none',
    },
    uploadbtn: {
        margin: '30px 0 0',
        fontFamily: 'Montserrat'
    }


});

export default watermarkStyle;
