import React, { useState } from 'react';
import './assets/filters.css'; // Custom CSS file

const Filter = () => {
  const [filters, setFilters] = useState({
    height: '',
    age: '',
    maritalStatus: '',
    profileCreatedBy: '',
    photoPrivacy: '',
    religion: '',
    community: '',
    subCommunity: '',
    motherTongue: '',
    familyStatus: '',
    manglik: '',
    kundaliDosham: '',
    locationBelongsFrom: '',
    locationCurrent: '',
    highestQualification: '',
    collegeCategory: '',
    employmentType: '',
    role: '',
    annualIncome: '',
    dietPreferences: '',
    smokingHabit: '',
    drinkingHabit: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  return (
    <div className="filter-container">
      <div className="filter-sidebar">
        <h2>Preference filter</h2>
        <div className="filter-group">
          <label>Height</label>
          <select name="height" value={filters.height} onChange={handleInputChange}>
            {/* Add options here */}
          </select>
          <label>Height</label>
          <select name="height" value={filters.height} onChange={handleInputChange}>
            {/* Add options here */}
          </select>
          <label>Height</label>
          <select name="height" value={filters.height} onChange={handleInputChange}>
            {/* Add options here */}
          </select>
          <label>Height</label>
          <select name="height" value={filters.height} onChange={handleInputChange}>
            {/* Add options here */}
          </select>
          <label>Height</label>
          <select name="height" value={filters.height} onChange={handleInputChange}>
            {/* Add options here */}
          </select>
        </div>
        {/* Repeat similar blocks for each filter category */}
        <button className="filter-search-btn">Search</button>
      </div>
      <div className="results-section">
        <h2>Showing results</h2>
        <div className="results-grid">
          {/* Mock data for profiles */}
          {[...Array(12)].map((_, index) => (
            <div key={index} className="profile-card">
              <img src={`https://via.placeholder.com/150`} alt="Profile" />
              <div className="profile-info">
                <h3>Anjali S., 26, 5'5"</h3>
                <p>Religion, Community, Education</p>
                <p>Role, Job title, Location</p>
                <button className="connect-btn">Connect</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
