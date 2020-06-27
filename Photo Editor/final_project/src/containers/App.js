import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import createBrowserHistory from 'history/createBrowserHistory';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomizedSnackbars from '../../src/components/Modals/Plans/Alert';
import BottomRightLoader from '../components/BottomRightLoader';
import ErrDialog from "../components/Modals/ErrDialog/";
import LoadingModal from "../components/Modals/LoadingModal";
import SectionNavbars from "../components/SectionNavbars/SectionNavbars";
import './App.scss';
import ChangePassword from "./ChangePassword/ChangePassword";
import CropmanPlus from "./CropmanPlus/CropmanPlus";
import EditImages from "./EditImages/EditImages";
import EnterEmail from "./EnterEmail/EnterEmail";
import Feedback from "./Feedback/Feedback";
import Home from "./Home/Home";
import nextContainer from './Next';
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";
import PrivacyPolicy from "./PublicOffers/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./PublicOffers/TermsConditions/TermsConditions";


const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});
export const history = createBrowserHistory()
export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <LoadingModal />
          <ErrDialog />
          <CustomizedSnackbars />
          <SectionNavbars />
          <BottomRightLoader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/edit-images" component={EditImages} />
            <Route path="/cropman-plus" component={CropmanPlus} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/profile" component={Profile} />
            <Route path="/projects" component={Projects} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-conditions" component={TermsConditions} />
            <Route path="/change-passw" component={ChangePassword} />
            <Route path="/enter-email" component={EnterEmail} />
            <Route path="/next" component={nextContainer} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
