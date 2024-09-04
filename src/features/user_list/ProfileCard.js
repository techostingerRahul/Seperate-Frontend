import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({
    name,
    age,
    height,
    location,
    languages,
    profession,
    image,
}) => {
    return (
        <div className="maincontainer">
            <div className="profile-card">
                <div className="image-container">
                    <img src={image} alt={`${name}`} className="profile-image" />
                    <div className="ad-badge">Ad</div>
                </div>
                <div className="profile-details">
                    <h3>
                        {name} · {age} · {height}
                    </h3>
                    <p>{location}</p>
                    <p>{languages}</p>
                    <p>{profession}</p>
                </div>
                <button className="connect-button">
                    Connect
                    <span className="checkmark">✔️</span>
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
