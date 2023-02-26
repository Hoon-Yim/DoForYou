import React, { useState } from "react";
import "../../../App.css";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import "./CreateNewTask.css";

function CreateNewTask() {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [remote, setRemote] = useState(true);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [details, setDetails] = useState("");
    const [budget, setBudget] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/tasks/create", {
                title,
                category,
                remote,
                location: { address, city, province, zipcode: postalCode },
                details,
                budget,
                paymentMethod,
                phone,
            })
            .then((data) => {
                cookies.set("jwt", data.data.token);
                console.log(data.data);
                navigate("/find-tasks");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <Navbar />

            <div className="create-new-task">
                <div className="create-new-task-container">
                    <div className="create-new-task-wrapper">
                        <div className="create-new-task-wrapper-left">
                            <div>
                                <div className="create-new-task-wrapper-left-text">
                                    <div className="create-new-task-wrapper-left-text-box">
                                        <div className="create-new-task-wrapper-left-text-main">
                                            1205 Performers can help you
                                        </div>
                                        <div className="create-new-task-wrapper-left-text-sub">
                                            Please answer all questions in the
                                            form.
                                        </div>
                                        <div className="create-new-task-wrapper-left-text-sub">
                                            to get response from performers.
                                        </div>
                                        <div className="create-new-task-wrapper-left-text-sub">
                                            It will take less than 5 minutes.
                                        </div>
                                    </div>
                                </div>

                                <div className="create-new-task-image">
                                    <div className="create-new-task-image-box">
                                        <img
                                            className="create-new-task-image-png"
                                            src={
                                                process.env.PUBLIC_URL +
                                                "images/create-task.png"
                                            }
                                            alt="become-create-new-task"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="create-new-task-wrapper-right">
                            <div className="create-new-task-outline">
                                <div className="create-new-task-content">
                                    <div className="create-new-task-title">
                                        <h1>Tell us about your task</h1>
                                    </div>
                                    <div className="create-new-task-outline-box">
                                        <div className="create-new-task-inline-box">
                                            <div className="create-new-task-form">
                                                {/* create-new-task-form */}
                                                <form onSubmit={handleSubmit}>
                                                    <div className="create-new-task-input-field">
                                                        <div className="create-new-task-input-label">
                                                            Title of task
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="create-new-task-input-field-input"
                                                            placeholder="Assemble the sofa from IKEA"
                                                            onChange={(e) =>
                                                                setTitle(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="create-new-task-input-field">
                                                        <div className="create-new-task-input-label">
                                                            Category
                                                        </div>
                                                        <select
                                                            name=""
                                                            id=""
                                                            className="create-new-task-input-select"
                                                            onChange={(e) =>
                                                                setCategory(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        >
                                                            <option
                                                                value=""
                                                                disabled
                                                                selected
                                                            >
                                                                Select
                                                            </option>
                                                            <option value="Courier Service">
                                                                Courier Services
                                                            </option>
                                                            <option value="Repair of Digital Devices">
                                                                Repair of
                                                                Digital Devices
                                                            </option>
                                                            <option value="Design">
                                                                Design
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="create-new-task-input-field">
                                                        <div className="create-new-task-input-label">
                                                            Service remotely?
                                                        </div>
                                                        <div className="create-new-task-radio-combine">
                                                            <div className="create-new-task-radio-combine-left">
                                                                <input
                                                                    className="create-new-task-radio"
                                                                    type="radio"
                                                                    value={true}
                                                                    name=""
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setRemote(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                                <div className="radio-combine-label">
                                                                    Can be done
                                                                    remotely
                                                                </div>
                                                            </div>
                                                            <div className="create-new-task-radio-combine-right">
                                                                <input
                                                                    className="create-new-task-radio"
                                                                    type="radio"
                                                                    value={
                                                                        false
                                                                    }
                                                                    name=""
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setRemote(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                                <div className="radio-combine-label">
                                                                    Need to be
                                                                    done in
                                                                    person
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="create-new-task-input-field"
                                                        style={{
                                                            marginBottom:
                                                                "1.5rem",
                                                        }}
                                                    >
                                                        <div className="create-new-task-input-label">
                                                            What is address?
                                                        </div>
                                                        <div className="create-new-task-input-sub-label">
                                                            Address
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="create-new-task-input-field-sub-input"
                                                            placeholder="Address"
                                                            onChange={(e) =>
                                                                setAddress(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                        <div className="address-combine">
                                                            <div className="address-combine-left">
                                                                <div className="create-new-task-input-sub-label">
                                                                    City
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="create-new-task-input-field-sub-input"
                                                                    placeholder="City"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setCity(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="address-combine-right">
                                                                <div className="create-new-task-input-sub-label">
                                                                    Province
                                                                </div>
                                                                <select
                                                                    name=""
                                                                    id=""
                                                                    className="create-new-task-input-sub-select"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setProvince(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                >
                                                                    <option
                                                                        value=""
                                                                        selected
                                                                        disabled
                                                                    >
                                                                        Select
                                                                    </option>
                                                                    <option value="Alberta">
                                                                        Alberta
                                                                    </option>
                                                                    <option value="British Columbia">
                                                                        British
                                                                        Columbia
                                                                    </option>
                                                                    <option value="Manitoba">
                                                                        Manitoba
                                                                    </option>
                                                                    <option value="New Brunswick">
                                                                        New
                                                                        Brunswick
                                                                    </option>
                                                                    <option value="Newfoundland">
                                                                        Newfoundland
                                                                    </option>
                                                                    <option value="Nova Scotia">
                                                                        Nova
                                                                        Scotia
                                                                    </option>
                                                                    <option value="Ontario">
                                                                        Ontario
                                                                    </option>
                                                                    <option value="Prince Edward Island">
                                                                        Prince
                                                                        Edward
                                                                        Island
                                                                    </option>
                                                                    <option value="Quebec">
                                                                        Quebec
                                                                    </option>
                                                                    <option value="Saskatchewan">
                                                                        Saskatchewan
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="create-new-task-input-sub-label">
                                                            Postal Code
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="create-new-task-input-field-sub-input"
                                                            placeholder="A1B2C3"
                                                            onChange={(e) =>
                                                                setPostalCode(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div
                                                        className="create-new-task-input-field"
                                                        style={{
                                                            marginBottom:
                                                                "1.5rem",
                                                        }}
                                                    >
                                                        <div className="create-new-task-input-label">
                                                            When do you need to
                                                            start work?
                                                        </div>
                                                        <select
                                                            name=""
                                                            id=""
                                                            className="
                                                            create-new-task-input-sub-select"
                                                        >
                                                            <option
                                                                value=""
                                                                disabled
                                                                selected
                                                            >
                                                                Select
                                                            </option>
                                                            <option value="">
                                                                Get started
                                                            </option>
                                                            <option value="">
                                                                Finish the work
                                                            </option>
                                                            <option value="">
                                                                Specify the
                                                                period
                                                            </option>
                                                        </select>
                                                        <div className="date-and-time-combine">
                                                            <div className="date-and-time-combine-left">
                                                                <div className="create-new-task-input-sub-label">
                                                                    Starting
                                                                    date
                                                                </div>
                                                                <input
                                                                    type="date"
                                                                    className="create-new-task-input-field-sub-input"
                                                                    /*onChange={(
                                                                        e
                                                                    ) =>
                                                                        setStartDate(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }*/
                                                                />
                                                            </div>
                                                            <div className="date-and-time-combine-right">
                                                                <div className="create-new-task-input-sub-label">
                                                                    Starting
                                                                    time
                                                                </div>
                                                                <input
                                                                    type="time"
                                                                    className="create-new-task-input-field-sub-input"
                                                                    /*onChange={(
                                                                        e
                                                                    ) =>
                                                                        setStartDate(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }*/
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="date-and-time-combine">
                                                            <div className="date-and-time-combine-left">
                                                                <div className="create-new-task-input-sub-label">
                                                                    Ending date
                                                                </div>
                                                                <input
                                                                    type="date"
                                                                    className="create-new-task-input-field-sub-input"
                                                                    /*onChange={(
                                                                        e
                                                                    ) =>
                                                                        setEndDate(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }*/
                                                                />
                                                            </div>
                                                            <div className="date-and-time-combine-right">
                                                                <div className="create-new-task-input-sub-label">
                                                                    Ending time
                                                                </div>
                                                                <input
                                                                    type="time"
                                                                    className="create-new-task-input-field-sub-input"
                                                                    /*onChange={(
                                                                        e
                                                                    ) =>
                                                                        setEndDate(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }*/
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="create-new-task-input-field">
                                                        <div className="create-new-task-input-label">
                                                            Details of work
                                                        </div>
                                                        <input
                                                            type="textarea"
                                                            className="create-new-task-input-field-input"
                                                            placeholder="Details"
                                                            onChange={(e) =>
                                                                setDetails(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="create-new-task-input-field">
                                                        <div className="create-new-task-input-label">
                                                            What budget are you
                                                            looking for?
                                                        </div>
                                                        <input
                                                            type="number"
                                                            className="create-new-task-input-field-input"
                                                            placeholder="$ 0"
                                                            onChange={(e) =>
                                                                setBudget(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="create-new-task-input-field">
                                                        <div className="create-new-task-input-label">
                                                            How to pay?
                                                        </div>
                                                        <div className="create-new-task-radio-combine">
                                                            <div className="create-new-task-radio-combine-left">
                                                                <input
                                                                    className="create-new-task-radio"
                                                                    type="radio"
                                                                    value="in-person"
                                                                    name=""
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setPaymentMethod(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                                <div className="radio-combine-label">
                                                                    Directly pay
                                                                    in person
                                                                </div>
                                                            </div>
                                                            <div className="create-new-task-radio-combine-right">
                                                                <input
                                                                    className="create-new-task-radio"
                                                                    type="radio"
                                                                    value="e-transfer"
                                                                    name=""
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setPaymentMethod(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                                <div className="radio-combine-label">
                                                                    by Bank
                                                                    e-transfer
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="create-new-task-input-field">
                                                        <div className="create-new-task-input-label">
                                                            Your Contact
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="create-new-task-input-field-input"
                                                            placeholder="123-456-7890"
                                                            onChange={(e) =>
                                                                setPhone(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="new-task-bottom">
                                                        <div className="new-task-cancel">
                                                            <button
                                                                type="submit"
                                                                className="btn-cancel"
                                                            >
                                                                CANCEL
                                                            </button>
                                                        </div>

                                                        <div className="new-task-submit">
                                                            <button
                                                                type="submit"
                                                                className="btn-new-task"
                                                            >
                                                                SUBMIT
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default CreateNewTask;
