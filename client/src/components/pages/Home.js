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
    const cookies = new Cookies();
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (cookies.get("jwt") === "logout") {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, []);

    return (
        <>
            <Navbar isLogin={isLogin} />

            <Main />
            <Process />
            <Categories />
            <Reviews />

            <Footer />
        </>
    );
}

export default Home;
