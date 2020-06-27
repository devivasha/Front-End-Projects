import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  darkBackgroundForModalWindow: {
    position: "absolute",
    width: "100%",
    height: "490%",
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
    width: "352px",
    height: "378px",
    margin: "0px 45.5%",
    transform: "translateX(-50%)",
    backgroundColor: "#FFFFFF",
    zIndex: "1001",
    "@media (min-width:480px)": {
      width: "432px",
      height: "397px",
    },
    "@media (min-width:700px)": {
      width: "550px",
      height: "432px",
      transform: "translateX(-47%)",
    },
    "@media (min-width:1200px)": {
      width: "650px",
      height: "467px",
      transform: "translateX(-67%)",
    },
    "@media (min-width:1440px)": {
      width: "650px",
      height: "467px",
      transform: "translateX(-79%)",
    },
  },
  headerInTheModalWindow: {
    background: "rgba(234, 218, 239, 0.4)",
    height: "58px",
    "@media (min-width:480px)": {
      height: "68px",
    },
    "@media (min-width:700px)": {
      height: "78px",
    },
    "@media (min-width:1200px)": {
      height: "88px",
    },
  },
  image: {
    width: "15px",
    height: "15px",
    marginTop: "7px",
    marginLeft: "9px",
    "@media (min-width:480px)": {
      marginTop: "10px",
      marginLeft: "10px",
      width: "20px",
      height: "20px",
    },
    "@media (min-width:700px)": {
      marginTop: "13px",
      marginLeft: "22px",
      width: "23px",
      height: "23px",
    },
    "@media (min-width:1200px)": {
      marginTop: "13px",
      marginLeft: "20px",
      width: "25px",
      height: "25px",
    },
  },
  registerForm: {
    width: "250px",
    margin: "14px auto",
    "@media (min-width:480px)": {
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
    // marginTop: '5px',
    height: "10px",
  },
  input: {
    width: "100%",
    marginTop: "10px",

    "@media (min-width:700px)": {
      marginTop: "15px",
    },
    "@media (min-width:1200px)": {
      marginTop: "15px",
    },
  },
  button: {
    margin: "-10px 30%",
    transform: "translateX(-50%)",
    "@media (min-width:480px)": {
      margin: "0 36%",
    },
    "@media (min-width:700px)": {
      margin: "0 39%",
    },
    "@media (min-width:1200px)": {
      margin: "0 38%",
    },
  },
  starsNearCross: {
    position: "absolute",
    width: "8px",
    height: "12.8px",
    left: "220px",
    top: "20px",
    transform: "rotate(90deg)",
    display: "none",
    "@media (min-width:480px)": {
      width: "12px",
      height: "19px",
      left: "285px",
      top: "34px",
    },
    "@media (min-width:700px)": {
      width: "17.5px",
      height: "28px",
      left: "435px",
      top: "38px",
      display: "block",
    },
    "@media (min-width:1200px)": {
      width: "29px",
      height: "47px",
      left: "570px",
      top: "42px",
      display: "block",
    },
  },
  starsFromLeftSide: {
    position: "absolute",

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
      width: "42px",
      height: "52px",
      top: "9px",
      display: "block",
    },
  },
  errorMessageEmail: {
    fontSize: "8px",
    color: "#EA4165",
    "@media (min-width:480px)": {
      fontSize: "10px",
    },
    "@media (min-width:700px)": {
      fontSize: "13px",
    },
    "@media (min-width:1200px)": {
      fontSize: "16px",
    },
  },
  errorMessagePassword: {
    position: "absolute",
    fontSize: "8px",
    color: "#EA4165",
    "@media (min-width:480px)": {
      fontSize: "10px",
    },
    "@media (min-width:700px)": {
      fontSize: "13px",
    },
    "@media (min-width:1200px)": {
      fontSize: "16px",
    },
  },
  headerRegister: {
    position: "absolute",
    width: "400px",
    height: "29px",
    left: "31px",
    top: "12px",
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    paddingLeft: "23px",
    fontSize: "18px",
    lineHeight: "50px",
    color: "#212052",
    "@media (min-width:480px)": {
      fontSize: "16px",
      left: "49px",
      top: "22px",
    },
    "@media (min-width:700px)": {
      fontSize: "20px",
      left: "45px",
      top: "22px",
    },
    "@media (min-width:1200px)": {
      fontSize: "24px",
      left: "60px",
      top: "22px",
    },
  },
  textInHeaderRegister: {
    position: "absolute",
    width: "448px",
    height: "32px",
    left: "29px",
    top: "25px",
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "33px",
    color: "#474747",
    "@media (min-width:480px)": {
      fontSize: "12px",
      left: "49px",
      top: "45px",
    },
    "@media (min-width:700px)": {
      fontSize: "18px",
      top: "50px",
      left: "46px",
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
    cursor: "pointer",
    width: "10px",
    height: "10px",
    "@media (min-width:480px)": {
      marginTop: "20px",
      marginRight: "17px",
      width: "13px",
      height: "13px",
    },
  },
}));
export default useStyles;
