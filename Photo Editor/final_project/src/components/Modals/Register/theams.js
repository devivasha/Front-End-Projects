import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        error: {
            main: '#EA4165',
        },
        primary: {
            main: '#212052',
        },

    },
    typography: {
        body11: {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "12px",
            color:'black',
            "@media (min-width:320px)": {
                fontSize: "14px",
            },
            "@media (min-width:700px)": {
                fontSize: "20px",
            },
            "@media (min-width:1200px)": {
                fontSize: "24px",

            },
        },
        body12: {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "normal",
            fontSize: "10px",
            color:'black',
            "@media (min-width:320px)": {
                fontSize: "12px",
            },
            "@media (min-width:700px)": {
                fontSize: "12px",

            },
            "@media (min-width:1200px)": {
                fontSize: "16px",
            },
        },
    }
})

export default theme