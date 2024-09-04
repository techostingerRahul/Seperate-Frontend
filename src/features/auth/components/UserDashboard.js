// src/features/auth/components/UserDashboard.js

import React from "react";
import { useSelector } from "react-redux";
import { selectIsNewUser, selectJwt } from "../user_listSlice";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  // const isNewUser = useSelector(selectIsNewUser);
  // const jwt = useSelector(selectJwt);
  const isNewUser = localStorage.getItem("isNewUser");
  const jwt = localStorage.getItem("jwt");

  const authData = {
    isNewUser,
    jwt,
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(authData, null, 2)}</pre>
      <button>
        <Link to={"/dashboard/signuporlogin"} />
        signup
      </button>
    </div>
  );
};

export default UserDashboard;
