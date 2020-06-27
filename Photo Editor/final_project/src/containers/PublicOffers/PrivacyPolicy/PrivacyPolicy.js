import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Footer from "../../../components/Footer/Footer";


const MainTitle = withStyles({
  root: {
    paddingTop: 15,
    paddingBottom: 6,
    fontSize: 26,
    fontWeight: 800,
    color: '#5E61A8',
    textTransform: 'capitalize ',
    '@media (min-width:600px)': {
      fontSize: 24,
      paddingTop: 44,
      paddingBottom: 14,
    },
  }
})(Typography);

const SubTitle = withStyles({
  root: {
    paddingTop: 15,
    fontSize: 20,
    fontWeight: 500,
    color: '#5E61A8',
    textTransform: 'capitalize ',
    '@media (min-width:600px)': {
      fontSize: 20,
      paddingTop: 25,
    },
  }
})(Typography);



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
  },
  wrapper: {
    padding: '50px 40px 50px'
  }
}));






export default function Feedback() {
  const classes = useStyles();


  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <div className={classes.wrapper}>
          <div className={classes.paper}>
            <MainTitle>Privacy Policy</MainTitle>

            <SubTitle>Introduction</SubTitle>
            <div>
              <p>This privacy policy sets out how Cropman uses and  protects any information that you provide Cropman. Cropman is  devoted to ensuring that your privacy is protected. Should we  ask you to provide certain information by which you can be identified when accessing your account  information, you can be assured that such information will only be used in accordance with this privacy statement.  Cropman has a firm policy of protecting the confidentiality and security of information that we collect from our  Investors. </p>
              <p>We do not share your non‐public personal information with unaffiliated third parties. Information is only shared with your consent  except for the specific purposes below, in accordance with all applicable laws. Please read this policy carefully. It gives you important information about how we handle your  personal information. Cropman reserves the right to change this policy at any time.  </p>
            </div>

            <SubTitle>Use of information</SubTitle>
            <div>
              <p>We limit the collection and use of non‐public personal information to the minimum we  believe is necessary to deliver superior service to you. Services can include advising you  about our investments, services and other opportunities, maintaining your account with us, providing  you with your K‐1 tax documents so that you can properly file your returns, processing distribution  and contribution transactions and administering our business.  </p>
            </div>

            <SubTitle>What we collect</SubTitle>
            <div>
              <p>We  obtain  most non‐public  personal information  directly from you or  your agents whether in person, by telephone or electronically.  </p>
              <p>We may obtain the following information:</p>
              <ul>
                <li>first name, last name and job title ;</li>
                <li>uding home address, email address, business address, ness telephone numbers  Contact information included ;</li>
                <li>home telephone numbers and business ;</li>
                <li>social Security Numbers ;</li>
                <li>employee Identification Numbers Banking information such as wiring information ;</li>
                <li>accounts with us and transactions and interactions by us, with us or through us ;</li>
              </ul>
            </div>

            <SubTitle>Disclosure</SubTitle>
            <div>
              <p>We do not disclose any kind of non‐public personal information about our Investors or  former Investors to anyone, except when we believe it necessary for the conduct of our business,  or where disclosure is required by law. Except in those specific, limited situations, without  your consent, we will not make any disclosures of non‐public personal information to other companies  who may want to sell their products or services to you.  </p>
            </div>

            <SubTitle>What we do with the information we gather</SubTitle>
            <div>
              <p>We  require  this information  to understand your  needs and provide you  with better service, and in particular for the following reasons:</p>
              <ul>
                <li>Internal record keeping;</li>
                <li>We send email about new investment properties, investor statements, valuation  statements, capital calls or other information which we think may be valuable using the email address which you have provided;</li>
                <li>From time to time, we may also use your information to contact you for general account information and for collecting capital calls.  We may contact you by email, phone, fax or mail;</li>
                <li>We may use the information to customize our website to provide better service to you;</li>
                <li>We are required by law to provide certain information, including social security  numbers and addresses, to the Internal Revenue Service and state and local taxing authorities ;</li>
              </ul>
            </div>

            <SubTitle>Security </SubTitle>
            <div>
              <p>We  are committed  to ensuring that  your information is  secure. In order to prevent  unauthorized access or disclosure we have put in place suitable physical, electronic and  managerial procedures to safeguard and secure the information we collect. </p>
            </div>

          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
