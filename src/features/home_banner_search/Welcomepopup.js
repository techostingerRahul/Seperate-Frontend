import React from 'react'
import process from "./assets/process.svg";
import match from "./assets/match.svg";
import vermob from "./assets/vermob.svg";
import { useSelector } from 'react-redux';
import { selectUserLogInfo } from '../auth/user_listSlice';


const Welcomepopup = ({closePopup}) => {

    const loginUser = useSelector(selectUserLogInfo) || localStorage.getItem("userLogInfo")


    const capitalizeFirstLetter = (string) => {
      if (!string) return ''; // Return an empty string if the input is null or undefined
      return string.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    const cross = (e)=>{
        closePopup()
    }

  return (
    <div className="registration-popup">
            <div className="popup-content">
              <span className="close-button" onClick={(e)=>cross(e)}>
                &times;
              </span>
              <h2 className="wel">Welcome {capitalizeFirstLetter(loginUser?.name)}!</h2>
              <p className="inital">
                Your initial level of registration is done successfully.
              </p>
              <div className="left">
                <ul>
                  <li>
                    <div className=" flex justify-start items-center">
                      <span className="p-2">
                        <img src={process} alt="banner" />
                      </span>
                      <span className="text">
                        Complete your profile so she can know you better
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className=" flex justify-start items-center">
                      <span>
                        <img src={match} alt="banner" className="p-2" />
                      </span>
                      <span className="text">
                        Start your journey of searching partner
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span className="p-3">
                        <img src={vermob} alt="banner" />
                      </span>
                      <h3 className="text">
                        Explore profiles which are verified by mobile number
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <button className="explore-button" onClick={cross}>Explore</button>
            </div>
          </div>
  )
}

export default Welcomepopup
