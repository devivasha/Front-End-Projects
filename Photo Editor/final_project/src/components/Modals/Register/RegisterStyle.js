import { makeStyles } from "@material-ui/core/styles";

const useStylesReg = makeStyles(() => ({
  darkBackgroundForModalWindow: {
    position: "fixed",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    backgroundColor: "rgba(0, 0, 0, 0.69)",
    zIndex: "1000",
    "@media (min-width:700px)": {
      height: "495%",
    },
    "@media (min-width:768px)": {
      height: "470%",
    },
    "@media (min-width:1200px)": {
      height: "480%",
    },
  },
  modalWindowRegister: {
    position: "absolute",
    width: "100%",
    height: "485px",
    margin: "48px 50%",
    transform: "translateX(-50%)",
    backgroundColor: "#FFFFFF",
    zIndex: "1001",
    borderRadius: "2px",
    "@media (min-width:320px)": {
      width: "100%",
      height: "510px",
    },
    "@media (min-width:700px)": {
      width: "600px",
      height: "590px",
    },
    "@media (min-width:1200px)": {
      width: "640px",
      height: "610px",
    },
  },
  headerInTheModalWindow: {
    background: "rgba(234, 218, 239, 0.4)",
    height: "76px",
    "@media (min-width:480px)": {
      height: "86px",
    },
    "@media (min-width:700px)": {
      height: "96px",
    },
    "@media (min-width:1200px)": {
      height: "106px",
    },
  },

  registerWithSocial: {
    display: "flex",
    justifyContent: "space-between",
    width: "250px",
    margin: "20px auto 0",
    "@media (min-width:320px)": {
      margin: "20px auto 0px",
      width: "300px",
    },
    "@media (min-width:700px)": {
      width: "420px",
      margin: "60px auto 10px",
    },
    "@media (min-width:1200px)": {
      width: "488px",
      margin: "60px auto 12px",
    },
  },
  registerWithFB: {
    display: "flex",
    width: "120px",
    height: "30px",
    border: "1px solid #797979",
    borderRadius: "2px",
    textAlign: "center",
    left: "572px",
    top: "276px",
    "&:hover": {
      cursor: 'pointer',
      backgroundColor: '#EFF6FF',
    },

    "@media (min-width:320px)": {
      width: "145px",
      height: "44px",
      fontSize: "12px",
    },
    "@media (min-width:700px)": {
      width: "190px",
      height: "50px",
      fontSize: "12px",
    },
    "@media (min-width:1200px)": {
      width: "235px",
      height: "50px",
      fontSize: "14px",
    },
  },
  textInSocialsFB: {
    marginTop: "8px",
    marginLeft: "10px",
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "8px",
    lineHeight: "17px",
    color: "#000000",
    "@media (min-width:320px)": {
      marginTop: "12px",
      marginLeft: "10px",
      fontSize: "10px",
    },
    "@media (min-width:700px)": {
      marginTop: "18px",
      fontSize: "12px",
    },
    "@media (min-width:1200px)": {
      marginLeft: "22px",
      marginTop: "18px",
      fontSize: "14px",
    },
  },
  registerWithGoogle: {
    display: "flex",
    width: "120px",
    height: "30px",
    border: "1px solid #797979",
    borderRadius: "2px",
    textAlign: "center",
    left: "572px",
    top: "276px",
    "&:hover": {
      cursor: 'pointer',
      backgroundColor: '#EFF6FF',
    },
    "@media (min-width:320px)": {
      width: "145px",
      height: "44px",
      fontSize: "12px",
    },
    "@media (min-width:700px)": {
      width: "190px",
      height: "50px",
      fontSize: "12px",
    },
    "@media (min-width:1200px)": {
      width: "235px",
      height: "50px",
      fontSize: "14px",
    },
  },
  image: {
    width: "15px",
    height: "15px",
    marginTop: "7px",
    marginLeft: "9px",
    "@media (min-width:320px)": {
      marginTop: "12px",
      marginLeft: "10px",
      width: "20px",
      height: "20px",
    },
    "@media (min-width:700px)": {
      marginTop: "13px",
      marginLeft: "26px",
      width: "23px",
      height: "23px",
    },
    "@media (min-width:1200px)": {
      marginTop: "13px",
      marginLeft: "30px",
      width: "25px",
      height: "25px",
    },
  },
  orInRegister: {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "8px",
    color: "#4E4E4E",
    marginTop: "15px",
    marginBottom: "16px",
    "@media (min-width:480px)": {
      fontSize: "16px",
      lineHeight: "16px",
      marginBottom: "17px",
      marginTop: "5px",
    },
    "@media (min-width:700px)": {
      fontSize: "16px",
      lineHeight: "18px",
      marginBottom: "6px",
    },
    "@media (min-width:1200px)": {
      fontSize: "18px",
      lineHeight: "22px",
      marginBottom: "14px",
    },
  },
  registerForm: {
    width: "250px",
    margin: "2px auto 14px",
    "@media (min-width: 360px)": {
      width: "300px",
    },
    "@media (min-width:700px)": {
      width: "420px",
    },
    "@media (min-width:1200px)": {
      width: "488px",
    },
  },
  inputEmail: {
    width: "100%",
    height: "10px",
  },
  customInput: {
    "& label.Mui-focused": {
      color: "#8b8b8b",
      borderRadius: '0px',
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#c3c3c3",
        borderRadius: `0 0 0 0`,
      },

      "&.Mui-focused fieldset": {
        borderColor: "#212052",
        color: "#212052",
      },
    },
    width: "300px",
    marginTop: "5px",

    "@media (min-width:350px)": {
      width: "320px",

    },

    "@media (min-width:700px)": {
      marginTop: "30px",
      width: "396px",
    },

    "@media (min-width:1200px)": {
      marginTop: "25px",
      width: "396px",
    },
  },

  starsNearCross: {
    position: "absolute",
    width: "28px",
    height: "22.8px",
    left: "220px",
    top: "20px",
    display: "none",
    "@media (min-width:480px)": {
      width: "12px",
      height: "19px",
      left: "285px",
      top: "34px",
    },
    "@media (min-width:700px)": {
      width: "49px",
      height: "47px",
      left: "490px",
      top: "38px",
      display: "block",
    },
    "@media (min-width:1200px)": {
      left: "530px",
      width: "49px",
      height: "47px",

      display: "block",

      top: "42px",
    },
  },
  starsFromLeftSide: {
    position: "absolute",
    width: "8px",
    height: "12.8px",
    left: "0",
    top: "6px",
    display: "none",

    "@media (min-width:480px)": {
      width: "12px",
      height: "19px",
      top: "7px",
    },
    "@media (min-width:700px)": {
      width: "17.5px",
      height: "28px",
      top: "8px",
      display: "block",
    },
    "@media (min-width:1200px)": {
      width: "29px",
      height: "47px",
      top: "9px",
      display: "block",
    },
  },

  headerRegisterReg: {
    position: "absolute",
    width: "106px",
    height: "29px",
    left: "29px",
    top: "12px",
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "29px",
    color: "#212052",
    "@media (min-width:320px)": {
      fontSize: "16px",
      left: "49px",
      top: "18px",
    },
    "@media (min-width:700px)": {
      fontSize: "20px",
      left: "49px",
      top: "22px",
    },
    "@media (min-width:1200px)": {
      fontSize: "24px",
      left: "49px",
      top: "22px",
    },
  },
  textInHeaderRegisterReg: {
    position: "absolute",
    width: "448px",
    height: "32px",
    left: "29px",
    top: "20px",
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "33px",
    color: "#474747",

    "@media (min-width:320px)": {
      fontSize: "14px",
      left: "49px",
      top: "36px",
    },
    "@media (min-width:700px)": {
      fontSize: "16px",
      top: "50px",
    },
    "@media (min-width:1200px)": {
      fontSize: "16px",
      top: "56px",
    },
  },
  crossClose: {
    float: "right",
    marginTop: "10px",
    marginRight: "15px",
    width: "10px",
    height: "10px",
    cursor: "pointer",
    "@media (min-width:480px)": {
      marginTop: "20px",
      marginRight: "17px",
      width: "13px",
      height: "13px",
    },
  },
  errorMessageEmailReg: {
    fontSize: '8px',
    color: "#EA4165",
    "@media (min-width:480px)": {
      fontSize: 12,
    },
    "@media (min-width:680px)": {
      fontSize: 13,
    },
    "@media (min-width:1200px)": {
      fontSize: 14,
    },
  },
  errorMessagePasswordReg: {
    fontSize: "8px",
    color: "#EA4165",
    "@media (min-width:480px)": {
      fontSize: "12px",
      marginTop: 0,
    },
    "@media (min-width:680px)": {
      fontSize: "13px",
      marginTop: 0,
    },
    "@media (min-width:1200px)": {
      fontSize: "14px",
      marginTop: 0,
    },
  },

}));
export default useStylesReg;
