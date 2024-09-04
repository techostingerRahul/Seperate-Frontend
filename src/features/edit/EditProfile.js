import React, { useState, useRef } from "react";
import "./assets/edit.css";
import camera from "./assets/camera.svg";
import audio from "./assets/audio.svg";
import video from "./assets/video.svg";
import watch from "./assets/watch.svg";
import cont from "./assets/cont.svg";
import { selectUserLogInfo } from "../auth/user_listSlice";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const loginInfo = useSelector(selectUserLogInfo);
  const [profileImage, setProfileImage] = useState(null);
  const [profileData, setProfileData] = useState({
    fullName: "",
    gender: "",
    mobile: "",
    height: "",
    disability: "",
    dob: "",
    maritalStatus: "",
    lookingFor: "",
    about: "",
    fatherOccupation: "",
    motherOccupation: "",
    noOfSisters: "",
    noOfBrothers: "",
    familyStatus: "",
    familyAnnualIncome: "",
    familyLivesInCountry: "",
    familyLivesInState: "",
    familyLivesInCity: "",
    dateOfbirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    manglik: "",
    kundaliDosham: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    currentLocation: "",
    education: "",
    collegeName: "",
    employmentType: "",
    role: "",
    employer: "",
    annualIncome: "",
    dietPreferences: "",
    hobbies: "",
    drinkingHabit: "",
    smokingHabit: "",
  });

  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [audioFile, setAudioFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [religion, setReligion] = useState("");
  const [community, setCommunity] = useState("");
  const [subCommunity, setSubCommunity] = useState("");
  const [motherTongue, setMotherTongue] = useState("");

  // Create a ref to the file input
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedPhotos([...uploadedPhotos, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoRemove = (index) => {
    setUploadedPhotos(uploadedPhotos.filter((_, i) => i !== index));
  };

  const calculateCompletion = () => {
    const totalFields = Object.keys(profileData).length;
    const filledFields = Object.values(profileData).filter((value) => value)
      .length;
    return Math.round((filledFields / totalFields) * 100);
  };
  // Function to handle the camera click
  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleAudioChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleReligionChange = (e) => {
    setReligion(e.target.value);
  };

  const handleCommunityChange = (e) => {
    setCommunity(e.target.value);
  };

  const handleSubCommunityChange = (e) => {
    setSubCommunity(e.target.value);
  };

  const handleMotherTongueChange = (e) => {
    setMotherTongue(e.target.value);
  };

  return (
    <div className="edit-profile-container">
      <div className="profile-header">
        <div className="profile-completion">
          <span >
          <img src={cont} alt="/"/>
          <div className="completion-text">Your profile is {calculateCompletion()}% complete!!!</div>
          </span>
        </div>
        <button className="share-profile-btn">Share my profile</button>
      </div>

      <div className="profile-form">
        <div className="profile-image-container">
          <label htmlFor="upload-image" className="upload-label">
            <img
              src={profileImage || "default-profile-image-url"}
              alt=""
              className="proimage"
            />
            <input
              type="file"
              id="upload-image"
              accept="image/*"
              onChange={handleImageChange}
              className="upload-input"
              ref={fileInputRef} // Assign the ref to the input
            />
          </label>
        </div>
        <div onClick={handleCameraClick} style={{ cursor: "pointer" }}>
          <img src={camera} alt="Camera icon" className="camera" />
        </div>

        <div className="form-section">
          <div className="top-btn">
            <button className="save-btn">Save</button>
            <button className="preview-btn">Preview</button>
          </div>
          <h3 className="basic">Basics</h3>
          <div className="form-group">
            <label className="label-input" style={{ marginRight: "50px" }}>
              Name
              <input
                type="text"
                placeholder="Full name"
                name="fullName"
                value={profileData.fullName}
                onChange={handleInputChange}
                className="input-field"
                aria-label="Name"
              />
            </label>

            <label className="label-input">
              Gender
              <select
                name="gender"
                value={profileData.gender}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="">Select gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </label>
            <label className="label-input">
              Mobile No.
              <input
                type="text"
                placeholder="+91-9664176738"
                name="mobile"
                value={profileData.mobile}
                onChange={handleInputChange}
                className="input-field"
              />
            </label>
            <label className="label-input">
              Email
              <input
                type="email"
                placeholder="anand@hostinger.com"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                className="input-field"
              />
            </label>
            <label className="label-input">
              Heigh
              <select
                name="height"
                value={profileData.height}
                onChange={handleInputChange}
                className="input-field"
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
            </label>
            <label className="label-input">
              {" "}
              Disability
              <select
                name="disability"
                value={profileData.disability}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="None">None</option>
                {/* Add more options as needed */}
              </select>
            </label>
            <label className="label-input">
              D.O.B
              <input
                type="date"
                name="dob"
                value={profileData.dob}
                onChange={handleInputChange}
                className="input-field"
              />
            </label>
            <label className="label-input">
              MaritalStatus
              <select
                name="maritalStatus"
                value={profileData.maritalStatus}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="Never married">Never married</option>
                {/* Add more options as needed */}
              </select>
            </label>
          </div>

          <h4 className="partner-preference-header">
            For whom are you looking for a partner?
          </h4>
          <div className="partner-preference">
            <button
              className={`preference-btn ${
                profileData.lookingFor === "Myself" ? "active" : ""
              }`}
              onClick={() =>
                setProfileData({ ...profileData, lookingFor: "Myself" })
              }
            >
              Myself
            </button>
            <button
              className={`preference-btn ${
                profileData.lookingFor === "As a parent" ? "active" : ""
              }`}
              onClick={() =>
                setProfileData({ ...profileData, lookingFor: "As a parent" })
              }
            >
              As a parent
            </button>
            <button
              className={`preference-btn ${
                profileData.lookingFor === "As a relative" ? "active" : ""
              }`}
              onClick={() =>
                setProfileData({ ...profileData, lookingFor: "As a relative" })
              }
            >
              As a relative
            </button>
            <button
              className={`preference-btn ${
                profileData.lookingFor === "As a friend" ? "active" : ""
              }`}
              onClick={() =>
                setProfileData({ ...profileData, lookingFor: "As a friend" })
              }
            >
              As a friend
            </button>
          </div>
        </div>

        <div className="about-section">
          <h3 className="basic">About</h3>
          <textarea
            placeholder="write about yourself..."
            name="about"
            value={profileData.about}
            onChange={handleInputChange}
            className="input-about"
          ></textarea>
        </div>

        <div className="photos-section">
          <h3 className="Add">Add more photos of you</h3>
          <div className="photos-container">
            {uploadedPhotos.map((photo, index) => (
              <div className="photo-item" key={index}>
                <img src={photo} alt="/" />
                <button
                  className="remove-photo-btn"
                  onClick={() => handlePhotoRemove(index)}
                >
                  ×
                </button>
              </div>
            ))}
            <div className="multi-photo-item">
              <label htmlFor="upload-photo" className="add-photo-label">
                +
                <input
                  type="file"
                  id="upload-photo"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="upload-input"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="audio-section">
          <h1 className="Audio-header">Upload a audio intro of yours</h1>
          <div className="upload-container">
            <label htmlFor="audio-upload">
              <div className="upload-icon">
                <img src={audio} alt="" />
              </div>
              <h5 className="drag">Drag and drop</h5>

              <input
                type="file"
                id="audio-upload"
                accept="audio/*"
                onChange={handleAudioChange}
                style={{ display: "none" }}
              />
              <p>or</p>
              <button
                type="button"
                className="browse-btn"
                onClick={() => document.getElementById("audio-upload").click()}
              >
                Browse
              </button>
            </label>
          </div>
        </div>

        <div className="video-section">
          <h1 className="Audio-header">Upload a video intro of yours</h1>
          <div className="video-section-container">
            <div className="upload-container-video">
              <label htmlFor="video-upload">
                <p className="required">
                  {" "}
                  Max video duration must be 2 minutes only
                </p>

                <div className="upload-icon">
                  <img src={video} alt="/" />
                </div>
                <h5 className="drag"> Drag and drop</h5>
                <input
                  type="file"
                  id="video-upload"
                  accept="video/*"
                  onChange={handleVideoChange}
                  style={{ display: "none" }}
                />
                <p>or</p>
                <button
                  type="button"
                  className="browse-btn"
                  onClick={() =>
                    document.getElementById("video-upload").click()
                  }
                >
                  Browse
                </button>
              </label>
            </div>
            <div className="video-tutorial">
              <div className="tutorial-text-wrapper">
                <img src={watch} alt="/" />
              </div>
              <div className="tutorial-video">
                <iframe
                  width="560"
                  height="315"
                  src=""
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="watch">Watch video tutorial</p>
            </div>
          </div>
        </div>

        <div className="religious-section">
          <h1 className="Audio-header">Religious background</h1>
          <div className="background-info">
            <div className="info-item">
              <label htmlFor="religion">Religion</label>
              <select
                id="religion"
                value={religion}
                onChange={handleReligionChange}
              >
                <option value="">Select Religion</option>
                <option value="hindu">Hindu</option>
                {/* Add other religions here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="community">Community</label>
              <select
                id="community"
                value={community}
                onChange={handleCommunityChange}
              >
                <option value="">Select Community</option>
                <option value="reddy">Reddy</option>
                {/* Add other communities here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="sub-community">Sub community</label>
              <select
                id="sub-community"
                value={subCommunity}
                onChange={handleSubCommunityChange}
              >
                <option value="">Select Sub Community</option>
                <option value="paknak reddy">Paknak Reddy</option>
                {/* Add other sub communities here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="mother-tongue">Mother tongue</label>
              <select
                id="mother-tongue"
                value={motherTongue}
                onChange={handleMotherTongueChange}
              >
                <option value="">Select Mother Tongue</option>
                <option value="kannada">Kannada</option>
                {/* Add other mother tongues here */}
              </select>
            </div>
          </div>
        </div>

        <div className="family-background-section">
          <h1 className="Audio-header">Family background</h1>
          <div className="family-background-info">
            <div className="info-item">
              <label htmlFor="father-occupation">Father's occupation</label>
              <select
                id="father-occupation"
                name="fatherOccupation"
                value={profileData.fatherOccupation}
                onChange={handleInputChange}
              >
                <option value="">Select Occupation</option>
                <option value="Government employee">Government employee</option>
                {/* Add other occupations here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="mother-occupation">Mother's occupation</label>
              <select
                id="mother-occupation"
                name="motherOccupation"
                value={profileData.motherOccupation}
                onChange={handleInputChange}
              >
                <option value="">Select Occupation</option>
                <option value="House wife">House wife</option>
                {/* Add other occupations here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="no-of-sisters">No. of sisters</label>
              <select
                id="no-of-sisters"
                name="noOfSisters"
                value={profileData.noOfSisters}
                onChange={handleInputChange}
              >
                <option value="">Select Number</option>
                <option value="2">2</option>
                {/* Add other numbers here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="no-of-brothers">No. of brothers</label>
              <select
                id="no-of-brothers"
                name="noOfBrothers"
                value={profileData.noOfBrothers}
                onChange={handleInputChange}
              >
                <option value="">Select Number</option>
                <option value="2">2</option>
                {/* Add other numbers here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="family-status">Family's status</label>
              <select
                id="family-status"
                name="familyStatus"
                value={profileData.familyStatus}
                onChange={handleInputChange}
              >
                <option value="">Select Status</option>
                <option value="Middle class">Middle class</option>
                {/* Add other statuses here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="family-annual-income">
                Family's annual income
              </label>
              <select
                id="family-annual-income"
                name="familyAnnualIncome"
                value={profileData.familyAnnualIncome}
                onChange={handleInputChange}
              >
                <option value="">Select Income</option>
                <option value="Middle class">Middle class</option>
                {/* Add other incomes here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="family-lives-in-country">
                Family lives in (Country)
              </label>
              <select
                id="family-lives-in-country"
                name="familyLivesInCountry"
                value={profileData.familyLivesInCountry}
                onChange={handleInputChange}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                {/* Add other countries here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="family-lives-in-state">
                Family lives in (State)
              </label>
              <select
                id="family-lives-in-state"
                name="familyLivesInState"
                value={profileData.familyLivesInState}
                onChange={handleInputChange}
              >
                <option value="">Select State</option>
                <option value="Karnataka">Karnataka</option>
                {/* Add other states here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="family-lives-in-city">
                Family lives in (City)
              </label>
              <select
                id="family-lives-in-city"
                name="familyLivesInCity"
                value={profileData.familyLivesInCity}
                onChange={handleInputChange}
              >
                <option value="">Select City</option>
                <option value="Basavakalyan">Basavakalyan</option>
                {/* Add other cities here */}
              </select>
            </div>
          </div>
        </div>

        <div className="astro-details-section">
          <h1 className="Audio-header">Astro details</h1>
          <div className="astro-details-info">
            <div className="info-item">
              <label htmlFor="date-of-birth">Date of birth</label>
              <input
                type="date"
                id="date-of-birth"
                name="dateOfbirth"
                value={profileData.dateOfbirth}
                onChange={handleInputChange}
              />
            </div>
            <div className="info-item">
              <label htmlFor="time-of-birth">Time of birth</label>
              <input
                type="time"
                id="time-of-birth"
                name="timeOfBirth"
                value={profileData.timeOfBirth}
                onChange={handleInputChange}
              />
            </div>
            <div className="info-item">
              <label htmlFor="place-of-birth">Place of birth</label>
              <select
                id="place-of-birth"
                name="placeOfBirth"
                value={profileData.placeOfBirth}
                onChange={handleInputChange}
              >
                <option value="">Select Place</option>
                <option value="Basavakalyan, Karnataka">
                  Basavakalyan, Karnataka
                </option>
                {/* Add other places here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="manglik">Manglik</label>
              <select
                id="manglik"
                name="manglik"
                value={profileData.manglik}
                onChange={handleInputChange}
              >
                <option value="">Select Manglik</option>
                <option value="Don't know">Don't know</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="kundali-dosham">Kundali dosham</label>
              <select
                id="kundali-dosham"
                name="kundaliDosham"
                value={profileData.kundaliDosham}
                onChange={handleInputChange}
              >
                <option value="">Select Dosham</option>
                <option value="Don't know">Don't know</option>
                {/* Add other options here */}
              </select>
            </div>
          </div>
        </div>

        <div className="location-section">
          <h1 className="Audio-header">Location</h1>
          <div className="location-info">
            <div className="info-item">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={profileData.country}
                onChange={handleInputChange}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                {/* Add other countries here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="state">State</label>
              <select
                id="state"
                name="state"
                value={profileData.state}
                onChange={handleInputChange}
              >
                <option value="">Select State</option>
                <option value="Karnataka">Karnataka</option>
                {/* Add other states here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="city">City</label>
              <select
                id="city"
                name="city"
                value={profileData.city}
                onChange={handleInputChange}
              >
                <option value="">Select City</option>
                <option value="Basavakalyan">Basavakalyan</option>
                {/* Add other cities here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="zip">ZIP / Pin code</label>
              <input
                type="zip"
                id="zip"
                name="zip"
                value={profileData.zip}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="info-item">
            <label htmlFor="current-location">Current location</label>
            <div className="current-location-options">
              <input
                type="checkbox"
                id="current-location"
                name="currentLocation"
                checked={profileData.currentLocation === "Same as above"}
                onChange={() =>
                  setProfileData({
                    ...profileData,
                    currentLocation: "Same as above",
                  })
                }
              />
              <label htmlFor="current-location">Same as above</label>
              <div className="location-info">
            <div className="info-item">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={profileData.country}
                onChange={handleInputChange}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                {/* Add other countries here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="state">State</label>
              <select
                id="state"
                name="state"
                value={profileData.state}
                onChange={handleInputChange}
              >
                <option value="">Select State</option>
                <option value="Karnataka">Karnataka</option>
                {/* Add other states here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="city">City</label>
              <select
                id="city"
                name="city"
                value={profileData.city}
                onChange={handleInputChange}
              >
                <option value="">Select City</option>
                <option value="Basavakalyan">Basavakalyan</option>
                {/* Add other cities here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="zip">ZIP / Pin code</label>
              <input
                type="zip"
                id="zip"
                name="zip"
                value={profileData.zip}
                onChange={handleInputChange}
              />
            </div>
          </div>
            </div>
          </div>
        </div>
        <div className="education-section">
          <h1 className="Audio-header">Education and Career</h1>
          <div className="education-and-career-info">
            <div className="info-item">
              <label htmlFor="highest-qualification">
                Highest qualification
              </label>
              <select
                id="highest-qualification"
                name="education"
                value={profileData.education}
                onChange={handleInputChange}
              >
                <option value="">Select Qualification</option>
                <option value="B.com">B.com</option>
                {/* Add other qualifications here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="college-name">College name</label>
              <select
                id="college-name"
                name="collegeName"
                value={profileData.collegeName}
                onChange={handleInputChange}
              >
                <option value="">Select College</option>
                <option value="Gulbarga university">
                  Gulbarga university
                </option>
                {/* Add other colleges here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="employment-type">Employment type</label>
              <select
                id="employment-type"
                name="employmentType"
                value={profileData.employmentType}
                onChange={handleInputChange}
              >
                <option value="">Select Type</option>
                <option value="Private company">Private company</option>
                {/* Add other types here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                value={profileData.role}
                onChange={handleInputChange}
              >
                <option value="">Select Role</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                {/* Add other roles here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="employer">Employer</label>
              <select
                id="employer"
                name="employer"
                value={profileData.employer}
                onChange={handleInputChange}
              >
                <option value="">Select Employer</option>
                <option value="Techostinger">Techostinger</option>
                {/* Add other employers here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="annual-income">Annual income</label>
              <select
                id="annual-income"
                name="annualIncome"
                value={profileData.annualIncome}
                onChange={handleInputChange}
              >
                <option value="">Select Income</option>
                <option value="18 - 20 LPA">18 - 20 LPA</option>
                {/* Add other incomes here */}
              </select>
            </div>
          </div>
        </div>
        <div className="lifestyle-section">
          <h1 className="Audio-header">Lifestyle</h1>
          <div className="lifestyle-info">
            <div className="info-item">
              <label htmlFor="diet-preferences">Diet preferences</label>
              <select
                id="diet-preferences"
                name="dietPreferences"
                value={profileData.dietPreferences}
                onChange={handleInputChange}
              >
                <option value="">Select Preferences</option>
                <option value="Occasionally non - vegetarian">
                  Occasionally non - vegetarian
                </option>
                {/* Add other preferences here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="hobbies">Hobbies</label>
              {/* <select
                id="hobbies"
                name="hobbies"
                value={profileData.hobbies}
                onChange={handleInputChange}
              >
                <option value="">Select Hobbies</option>
                <option value="Cooking, Movies, Biking">
                  Cooking, Movies, Biking
                </option>
              </select> */}
              <input 
              id="hobbies"
              name="hobbies"
              value={profileData.hobbies}
              onChange={handleInputChange}
              />
            </div>
            <div className="info-item">
              <label htmlFor="drinking-habit">Drinking habit</label>
              <select
                id="drinking-habit"
                name="drinkingHabit"
                value={profileData.drinkingHabit}
                onChange={handleInputChange}
              >
                <option value="">Select Habit</option>
                <option value="Occasionally drinker">
                  Occasionally drinker
                </option>
                {/* Add other habits here */}
              </select>
            </div>
            <div className="info-item">
              <label htmlFor="smoking-habit">Smoking habit</label>
              <select
                id="smoking-habit"
                name="smokingHabit"
                value={profileData.smokingHabit}
                onChange={handleInputChange}
              >
                <option value="">Select Habit</option>
                <option value="Non - smoker">Non - smoker</option>
                {/* Add other habits here */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;