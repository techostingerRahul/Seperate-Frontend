import axios from "axios";
import apiClient from "../commonClientsetup/apiClient";

const API_URL = process.env.REACT_APP_API_URL;

export const sendOtpApi = async (phoneNumber, countryCode) => {
  try {
    console.log(phoneNumber, countryCode);
    console.log("sendOtpApi con");
    console.log(countryCode);
    const response = await axios.post(
      `${API_URL}/auth/generateOtp`,{
        phoneNumber,
        countryCode,
      }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const verifyOtpApi = async (phoneNumber, countryCode, otp) => {
  try {
    const response = await axios.post(`${API_URL}/auth/verifyOtp`, {
      phoneNumber,
      countryCode,
      otp,
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
};

export const UserLoginfoApi = async () => {
  try {
    console.log("getting jwt to fetch the user data");
    const response = await apiClient.get(`${API_URL}/user/details`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const sendUserDataApi = async (userData, jwt) => {
  try {
    console.log("api file", { userData, jwt });
    console.log(userData);

    const data = {
      name: userData.name,
      email: userData.email,
      placeId: userData.placeId,
      dateOfBirth: userData.dateOfBirth,
      gender: userData.gender,
      profileCreatedBy: userData.profileCreatedBy,
    };  
    console.log(data)
    const response = await axios.post(`${API_URL}/user/basic`, data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
    console.log("PRinting registration resposne");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    console.log(error.response.data.msg);
    return error?.response?.data?.msg || { message: "Network error" };
  }
};


export const sendAdditionalUserDataApi = async (userData, jwt) => {
  try {
    const data  = {
      height: userData.height === "" ? null : userData.height,
      maritalStatus:userData.maritalStatus === "" ? null : userData.maritalStatus,
      religion: userData.religion === ""? null:userData.religion,
      caste:userData.caste === ""? null: userData.caste,
      openToAllCastes:userData.openToAllCastes ===""? null:userData.openToAllCastes
    }
    console.log("api file before basic post api call", { data, jwt });
    console.log(userData);
    const response = await axios.post(`${API_URL}/user/personal`, data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Printing personal data resposne");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};


export const sendUserEmployementDataApi = async (userData, jwt) => {
  try {
    const data  = {
      employmentType: userData.employmentType === "" ? null : userData.employmentType,
      employerName:userData.employerName === "" ? null : userData.employerName,
      jobTitle: userData.jobTitle === ""? null:userData.jobTitle,
      minAnnualIncome:userData.minAnnualIncome,
      maxAnnualIncome:userData.maxAnnualIncome
    }

    console.log(data)
    console.log("api file before employement post api call", { data, jwt });
    console.log(userData);
    const response = await axios.post(`${API_URL}/user/employement`, data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Printing personal data resposne");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};
