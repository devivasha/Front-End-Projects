import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CHANGE_SNACK } from '../../../../src/store/constants/types';
import { billingUserAccount, getStarted } from "../../../store/actions";
import CustomPlanButton from "../../Global/CustomPlanButton";
import useStyles from "./PlansStyle";
function Plans({ user, close, openRegister, billingAccount, accountBilling, openSnack, getStarted }) {
  const classes = useStyles();

  useEffect(() => {
    setUserIsAuthLs();
  });
  const [userIsAuth, setUserIsAuth] = useState(false);
  const [userIsAuthPlus, setUserIsAuthPlus] = useState(false);
  function setUserIsAuthLs() {
    if (!user.plan || user.plan === "temp") {
      setUserIsAuth(false);
    } else {
      setUserIsAuth(true);
    }
    if (user.plan === 'plus') {
      setUserIsAuthPlus(true)
    } else {
      setUserIsAuthPlus(false)
    }
  }

  useEffect(() => {
    setUserIsAuthLs();
  });

  const basicUserButtonStarted = userIsAuth === false && <CustomPlanButton title={'Get Started'} classNmae={classes.buttonRedService} onClick={() => { getStarted(); close() }} />;
  const basicUserButtonRegister = userIsAuth === false && <CustomPlanButton title={'Register'}></CustomPlanButton>;
  const basicUserButtonUpgrade = userIsAuthPlus === false && <CustomPlanButton
    classNmae={classes.buttonRedService}
    title={"Upgrade"}
    onClick={() => {
      if (userIsAuth === false) {
        openRegister();
        openSnack();
      } else {
        billingAccount();
      }
    }}
  > </CustomPlanButton>;
  const basicUserButtonStartedTrue = userIsAuth === true && <></>;
  const basicUserButtonRegisterTrue = userIsAuth === true && <></>;
  const basicUserButtonUpgradeTrue = userIsAuthPlus === true && <></>;

  return (
    <>
      <Box
        className={classes.darkBackgroundForModalWindow}
        onClick={close}
      ></Box>
      <Box className={classes.modalWindowRegister}>
        <Box className={classes.headerInTheModalWindow}>
          <Typography variant="h6" className={classes.headerRegister}>
            Upgrade your plan
          </Typography>
          <Typography variant="body1" className={classes.textInHeaderRegister}>
            Unlimited usage with{" "}
            <span className={classes.cropmanInHeader}>Cropman plus </span>for a
            price of a coffee cup
          </Typography>
          <img
            src="/images/Modals/Vector.svg"
            alt="cross for close"
            className={classes.cross}
            onClick={close}
          />
          <img
            src="/images/Modals/coffee_cup.svg"
            alt="a cup of coffee"
            className={classes.coffeeCup}
          />
          <img
            src="/images/stars1.svg"
            alt="stars"
            className={classes.starsNearCross}
          />
          <img
            src="/images/stars2.svg"
            alt="stars"
            className={classes.starsFromRightSide}
          />
          <img
            src="/images/stars1.svg"
            alt="stars"
            className={classes.starsFromBottom}
          />
        </Box>
        <Box className={classes.plansWindows}>
          <Box className={classes.planGender}>
            <Typography variant="h6" className={classes.titleInWindow}>
              Basic
            </Typography>
            <Typography
              variant="body1"
              className={classes.standartTextInWindowFirstLine}
            >
              ✓ Edit a batch of{" "}
              <span className={classes.bolderText}> 5 images</span> at once{" "}
            </Typography>
            <Typography
              variant="body1"
              className={classes.standartTextInWindow}
            >
              ✓ No registration
            </Typography>
            <Typography variant="h5" className={classes.planPriceBasic}>
              Free
            </Typography>
            <Box className={classes.buttonRedServiceBasic}>
              {basicUserButtonStarted}
              {basicUserButtonStartedTrue}
            </Box>
          </Box>
          <Box className={classes.planGender}>
            <Typography variant="h6" className={classes.titleInWindow}>
              Pro
            </Typography>
            <Typography
              variant="body1"
              className={classes.standartTextInWindowFirstLine}
            >
              ✓ Edit a batch of{" "}
              <span className={classes.bolderText}> 10 images</span> at once{" "}
            </Typography>
            <Typography
              variant="body1"
              className={classes.standartTextInWindow}
            >
              ✓ Registration is required
            </Typography>
            <Typography
              variant="body1"
              className={classes.standartTextInWindow}
            >
              {" "}
              ✓ Manage <span className={classes.bolderText}>3 projects</span>
            </Typography>
            <Typography variant="body1" className={classes.smallTextInWindow}>
              manage your image packs, browse through your actions history and
              save all your batches in one place
            </Typography>
            <Typography variant="h5" className={classes.planPricePro}>
              Free
            </Typography>
            <Box className={classes.buttonRedServicePro} onClick={openRegister}>
              {basicUserButtonRegister}
              {basicUserButtonRegisterTrue}
            </Box>
          </Box>
          <Box className={classes.planGender}>
            <Typography variant="h6" className={classes.titleInWindowPlus}>
              Cropman Plus
            </Typography>
            <Typography
              variant="body1"
              className={classes.standartTextInWindowFirstLine}
            >
              ✓ <span className={classes.bolderText}> Unlimited</span> batch
              edition
            </Typography>
            <Typography
              variant="body1"
              className={classes.standartTextInWindow}
            >
              ✓ Registration is required
            </Typography>
            <Typography
              variant="body1"
              className={classes.standartTextInWindow}
            >
              ✓ <span className={classes.bolderText}>Unlimited</span> project
              managing
            </Typography>
            <Typography variant="body1" className={classes.smallTextInWindow}>
              manage your image packs, browse through your actions history and
              save all your batches in one place
            </Typography>
            <Typography className={classes.planPricePlus}>
              <span className={classes.smallDollarSign}>$</span>5/
              <span className={classes.notBoldMonth}>month</span>
            </Typography>
            <Box className={classes.buttonRedServicePlus}>
              {basicUserButtonUpgrade}
              {basicUserButtonUpgradeTrue}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    accountBilling: state.temp.accountBilling,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    billingAccount: () => {
      dispatch(billingUserAccount());
    },
    openSnack: () => {
      dispatch({ type: CHANGE_SNACK, payload: { autoHideDuration: 6000, severity: 'info', text: 'Please register before Upgrade plan.' } });
    },
    getStarted: () => dispatch(getStarted())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Plans));