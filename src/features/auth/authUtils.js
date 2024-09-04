import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const isLoggedIn = async () => {
  const jwt = localStorage.getItem("jwt");

  if (!jwt) {
    return false;
  }

  const isValid = await validateJwt();
  if (!isValid) {
    localStorage.removeItem("jwt");
    localStorage.removeItem("isNewUser");
    return false;
  }

  return true;
};

export const validateJwt = async () => {
  try {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) return false;

    const response = await axios.get(`${API_URL}/auth/isAuthenticated`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return response.data.data.isValidToken;
  } catch (error) {
    return false;
  }
};

export const fetchLocations = async (query, jwt) => {
  try {
    const isValid = await validateJwt();
    if (!isValid) {
      localStorage.clear();
      return [];
    }

    console.log(query);

    const response = await axios.get(
      `${API_URL}/home/placeSuggestion?q=${query}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
};
