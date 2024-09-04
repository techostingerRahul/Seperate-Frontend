import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn, validateJwt } from "../../authUtils";
import { selectJwt, sendAdditionalUserData } from "../../user_listSlice";
import "./assets/Registrationtwo.css";
import Registeril from "./assets/Register_illustration.svg";
import { Link, useNavigate } from "react-router-dom"

const RegistrationTwo = ({nextPage,skip}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const storedJwt = useSelector(selectJwt);
  const [formData, setFormData] = useState({
      height: null,
      maritalStatus: null,
      religion: null,
      caste: null,
      openToAllCastes: false,
    })
  
  const jwt = localStorage.getItem("jwt");
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target.type)
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const height = formData.height ? Number(formData.height) : null;

    const updatedFormData = { ...formData, height };
    const login = await isLoggedIn()
  
    if (login) {
      const isValidJwt = await validateJwt();
  
      if (isValidJwt) {
        console.log("Form data from Registration Two:", formData);
        dispatch(sendAdditionalUserData({ userData: updatedFormData, jwt }));
        nextPage()
        // localStorage.setItem('isBasicRegistrationCompleted', true);
      } else {
        console.log("Invalid JWT. Redirecting to login...");
      }
    } else {
      console.log("User not logged in. Redirecting to login...");
    }
  };


    return (
        <div className="">
            <div className="registration-containertwo">
                <div className="content-wrappertwo">
                    <div className="image-sectiontwo">
                        <img
                            src={Registeril}
                            alt="Wedding Illustration"
                            className="wedding-imagetwo"
                        />
                    </div>
                    <div className="">
                        <h1
                            style={{
                                fontSize: "65px",
                                color: " #c9208e",
                                fontFamily: "Merriweather",
                                fontWeight: "700",
                                marginBottom: "60px",
                                marginLeft: "10px"

                            }}
                        >
                            Register
                        </h1>
                        <div className="form-sectiontwo">
                            <p style={{
                                color: " #c9208e",
                                fontFamily: "Merriweather",
                                textAlign: "right",
                                fontWeight: "700"
                            }}>Step 2/4</p>
                            <div className="form-wrappertwo ">
                                <div className="form-containertwo">
                                <form onSubmit={handleSubmit}>
                                  <div className="form-group">
                                    <select
                                      id="height"
                                      name="height"
                                      value={formData.height}
                                      onChange={handleInputChange}
                                      className="form-control input-fieldtwo"
                                    >
                                      <option value="">Height</option>
                                      <option value="4.0">4</option>
                                      <option value="4.1">4'.1"</option>
                                      <option value="4.2">4'.2"</option>
                                      <option value="4.3">4'.3"</option>
                                      <option value="4.4">4'.4"</option>
                                      <option value="4.5">4'.5"</option>
                                      <option value="4.6">4'.6"</option>
                                      <option value="4.7">4'.7"</option>
                                      <option value="4.8">4'.8"</option>
                                      <option value="4.9">4'.9"</option>
                                      <option value="4.10">4'.10"</option>
                                      <option value="4.11">4'.11"</option>
                                      <option value="5.1">5'.1"</option>
                                      <option value="5.2">5'.2"</option>
                                      <option value="5.3">5'.3"</option>
                                      <option value="5.4">5'.4"</option>
                                      <option value="5.5">5'.5"</option>
                                      <option value="5.6">5'.6"</option>
                                      <option value="5.7">5'.7"</option>
                                      <option value="5.8">5'.8"</option>
                                      <option value="5.9">5'.9"</option>
                                      <option value="5.10">5'.10"</option>
                                      <option value="5.11">5'.11"</option>
                                      <option value="6.0">6'.0"</option>
                                      <option value="6.1">6'.1"</option>
                                      <option value="6.2">6'.2"</option>
                                      <option value="6.3">6'.3"</option>
                                      <option value="6.4">6'.4"</option>
                                      <option value="6.5">6'.5"</option>
                                      <option value="6.6">6'.6"</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <select
                                      id="maritalStatus"
                                      name="maritalStatus"
                                      value={formData.maritalStatus}
                                      onChange={handleInputChange}
                                      className="form-control input-fieldtwo"
                                    >
                                      <option value="">Marital Status</option>
                                      <option value="UNMARRIED">Single</option>
                                      <option value="SEPERATED">Seperated</option>
                                      <option value="DIVORCED">Divorced</option>
                                      <option value="WIDOWED">Widowed</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <select
                                      id="religion"
                                      name="religion"
                                      value={formData.religion}
                                      onChange={handleInputChange}
                                      className="form-control input-fieldtwo"
                                    >
                                      <option value="">Religion</option>
                                      <option value="hindu">Hindu</option>
                                      <option value="muslim">Muslim</option>
                                      <option value="christian">Christian</option>
                                      <option value="sikh">Sikh</option>
                                      <option value="other">Other</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <select
                                      id="caste"
                                      name="caste"
                                      value={formData.caste}
                                      onChange={handleInputChange}
                                      className="form-control input-fieldtwo"
                                    >
                                      <option value="">Caste</option>
                                      <option value="brahman">Brahman</option>
                                      <option value="kshatriya">Kshatriya</option>
                                      <option value="vaishya">Vaishya</option>
                                      <option value="shudra">Shudra</option>
                                      <option value="other">Other</option>
                                    </select>
                                  </div>
                                  <div style={{ textAlign: "left" }}>
                                    <input
                                      type="checkbox"
                                      id="openToAllCastes"
                                      name="openToAllCastes"
                                      checked={formData.openToAllCastes}
                                      onChange={handleInputChange}
                                    />
                                    <label htmlFor="openToAllCastes">Caste no bar</label>
                                  </div>
                                  <button type="submit" className="submit-buttontwo">
                                  Next
                                  </button>
                                  <br />
                                  <button type="button" className=""  onClick={skip}>
                                    Skip for now
                                  </button>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RegistrationTwo;