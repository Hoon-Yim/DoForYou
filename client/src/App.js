import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateNewTask from "./components/pages/NewTask/CreateNewTask";
import FindTasks from "./components/pages/FindTasks/FindTasks";
import MyTasks from "./components/pages/MyTasks/MyTasks";
import Home from "./components/pages/Home/Home";
import LogIn from "./components/pages/LogIn/LogIn";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Register from "./components/pages/Register/Register";
import BecomePerformer from "./components/pages/BecomePerformer/BecomePerformer";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import ForgotPasswordAlert from "./components/pages/ForgotPassword/ForgotPasswordAlert";
import TaskDetail from "./components/pages/TaskDetail";

import Chat from "./Chat";

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
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/login" element={<LogIn />} />
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
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/my-tasks" element={<MyTasks />} />
                    <Route path="/task-detail" element={<TaskDetail />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
