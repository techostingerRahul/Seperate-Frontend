import React, { useState, useEffect, useRef } from "react";
import banner from "./assets/Rectanglesa.svg";
import "./assets/bann.css";
import Welcomepopup from "./Welcomepopup";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchLocations, validateJwt } from "../auth/authUtils";
 
const HomeBannerSearch = () => {
  // State for Each Select
  const [lookingFor, setLookingFor] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [profession, setProfession] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const lastlocation = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const locationInputRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [locationQuery, setLocationQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [jwt, setJwt] = useState(localStorage.getItem("jwt"));
 
 
 
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
 
 
 
 
 
 
  const handleLocationQueryChange = (e) => {
    const newQuery = e.target.value;
    setLocationQuery(newQuery);
    setSelectedLocation("");
 
    if (newQuery === "") {  
        setShowDropdown(false);
    } else {
        setShowDropdown(true);
        setFocusedIndex(-1);
    }
};
 
  const handleLocationSelect = (location) => {
    setSelectedLocation({ name: location.name, placeId: location.placeId });
    setLocationQuery(location.name);
    setShowDropdown(false);
  };
 
 
 
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
     
      setFocusedIndex((prevIndex) =>
        prevIndex < locations.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
     
      setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else if (e.key === "Enter" && focusedIndex >= 0) {
     
      handleLocationSelect(locations[focusedIndex]);
      e.preventDefault();
    }
  };
 
  useEffect(() => {
   
    if (focusedIndex >= 0 && dropdownRef.current) {
      const focusedItem = dropdownRef.current.children[focusedIndex];
      if (focusedItem) {
        focusedItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [focusedIndex]);
 
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !locationInputRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };
 
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
 
 
 
  // Handle Input Changes
  const handleLookingForChange = (e) => {
    setLookingFor(e.target.value);
  };
 
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
 
 
  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };
 
  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };
 
  const showPopup = () => {
    setIsPopupOpen(true);
  };
 
  const closePopup = () => {
    setIsPopupOpen(false);
    navigate(lastlocation.pathname, { replace: true });
  };
 
  // Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
 
    if (lookingFor) {
        formData.lookingFor = lookingFor;
    }
    if (age) {
      const [minAge, maxAge] = age.split('-');
      formData.minAge = minAge;
      formData.maxAge = maxAge || '';
    }
    if (selectedLocation) {
      formData.currPlaceId = selectedLocation.placeId;
    }
    if (education) {
        formData.eduQual = education;
    }
    if (profession) {
        formData.profession = profession;
    }
 
    // Debug: Check the formData object
    console.log('Form data to be sent:', formData);
    const queryString = new URLSearchParams(formData).toString();
    navigate(`/searchuser?${queryString}`);
  };
 
  // useEffect to show popup after successful registration
  useEffect(() => {
 
    const previousRoute = lastlocation?.state?.from;
 
   
    if (previousRoute === '/authform') {
      showPopup();
    }
 
 
    // Check if the user is registered (replace with your actual logic)
    // if (localStorage.getItem("registrationSuccessful") === "true") {
    //   showPopup();
    //   // Remove the flag after showing the popup once
    //   localStorage.removeItem("registrationSuccessful");
    // }
  }, [lastlocation]); // Run only on mount
 
  return (
    <section className="banner-section">
      <img src={banner} className="banner-image" alt="banner" />
      <div className="banner-content">
        <h1 className="banner-title">Find the perfect connection for you</h1>
        <p className="banner-subtitle">Add your partner preferences</p>
 
        <div className="search-form-before">
          <div className="search-form">
            <form onSubmit={handleSubmit} className="custom-flex">
              <select
                id="looking-for"
                value={lookingFor}
                onChange={handleLookingForChange}
                className="form-select"
                aria-label="Looking For"
               
              >
                <option value="" >Looking for</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="others">Others</option>
              </select>
 
              <select
                id="age"
                value={age}
                onChange={handleAgeChange}
                className="form-select"
                aria-label="Age"
               
              >
                <option value="">Age</option>
                <option value="18-21">18-21</option>
                <option value="22-26">22-26</option>
                <option value="27-31">27-31</option>
                <option value="32-36">32-36</option>
                <option value="37-41">37-41</option>
                <option value="42-46">42-46</option>
                <option value="47-51">47-51</option>
                <option value="52+">52+</option>
              </select>
 
              <div className="location-wrapper">
              <input
                  type="text"
                  id="location"
                  name="location"
                  value={locationQuery}
                  onChange={handleLocationQueryChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Location"
                  autoComplete="off"
                  className="form-select"
                  style={{
                    padding: "10px",
                  }}
                  ref={locationInputRef}
                />
                {showDropdown && (
                  <div
                    className="locationdropdown"
                    ref={dropdownRef}
                    style={{
                      position: "absolute",
                      marginTop: "20px",
                    }}
                  >
                    {locations.map((location, index) => (
                      <div
                        key={location.placeId}
                        className={`dropdownitem ${
                          index === focusedIndex ? "focused" : "unfocused"
                        }`}
                        onClick={() => handleLocationSelect(location)}
                      >
                        {location.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
 
              <select
                id="education"
                value={education}
                onChange={handleEducationChange}
                className="form-select"
                aria-label="Education"
               
              >
                <option value="">Education</option>
                <option value="high-school">High School</option>
                <option value="bachelor">Bachelor's</option>
                <option value="master">Master's</option>
                <option value="phd">PhD</option>
                <option value="any">Any</option>
              </select>
 
              <select
                id="profession"
                value={profession}
                onChange={handleProfessionChange}
                className="form-select"
                aria-label="Profession"
               
              >
                <option value="">Profession</option>
                <option value="accountant">Accountant</option>
                <option value="financial_analyst">Financial Analyst</option>
                <option value="financial_advisor">Financial Advisor</option>
                <option value="marketing_professional">
                  Marketing Professional
                </option>
                <option value="hr_specialist">Human Resources Specialist</option>
                <option value="entrepreneur">Entrepreneur</option>
                <option value="business_owner">Business Owner</option>
                <option value="athlete">Athlete</option>
                <option value="coach">Coach</option>
                <option value="trainer">Trainer</option>
                <option value="fitness_instructor">Fitness Instructor</option>
                <option value="military_personnel">Military Personnel</option>
                <option value="police_officer">Police Officer</option>
                <option value="private_security">
                  Private Security Personnel
                </option>
                <option value="farmer">Farmer</option>
                <option value="agricultural_worker">Agricultural Worker</option>
                <option value="forester">Forester</option>
                <option value="wildlife_conservationist">
                  Wildlife Conservationist
                </option>
                <option value="pilot">Pilot</option>
                <option value="air_traffic_controller">
                  Air Traffic Controller
                </option>
                <option value="truck_driver">Truck Driver</option>
                <option value="marine_engineer">Marine Engineer</option>
                <option value="deck_officer">Deck Officer</option>
                <option value="hospitality_professional">
                  Hospitality Professional
                </option>
                <option value="retail_worker">Retail Worker</option>
                <option value="customer_service_representative">
                  Customer Service Representative
                </option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="carpenter">Carpenter</option>
                <option value="mason">Mason</option>
                <option value="construction_worker">Construction Worker</option>
                <option value="artist">Artist</option>
                <option value="musician">Musician</option>
                <option value="composer">Composer</option>
                <option value="actor">Actor</option>
                <option value="performer">Performer</option>
                <option value="writer">Writer</option>
                <option value="author">Author</option>
                <option value="film_production">Film Production Crew</option>
                <option value="television_production">
                  Television Production Crew
                </option>
                <option value="researcher">Researcher</option>
                <option value="biologist">Biologist</option>
                <option value="chemist">Chemist</option>
                <option value="laboratory_technician">
                  Laboratory Technician
                </option>
                <option value="environmental_scientist">
                  Environmental Scientist
                </option>
                <option value="lawyer">Lawyer</option>
                <option value="attorney">Attorney</option>
                <option value="judge">Judge</option>
                <option value="paralegal">Paralegal</option>
                <option value="legal_secretary">Legal Secretary</option>
                <option value="teacher">Teacher</option>
                <option value="educational_administrator">
                  Educational Administrator
                </option>
                <option value="librarian">Librarian</option>
                <option value="software_engineer">Software Engineer</option>
                <option value="hardware_engineer">Hardware Engineer</option>
                <option value="it_professional">IT Professional</option>
                <option value="data_scientist">Data Scientist</option>
                <option value="data_analyst">Data Analyst</option>
                <option value="web_developer">Web Developer</option>
                <option value="web_designer">Web Designer</option>
               
              </select>
 
              <button type="submit" className="submit-button">
                Find
              </button>
            </form>
          </div>
        </div>
        {/* Popup for successful registration */}
        {isPopupOpen && (
          <Welcomepopup closePopup = {closePopup} />
        )}
      </div>
    </section>
  );
};
 
export default HomeBannerSearch;
 