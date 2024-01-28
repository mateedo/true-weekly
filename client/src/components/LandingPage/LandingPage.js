import React from "react";
import Title from "./Title/Title";
import Buttons from "./Buttons/Buttons";
import Footer from "./Footer/Footer";

// import background from "./images/spotify-background.png";
import "./LandingPage.css"

export default function LandingPage() {
    // const [page, setPage] = React.useState("landing");
    // const getResults = () => {
    //     setPage("weekly");
    // }
    return (
        <div>
            <div className="landing-page">
                <Title />
                <Buttons />
                <Footer />
            </div>
        </div>
    );
}