import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendOtp,
  verifyOtp,
  selectisBasicRegistrationCompleted,
  selectJwt,
  selectAuthLoading,
  selectAuthError,
} from "../user_listSlice";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "flag-icon-css/css/flag-icons.min.css";
import Registeril from "./assets/Register_illustration.svg";
import "../components/assets/Login.css";
import Loader from "../../../components/Loading";
import { validateJwt } from "../authUtils";

const AuthRegistrationComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("in");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [finalLoading, setFinalLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isBasicRegistrationCompleted = useSelector(
    selectisBasicRegistrationCompleted
  );
  const jwt = useSelector(selectJwt);
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const inputRefs = useRef([]);

  useEffect(() => {
    (async () => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        console.log("JWT FOUND");
        if (await validateJwt()) {
          console.log("JWT VALID");

          // return <Navigate to="/" replace={true}></Navigate>;

          navigate("/", { replace: true });
        } else {
          console.log("JWT INVALID");
          localStorage.clear();
        }
      }
    })();
  }, [navigate]);

  useEffect(() => {
    if (isBasicRegistrationCompleted !== null && jwt) {
      localStorage.setItem("jwt", jwt);
      localStorage.setItem(
        "isBasicRegistrationCompleted",
        isBasicRegistrationCompleted
      );
      setTimer(0);
      setFinalLoading(true);
      setTimeout(() => {
        setFinalLoading(false);
        (async () => {
          const jwt = localStorage.getItem("jwt");
          const isBasicRegistrationCompleted = localStorage.getItem(
            "isBasicRegistrationCompleted"
          );
          if (jwt) {
            console.log("JWT FOUND");
            if (await validateJwt()) {
              console.log("JWT VALID");
              // return <Navigate to="/" replace={true}></Navigate>;
              // navigate("/", { replace: true });
              if (isBasicRegistrationCompleted === "true") {
                console.log("already submitted the basic info value");
                return navigate("/", { replace: true });
              } else {
                console.log("basic info not submitted now submit");
                return navigate("/authform", { replace: true });
              }
            } else {
              console.log("JWT INVALID");
              localStorage.clear();
            }
          }
        })();
        //navigate("/dashboard");
      }, 1000);
    }
  }, [isBasicRegistrationCompleted, jwt, navigate]);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendOtp = () => {
    if (!phoneNumber || phoneNumber.length < 12) {
      setPhoneError("Please enter a valid phone number");
      return;
    }
    setPhoneError("");
    setLoadingScreen(true);
    setTimeout(() => {
      dispatch(sendOtp({ phoneNumber: phoneNumber.slice(-10), countryCode }));
      setTimer(30);
      setShowOtpInput(true);
      setLoadingScreen(false);
    }, 2000);
  };

  const handleOtpChange = (index, event) => {
    const { value } = event.target;
    if (isNaN(value) || value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      dispatch(
        verifyOtp({
          phoneNumber: phoneNumber.slice(-10),
          otp: newOtp.join(""),
          countryCode,
        })
      )
        .unwrap()
        .then(() => {
          setFinalLoading(true);
          setTimeout(() => {
            setFinalLoading(false);
          }, 1000);
        })
        .catch((error) => {
          setOtpError(error.msg);
        });
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      }
    }
  };

  const handleResendOtp = (e) => {
    e.preventDefault();
    setOtp(["", "", "", ""]);
    handleSendOtp();
  };

  // const errorMessage =
  //   typeof error === "object" ? JSON.stringify(error) : error.msg;

  useEffect(() => {
    if (showOtpInput && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [showOtpInput]);

  return (
    <div className="registration-containerlogin">
      {(loadingScreen || finalLoading) && <Loader />}
      <div className="content-wrapperlogin">
        <div className="image-sectionlogin">
          <img
            src={Registeril}
            alt="Wedding Illustration"
            className="wedding-imagelogin"
          />
        </div>
        <div>
          <h1
            className="title-outsidelogin"
            style={{
              fontSize: "55px",
              marginBottom: "30px",
              fontFamily: "Merriweather",
            }}>
            Register
          </h1>
          <div className="form-sectionlogin" style={{ marginBottom: "180px" }}>
            <div className="form-wrapperlogin">
              <h1 className="title-innerlogin" >
                Let’s start with mobile number
              </h1>
              <div className="registration-formlogin">
                <div className="phone-input">
                  <PhoneInput
                    country={"in"}
                    value={phoneNumber}
                    onChange={(value, country) => {
                      setPhoneNumber(value);
                      setCountryCode(country.countryCode.toUpperCase());
                    }}
                    inputClass="custom-phone-input"
                    containerStyle={{
                      width: '100%',
                      height: 52,
                      borderRadius: 5,
                      borderColor: '#d1d5db',
                      borderWidth: "1px",
                      borderStyle: 'solid',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                    inputStyle={{
                      fontSize: 18,
                      padding: 24.8,
                      borderRadius: 5,
                      width: '100%',
                      borderColor: 'gray',
                      paddingLeft: 40,
                      boxShadow: 'none',
                      backgroundColor: '#f9fafb',
                    }}
                    dropdownStyle={{
                      borderRadius: 20,
                    }}

                    
                  />
                  {phoneError && (
                    <div className="" style={{ color: " #ab1d79" }}>
                      {phoneError}
                    </div>
                  )}
                  {showOtpInput && (
                    <div className="otp-fieldslogin ">
                      <div className="otp-fieldslogin">
                        <p className="para"> Please Enter your OTP</p>

                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="shadow appearance-none border rounded w-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
                            maxLength="1"
                          />
                        ))}
                      </div>
                      <div>
                        <p className="para">
                          Resend OTP in{" "}
                          <span className="font-semibold">{timer}</span> seconds
                        </p>
                      </div>
                      {otpError && (
                        <div className="text-red-500 text-xs text-Merriweather">
                          {otpError}
                        </div>
                      )}
                    </div>
                  )}
                  {/* {errorMessage && (
                    <div className="text-red-500 text-xs text-Merriweather mt-2">
                      {errorMessage}
                    </div>
                  )} */}
                  {!showOtpInput ? (
                    <button
                      onClick={handleSendOtp}
                      className="submit-buttonlogin"
                      disabled={loading}>
                      Continue
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      onClick={handleResendOtp}
                      className={`text-pink-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${timer > 0 || loading ? "opacity-50 cursor-not-allowed" : ""}`}
                      style={{
                        pointerEvents: timer > 0 || loading ? "none" : "auto",
                      }}>
                      Resend OTP
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRegistrationComponent;
