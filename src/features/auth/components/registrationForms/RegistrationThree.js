import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn, validateJwt } from "../../authUtils";
import { selectJwt, sendUserEmployementData } from "../../user_listSlice";
import "./assets/Registrationthree.css";
import Registeril from "./assets/Register_illustration.svg";
import { Link, useNavigate } from "react-router-dom";

const RegistrationThree = ({nextPage,skip}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedJwt = useSelector(selectJwt);
  const [formData, setFormData] = useState({
    employmentType: null,
    employerName: null,
    jobTitle: null,
    minAnnualIncome: null,
    maxAnnualIncome: null,
  });

  const jwt = localStorage.getItem("jwt");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "maxAnnualIncome") {
      const [minIncome, maxIncome] = value.split("-").map(Number);
  
      setFormData((prevFormData) => ({
        ...prevFormData,
        minAnnualIncome: minIncome || null,
        maxAnnualIncome: maxIncome || null,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = await isLoggedIn();

    if (login) {
      const isValidJwt = await validateJwt();

      if (isValidJwt) {
        console.log("Form data from Registration Three:", formData);
        dispatch(sendUserEmployementData({ userData: formData, jwt }));
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
      <div className="registration-containerthree">
        <div className="content-wrapperthree">
          <div className="image-sectionthree">
            <img
              src={Registeril}
              alt="Wedding Illustration"
              className="wedding-imagethree"
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
                marginLeft: "10px",
              }}
            >
              Register
            </h1>
            <div className="form-sectionthree">
              <p
                style={{
                  color: " #c9208e",
                  fontFamily: "Merriweather",
                  textAlign: "right",
                  fontWeight: "700",
                }}
              >
                Step 3/4
              </p>
              <div className="form-wrapperthree ">
                <div className="form-containerthree">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <select
                        id="employmentType"
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleInputChange}
                        className="form-control input-fieldthree"
                      >
                        <option value="">Employment type</option>
                        <option value="PRIVATE">Private sector</option>
                        <option value="GOVERNMENT">Government/Public sector</option>
                        <option value="DEFENCE">Defence Services</option>
                        <option value="BUSINESS">Business</option>
                        <option value="UNEMPLOYED">Not Working</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="form-control input-fieldthree"
                      >
                        <option value="">Role</option>
                        <option value="student">Student</option>
                        <option value="software engineer">
                          Software Engineer
                        </option>
                        <option value="manager">Manager</option>
                        <option value="ui/ux designer">UI/UX Designer</option>
                        <option value="frontend developer">
                          Frontend Developer
                        </option>
                        <option value="backend developer">
                          Backend Developer
                        </option>
                        <option value="not working">Not Working</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        id="employerName"
                        name="employerName"
                        value={formData.employerName}
                        onChange={handleInputChange}
                        className="form-control input-fieldthree"
                        placeholder="Employer"
                      />
                    </div>
                    <div className="form-group">
                    <select
                        id="maxAnnualIncome"
                        name="maxAnnualIncome"
                        value={formData.minAnnualIncome && formData.maxAnnualIncome ? `${formData.minAnnualIncome}-${formData.maxAnnualIncome}` : ""}
                        onChange={handleInputChange}
                        className="form-control input-fieldthree"
                        >
                        <option value="">Max Annual Income</option>
                        <option value="1-2">1-2LPA</option>
                        <option value="2-4">2-4LPA</option>
                        <option value="4-6">4-6LPA</option>
                        <option value="6-8">6-8LPA</option>
                        <option value="8-10">8-10LPA</option>
                        <option value="10-12">10-12LPA</option>
                        <option value="12-14">12-14LPA</option>
                        <option value="14-16">14-16LPA</option>
                    </select>
                    </div>
                    <button type="submit" className="submit-buttonthree">
                      Next
                    </button>
                    <br />
                    <button type="button" className="skip-buttonthree" onClick={skip}>
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

export default RegistrationThree;
