import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./MyProfile.css";

function MyProfile() {
    return (
        <>
            <Navbar />
            <div className="my-profile">
                <div className="my-profile-container">
                    <div className="my-profile-wrapper">
                        <div className="my-profile-wrapper-left">
                            <div className="my-profile-wrapper-left-section-title">
                                <div className="my-profile-wrapper-left-section-profile">
                                    <Link to="/my-profile">Profile</Link>
                                </div>
                                <div className="my-profile-wrapper-left-section-reviews">
                                    <Link to="/my-reviews">Reviews</Link>
                                </div>
                            </div>
                            <div className="my-profile-wrapper-left-profile-form">
                                <form /*onSubmit={handleSubmit}*/>
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
                                                    placeholder="First Name"
                                                    /*onChange={(e) =>
                                                        setFirstName(
                                                            e.target.value
                                                        )
                                                    }*/
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
                                                    placeholder="Last Name"
                                                    /*onChange={(e) =>
                                                        setLastName(
                                                            e.target.value
                                                        )
                                                    }*/
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
                                            placeholder="123-456-7890"
                                            /*onChange={(e) =>
                                                setPhone(e.target.value)
                                            }*/
                                        />
                                    </div>
                                    <div className="my-profile-input-field">
                                        <div className="my-profile-input-label">
                                            Address
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Address"
                                            /*onChange={(e) =>
                                                setAddress(e.target.value)
                                            }*/
                                        />
                                        <div className="my-profile-address-combine">
                                            <div className="my-profile-address-combine-left">
                                                <div className="my-profile-input-label">
                                                    City
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="City"
                                                    /*onChange={(e) =>
                                                        setCity(e.target.value)
                                                    }*/
                                                />
                                            </div>
                                            <div className="my-profile-address-combine-right">
                                                <div className="my-profile-input-label">
                                                    Province
                                                </div>
                                                <select
                                                    name=""
                                                    id=""
                                                    /*onChange={(e) =>
                                                        setProvince(
                                                            e.target.value
                                                        )
                                                    }*/
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
                                                        Prince Edward Island
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
                                            placeholder="A1B2C3"
                                            /*onChange={(e) =>
                                                setPostalCode(e.target.value)
                                            }*/
                                        />
                                    </div>
                                    <div className="my-profile-input-field">
                                        <div className="my-profile-wrapper-left-profile-title">
                                            About Me
                                        </div>
                                        <textarea
                                            className="my-profile-input-field-textarea"
                                            rows={5}
                                            placeholder=""
                                            /*onChange={(e) =>
                                                    setDetails(e.target.value)
                                                }*/
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
                                <div className="my-profile-wrapper-right-bottom-manage-btn"></div>
                                <div className="my-profile-wrapper-right-bottom-save-btn">
                                    <Button
                                        buttonStyle="btn--primary-blue"
                                        buttonSize="btn--wide-bold"
                                        type="submit"
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
        </>
    );
}

export default MyProfile;
