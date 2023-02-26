import React, { useEffect, useState } from "react";
import "../../App.css";
import Categories from "../Categories";
import Footer from "../Footer";
import Main from "../Main";
import Navbar from "../Navbar";
import Process from "../Process";
import Reviews from "../Reviews";
import Cookies from "universal-cookie";

function Home() {
    return (
        <>
            <Navbar />

            <Main />
            <Process />
            <Categories />
            <Reviews />

            <Footer />
        </>
    );
}

export default Home;
