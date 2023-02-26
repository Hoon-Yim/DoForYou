import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateNewTask from "./components/pages/CreateNewTask";
import FindTasks from "./components/pages/FindTasks";
import MyTasks from "./components/pages/MyTasks";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import About from "./components/pages/About";
import BecomePerformer from "./components/pages/BecomePerformer";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import ForgotPasswordAlert from "./components/pages/ForgotPasswordAlert";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        path="/create-new-task"
                        element={<CreateNewTask />}
                    />
                    <Route path="/find-tasks" element={<FindTasks />} />
                    <Route path="/my-tasks" element={<MyTasks />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/log-in" element={<LogIn />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/become-performer"
                        element={<BecomePerformer />}
                    />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/password-alert"
                        element={<ForgotPasswordAlert />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
