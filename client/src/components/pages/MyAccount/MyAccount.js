import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./MyAccount.css";

function MyProfile() {

    const cookies = new Cookies();
    const [user, setUser] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/users/getLoggedInUser/${cookies.get("jwt")}`)
            .then(data => {
                setUser(data.data.user);
                setFirstName(data.data.user);
                setFirstName(data.data.user.firstname);
                setLastName(data.data.user.lastname);
                setPhone(data.data.user.phone);
                setAddress(data.data.user.location.address);
                setCity(data.data.user.location.city);
                setProvince(data.data.user.location.province);
                setPostalCode(data.data.user.location.zipcode);
                setDescription(data.data.user.description);
            });
    }, []);
    console.log(user._id)
    const handleSubmit = () => {
       
        axios.put(`http://localhost:8000/api/users/updateUser/${user._id}`, {
            firstName,
            lastName,
            phone,
            address,
            city,
            province,
            postalCode,
            description
        }).then((response) => {
            console.log(response);
            setErrorMessage("")
            setSuccessMessage("Profile has been updated successfully!")
        }).catch(error => {
            setSuccessMessage("")
            setErrorMessage(error.response.data.message)
            console.log(error)
        });
    }

    return (

        <>
            <div id="container">
                <Navbar />
                <div className="my-profile">
                    <div className="my-profile-container">
                        <div className="my-profile-wrapper">
                            <div className="responsive-profile-photo-box">
                                <div className="responsive-profile-photo">
                                    <div className="responsive-profile-photo-image">
                                        <img
                                            src="images/profile/SY.png"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                <div className="responsive-profile-photo-btns">
                                    <Button
                                        buttonStyle="btn--outline"
                                        buttonSize="btn--small"
                                        buttonRadius="btn--rounded"
                                        type="submit"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        buttonStyle="btn--outline"
                                        buttonSize="btn--small"
                                        buttonRadius="btn--rounded"
                                        type="submit"
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                            <div className="my-profile-wrapper-top">
                                <div className="my-profile-wrapper-left">
                                    <div className="my-profile-wrapper-left-section-title">
                                        <div className="my-profile-wrapper-left-section-profile">
                                            <Link to="/my-account">
                                                Profile
                                            </Link>
                                        </div>
                                        <div className="my-profile-wrapper-left-section-reviews">
                                            <Link to="/my-reviews">
                                                Reviews
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="my-profile-wrapper-left-profile-form">
                                        <form
                                            id="my-profile-action"
                                        >
                                            <div className="my-profile-wrapper-left-profile-title">
                                                Personal Information
                                            </div>
                                            <div className="my-profile-name-combine">
                                                <div className="my-profile-name-combine-left">
                                                    <div className="my-profile-input-field">
                                                        <div className="my-profile-input-label">
                                                            First Name
                                                        </div>
                                                        <input
                                                            type="text"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="my-profile-name-combine-right">
                                                    <div className="my-profile-input-field">
                                                        <div className="my-profile-input-label">
                                                            Last Name
                                                        </div>
                                                        <input
                                                            type="text"
                                                            value={lastName}
                                                            onChange={(e) =>
                                                                setLastName(
                                                                    e.target.value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-profile-input-field">
                                                <div className="my-profile-input-label">
                                                    Phone
                                                </div>
                                                <input
                                                    type="text"
                                                    value={phone}
                                                    onChange={(e) =>
                                                        setPhone(e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="my-profile-input-field">
                                                <div className="my-profile-input-label">
                                                    Address
                                                </div>
                                                <input
                                                    type="text"
                                                    value={address}
                                                    onChange={(e) =>
                                                        setAddress(e.target.value)
                                                    }
                                                />
                                                <div className="my-profile-address-combine">
                                                    <div className="my-profile-address-combine-left">
                                                        <div className="my-profile-input-label">
                                                            City
                                                        </div>
                                                        <input
                                                            type="text"
                                                            value={city}
                                                            onChange={(e) =>
                                                                setCity(e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                    <div className="my-profile-address-combine-right">
                                                        <div className="my-profile-input-label">
                                                            Province
                                                        </div>
                                                        <select
                                                            name=""
                                                            id=""
                                                            value={province}
                                                            onChange={(e) =>
                                                                setProvince(
                                                                    e.target.value
                                                                )
                                                            }
                                                        >
                                                            <option
                                                                selected
                                                                disabled
                                                            >
                                                                {province}
                                                            </option>
                                                            <option value="Alberta">
                                                                Alberta
                                                            </option>
                                                            <option value="British Columbia">
                                                                British Columbia
                                                            </option>
                                                            <option value="Manitoba">
                                                                Manitoba
                                                            </option>
                                                            <option value="New Brunswick">
                                                                New Brunswick
                                                            </option>
                                                            <option value="Newfoundland">
                                                                Newfoundland
                                                            </option>
                                                            <option value="Nova Scotia">
                                                                Nova Scotia
                                                            </option>
                                                            <option value="Ontario">
                                                                Ontario
                                                            </option>
                                                            <option value="Prince Edward Island">
                                                                Prince Edward
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
                                                <div className="my-profile-input-label">
                                                    Postal Code
                                                </div>
                                                <input
                                                    type="text"
                                                    value={postalCode}
                                                    onChange={(e) =>
                                                        setPostalCode(e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="my-profile-input-field">
                                                <div className="my-profile-wrapper-left-profile-title">
                                                    BIO
                                                </div>
                                                <textarea
                                                    className="my-profile-input-field-textarea"
                                                    rows={5}
                                                    value={description ? description : ""}
                                                    onChange={(e) =>
                                                        setDescription(e.target.value)
                                                    }
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="my-profile-wrapper-right">
                                    <div className="my-profile-wrapper-right-profile-box">
                                        <div className="my-profile-wrapper-right-profile-photo">
                                            <div className="my-profile-wrapper-right-profile-photo-image">
                                                <img
                                                    src="images/profile/SY.png"
                                                    alt="profile"
                                                />
                                            </div>
                                        </div>
                                        <div className="my-profile-wrapper-right-profile-btns">
                                            <Button
                                                buttonStyle="btn--outline"
                                                buttonSize="btn--small"
                                                buttonRadius="btn--rounded"
                                                type="submit"
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                buttonStyle="btn--outline"
                                                buttonSize="btn--small"
                                                buttonRadius="btn--rounded"
                                                type="submit"
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="my-profile-wrapper-right-bottom">
                                        <p className="text-green-400">{successMessage}</p>
                                        <p className="text-red-400">{errorMessage}</p>
                                        <div className="my-profile-wrapper-right-bottom-manage-btn">
                                            <Button
                                                buttonStyle="btn--cancel"
                                                buttonSize="btn--wide-bold"
                                                type="reset"
                                                form="my-profile-action"
                                            >
                                                RESET
                                            </Button>
                                        </div>
                                        <div className="my-profile-wrapper-right-bottom-save-btn">
                                            <Button
                                                buttonStyle="btn--primary-blue"
                                                buttonSize="btn--wide-bold"
                                                type="submit"
                                                form="my-profile-action"
                                                onClick={handleSubmit}
                                            >
                                                SAVE
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="responsive-profile-bottom-box">
                                <div className="responsive-profile-bottom-manage-btn">
                                    <Button
                                        buttonStyle="btn--cancel"
                                        buttonSize="btn--wide-bold"
                                        type="reset"
                                        form="my-profile-action"
                                    >
                                        RESET
                                    </Button>
                                </div>
                                <div className="responsive-profile-bottom-save-btn">
                                    <Button
                                        buttonStyle="btn--primary-blue"
                                        buttonSize="btn--wide-bold"
                                        type="submit"
                                        form="my-profile-action"
                                    >
                                        SAVE
                                    </Button>
                                </div>
                            </div>
                            <div className="my-profile-wrapper-bottom">
                                <div className="my-profile-wrapper-left">
                                    <div className="my-profile-wrapper-left-password-form">
                                        <form
                                            /*onSubmit={handleSubmit}*/ id="my-password-action"
                                        >
                                            <div className="my-profile-wrapper-left-password-title">
                                                Change Password
                                            </div>
                                            <div className="my-profile-wrapper-left-password-sub-title">
                                                Create a new password with the
                                                following requirements:
                                            </div>
                                            <div className="my-profile-wrapper-left-password-desc">
                                                <ul className="my-profile-wrapper-left-password-desc-list">
                                                    <li>
                                                        length - at least 8
                                                        characters
                                                    </li>
                                                    <li>lower case</li>
                                                    <li>
                                                        numbers or special
                                                        characters: !, @, # and
                                                        others
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="my-profile-input-field">
                                                <div className="my-profile-input-label">
                                                    New Password
                                                </div>
                                                <input
                                                    type="password"
                                                    placeholder="•••••••••••"
                                                /*onChange={(e) =>
                                            setPhone(e.target.value)
                                        }*/
                                                />
                                            </div>
                                            <div className="my-profile-input-field">
                                                <div className="my-profile-input-label">
                                                    Confirm Password
                                                </div>
                                                <input
                                                    type="password"
                                                    placeholder="•••••••••••"
                                                /*onChange={(e) =>
                                            setPhone(e.target.value)
                                        }*/
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="my-profile-wrapper-right-password">
                                    <div className="my-profile-wrapper-right-bottom-save-btn">
                                        <Button
                                            buttonStyle="btn--primary-blue"
                                            buttonSize="btn--wide-bold"
                                            type="submit"
                                            form="my-password-action"
                                        >
                                            SAVE
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MyProfile;
