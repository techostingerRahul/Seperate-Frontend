import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./assets/Registrationstep.css";
import Registeril from "./assets/Register_illustration.svg";
import { useDispatch } from "react-redux";
import { sendUserData } from "../../user_listSlice";

import { useNavigate} from 'react-router-dom'
import { fetchLocations, validateJwt } from "../../authUtils";

const RegistrationOne = ({nextPage}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    placeId: "",
    dateOfBirth: null,
    gender: "",
    profileCreatedBy: "",
  });

  const [errors, setErrors] = useState({});

  const [emailError,setEmailError] = useState("")

  const [activeButton, setActiveButton] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [jwt, setJwt] = useState(localStorage.getItem("jwt"));
  const navigate = useNavigate()
  

  

  useEffect(() => {
    const fetchLocationSuggestions = async () => {
      if (locationQuery && jwt && !selectedLocation) { 
        const isValid = await validateJwt();
        if (!isValid) {
          localStorage.clear();
          setJwt(null);
          return;
        }
        const results = await fetchLocations(locationQuery, jwt);
        console.log("Location search suggestion!");
        console.log(results);
        setLocations(results);
        setShowDropdown(results.length > 0);
      } else {
        setLocations([]);
        setShowDropdown(false);
      }
    };
    fetchLocationSuggestions();
  }, [locationQuery, jwt, selectedLocation]);

  const validate = () => {
    const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }
  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Email is invalid";
  }
  if (!formData.placeId.trim()) {
    newErrors.placeId = "Location is required";
  }
  if (!formData.profileCreatedBy) {
    newErrors.profileCreatedBy = "Relationship is required";
  }
  if (!formData.gender) {
    newErrors.gender = "Gender is required";
  }
  if (!formData.dateOfBirth) {
    newErrors.dateOfBirth = "Date of Birth is required";
  } else {
    const age = calculateAge(formData.dateOfBirth);
    if (formData.gender === "MALE" && (age < 21 || age > 70)) {
      newErrors.dateOfBirth = "Age must be between 21 and 70 for males";
    } else if (formData.gender === "FEMALE" && (age < 18 || age > 60)) {
      newErrors.dateOfBirth = "Age must be between 18 and 60 for females";
    } else if (formData.gender === "OTHER" && (age < 18 || age > 70)) {
      newErrors.dateOfBirth = "Age must be between 18 and 70 for others";
    }
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    const isValidDate = !isNaN(Date.parse(date));
  
    if (isValidDate) {
      const formattedDate = new Date(date).toISOString();
      setFormData((prevData) => ({
        ...prevData,
        dateOfBirth: formattedDate,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        dateOfBirth: null,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        dateOfBirth: "Please select a valid date.",
      }));
    }
  };
  
  

  const handleRelationshipChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      profileCreatedBy: value.toUpperCase(),
    }));
    setActiveButton(value);
  };

  const handleLocationQueryChange = (e) => {
    setLocationQuery(e.target.value);
    setSelectedLocation("");
  };

  const handleLocationSelect = (location) => {
    setFormData((prevData) => ({
      ...prevData,
      placeId: location.placeId,
    }));
    setSelectedLocation(location.name);
    setLocationQuery(location.name); 
    setShowDropdown(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if(validate()){
        const isValid = await validateJwt();
        if(isValid){
          const response = await dispatch(sendUserData({ userData: formData, jwt }));

         
            if(sendUserData.fulfilled.match(response)){
              if(response.payload === "Email already exists!"){
                setEmailError(response.payload)
                console.log("email already exist block")
              }
              else{
                nextPage()
                localStorage.setItem('isBasicRegistrationCompleted', true);
              }
            }
            else{
              console.log('do not get any response from server')
            }
        

        }else{
          localStorage.clear();
          setJwt(null);
          console.error("JWT is not valid");
        }
      }
      
    } catch (error) {
      console.log(error)
    }



    // if (validate()) {
    //   const isValid = await validateJwt();
    //   if (isValid) {
    //    const responce = await dispatch(sendUserData({ userData: formData, jwt }));

    //    console.log('registration one', responce.payload)
    //     nextPage()
    //     //localStorage.setItem('isBasicRegistrationCompleted', true);
    //     setActiveButton("");
    //   } else {
    //     localStorage.clear();
    //     setJwt(null);
    //     console.error("JWT is not valid");
    //   }
    // }
  };

  return (
    <div className="">
      <div className="registration-containerone">
        <div className="content-wrapperone">
          <div className="image-sectionone">
            <img
              src={Registeril}
              alt="Wedding Illustration"
              className="wedding-imageone"
            />
          </div>
          <div className="title-outsideone">
            <h1
              style={{
                fontSize: "65px",
                marginLeft: "65px",
                marginBottom: "10px",
                marginTop: "100px",
              }}>
              Register
            </h1>
            <div className="form-sectionone">
            <p className="stepone">Step 1/4</p>
            <div className=" ">
              <h1 className="title-innerone">Please Fill in Details</h1>
                <div className="containerone">
                  <div className="form-containerone">
                    <form onSubmit={handleSubmit}>
                      <div className="form-groupone">
                          <label htmlFor="relationship">
                             For whom are you looking for a partner?
                          </label>
                        <div className="input-relation" >
                          <button
                            type="button"
                            className={`header-btnone ${activeButton === "SELF" ? "active" : ""}`}
                            onClick={() => handleRelationshipChange("SELF")}>
                            Myself
                          </button>
                          <button
                            type="button"
                            className={`header-btnone ${activeButton === "PARENT" ? "active" : ""}`}
                            onClick={() => handleRelationshipChange("PARENT")}>
                            As a Parent
                          </button>
                          <button
                            type="button"
                            className={`header-btnone ${activeButton === "FRIEND" ? "active" : ""}`}
                            onClick={() => handleRelationshipChange("FRIEND")}>
                            As a Friend
                          </button>
                          <button
                            type="button"
                            className={`header-btnone ${activeButton === "RELATIVE" ? "active" : ""}`}
                            onClick={() =>
                              handleRelationshipChange("RELATIVE")
                            }>
                            As a Relative
                          </button>
                        </div>
                        {errors.profileCreatedBy && (
                          <p className="error">{errors.profileCreatedBy}</p>
                        )}
                      </div>
                      <div className="input-fieldone">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Name"
                          style={{
                            display: "flex",
                            width: "353px",
                            padding: "8px",
                            alignItems: "center",
                            borderRadius: "12px",
                            border: "1.9999999px solid #000",
                            boxShadow: "0px 0px 4px 0px #fff",
                            marginBottom: "20px",
                        }}                          
                        />
                      </div>
                      {errors.name && <p className="error">{errors.name}</p>}
                      <div className="">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          style={{
                            display: "flex",
                            width: "353px",
                            padding: "8px",
                            alignItems: "center",
                            borderRadius: "12px",
                            border: "1.9999999px solid #000",
                            boxShadow: "0px 0px 4px 0px #fff",
                            marginBottom: "20px",
                        }}
                        />
                      </div>
                      {emailError && <p className="error">{emailError}</p>}
                      {errors.email && <p className="error">{errors.email}</p>}
                      <div className="">
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={locationQuery}
                        onChange={handleLocationQueryChange}
                        placeholder="Location"
                        autoComplete="off"
                        className="input-box"
                      />
                      {showDropdown && (
                        <div className="location-dropdown">
                          {locations.map((location) => (
                            <div
                              key={location.placeId}
                              className="dropdown-item"
                              onClick={() => handleLocationSelect(location)}
                            >
                              {location.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {errors.placeId && <p className="error">{errors.placeId}</p>}


                      <div className="">
                      <input
                        type="date"
                        htmlFor="dateOfBirth"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth ? formData.dateOfBirth.split("T")[0] : ""}
                        onChange={handleDateChange}
                        max={new Date().toISOString().split("T")[0]} 
                        placeholder="Date of Birth"
                        style={{
                          width: "353px",
                          padding: "8px",
                          alignItems: "center",
                          borderRadius: "11px",
                          border: "1.9999999px solid #000",
                          boxShadow: "0px 0px 4px 0px #fff",
                          marginBottom: "20px",
                        }}
                      />


                      </div>
                      {errors.dateOfBirth && (
                        <p className="error">{errors.dateOfBirth}</p>
                      )}
                      <div className="">
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          style={{
                            display: "flex",
                            width: "353px",
                            padding: "12px",
                            alignItems: "center",
                            borderRadius: "12px",
                            border: "1.9999999px solid #000",
                            boxShadow: "0px 0px 4px 0px #fff",
                            marginBottom: "20px",
                        }}
                          >
                          <option value="">Select gender</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                          <option value="OTHER">Other</option>
                        </select>
                      </div>
                      {errors.gender && (
                        <p className="error">{errors.gender}</p>
                      )}
                      <div className="button-wrapper">
                      <button type="submit" className="submit-buttonone">
                        
                        Next
  
                        </button>
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
  );
};

export default RegistrationOne;
