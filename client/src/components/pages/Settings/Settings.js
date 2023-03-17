import React from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./Settings.css";

function Settings() {
    return (
        <>
            <Navbar />
            <div className="settings">
                <div className="settings-container">
                    <div className="settings-wrapper"></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Settings;
