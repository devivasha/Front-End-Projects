import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
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
    color: "#5E61A8",
    textTransform: "capitalize ",
    "@media (min-width:600px)": {
      fontSize: 24,
      paddingTop: 44,
      paddingBottom: 14,
    },
  },
})(Typography);

const SubTitle = withStyles({
  root: {
    paddingTop: 15,
    fontSize: 20,
    fontWeight: 500,
    color: "#5E61A8",
    textTransform: "capitalize ",
    "@media (min-width:600px)": {
      fontSize: 20,
      paddingTop: 25,
    },
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
  },
  wrapper: {
    padding: "50px 40px 50px",
  },
}));

export default function Feedback() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <div className={classes.wrapper}>
          <div className={classes.paper}>
            {/* <WatermarkContainer /> */}
            <MainTitle>Terms and Conditions</MainTitle>
            <SubTitle>Introduction</SubTitle>
            <div>
              <p>
                These Website Standard Terms and Conditions written on this
                webpage shall manage your use of our website, Cropman accessible
                at Cropman.
              </p>
              <p>
                These Terms will be applied fully and affect to your use of this
                Website. By using this Website, you agreed to accept all terms
                and conditions written in here. You must not use this Website if
                you disagree with any of these Website Standard Terms and
                Conditions.
              </p>
              <p>
                Minors or people below 18 years old are not allowed to use this
                Website.
              </p>
            </div>
            <SubTitle>Intellectual Property Rights</SubTitle>
            <div>
              <p>
                Other than the content you own, under these Terms, Cropman
                and/or its licensors own all the intellectual property rights
                and materials contained in this Website.
              </p>
              <p>
                You are granted limited license only for purposes of viewing the
                material contained on this Website.
              </p>
            </div>

            <SubTitle>Restrictions</SubTitle>
            <div>
              <p>You are specifically restricted from all of the following:</p>
              <ul>
                <li>publishing any Website material in any other media;</li>
                <li>
                  selling, sublicensing and/or otherwise commercializing any
                  Website material;
                </li>
                <li>
                  publicly performing and/or showing any Website material;
                </li>
                <li>
                  using this Website in any way that is or may be damaging to
                  this Website;
                </li>
                <li>
                  using this Website in any way that impacts user access to this
                  Website;
                </li>
                <li>
                  using this Website contrary to applicable laws and
                  regulations, or in any way may cause harm to the Website, or
                  to any person or business entity;
                </li>
                <li>
                  engaging in any data mining, data harvesting, data extracting
                  or any other similar activity in relation to this Website;
                </li>
                <li>
                  using this Website to engage in any advertising or marketing.
                </li>
              </ul>
              <p>
                Certain areas of this Website are restricted from being access
                by you and Cropman may further restrict access by you to any
                areas of this Website, at any time, in absolute discretion. Any
                user ID and password you may have for this Website are
                confidential and you must maintain confidentiality as well.
              </p>
            </div>

            <SubTitle>Your Content</SubTitle>
            <div>
              <p>
                In these Website Standard Terms and Conditions, “Your Content”
                shall mean any audio, video text, images or other material you
                choose to display on this Website. By displaying Your Content,
                you grant Cropman a non-exclusive, worldwide irrevocable, sub
                licensable license to use, reproduce, adapt, publish, translate
                and distribute it in any and all media.
              </p>
              <p>
                Your Content must be your own and must not be invading any
                third-party’s rights. Cropman reserves the right to remove any
                of Your Content from this Website at any time without notice.
              </p>
            </div>

            <SubTitle>No warranties</SubTitle>
            <div>
              <p>
                This Website is provided “as is,” with all faults, and Cropman
                express no representations or warranties, of any kind related to
                this Website or the materials contained on this Website. Also,
                nothing contained on this Website shall be interpreted as
                advising you.
              </p>
            </div>

            <SubTitle>Limitation of liability</SubTitle>
            <div>
              <p>
                In no event shall Cropman, nor any of its officers, directors
                and employees, shall be held liable for anything arising out of
                or in any way connected with your use of this Website whether
                such liability is under contract. Cropman, including its
                officers, directors and employees shall not be held liable for
                any indirect, consequential or special liability arising out of
                or in any way related to your use of this Website.
              </p>
            </div>

            <SubTitle>Indemnification</SubTitle>
            <div>
              <p>
                You hereby indemnify to the fullest extent Cropman from and
                against any and/or all liabilities, costs, demands, causes of
                action, damages and expenses arising in any way related to your
                breach of any of the provisions of these Terms.
              </p>
            </div>

            <SubTitle>Severability</SubTitle>
            <div>
              <p>
                If any provision of these Terms is found to be invalid under any
                applicable law, such provisions shall be deleted without
                affecting the remaining provisions herein.
              </p>
            </div>

            <SubTitle>Variation of Terms</SubTitle>
            <div>
              <p>
                Cropman is permitted to revise these Terms at any time as it
                sees fit, and by using this Website you are expected to review
                these Terms on a regular basis.
              </p>
            </div>

            <SubTitle>Assignment</SubTitle>
            <div>
              <p>
                The Cropman is allowed to assign, transfer, and subcontract its
                rights and/or obligations under these Terms without any
                notification. However, you are not allowed to assign, transfer,
                or subcontract any of your rights and/or obligations under these
                Terms.
              </p>
            </div>

            <SubTitle>Entire Agreement</SubTitle>
            <div>
              <p>
                These Terms constitute the entire agreement between Cropman and
                you in relation to your use of this Website, and supersede all
                prior agreements and understandings.
              </p>
            </div>

            <SubTitle>Governing Law & Jurisdiction</SubTitle>
            <div>
              <p>
                These Terms will be governed by and interpreted in accordance
                with the laws of the Ukraine, and you submit to the
                non-exclusive jurisdiction of the state and federal courts
                located in Ukraine or the resolution of any disputes.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
