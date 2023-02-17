import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Navbar from "../Navbar";

function MyTasks() {
    return (
        <>
            <Navbar />
            <h1 className="my-tasks">MY TASKS</h1>
            <Footer />
        </>
    );
}

export default MyTasks;
