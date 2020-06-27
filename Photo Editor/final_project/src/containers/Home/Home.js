import React from 'react';
import './Home.scss';
import Main from "../../components/Main/Main";
import Services from "../../components/Services/Services";
import Video from "../../components/Video/Video";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "../../components/Footer/Footer";




export default function Home () {
    return (
        <div>
            <CssBaseline />
            <Main/>
            <Video />
            <Services/>
            <Footer />
        </div>
    )
}
