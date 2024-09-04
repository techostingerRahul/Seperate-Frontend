import React from "react";
import Navbar from "../features/navbar/Navbar";
import Foter from "../features/footer/Foter";
import UserDashboard from "../features/auth/components/UserDashboard";
import SEO from "../seohelper/Helmet";

const UDashboard = () => {
  return (
    <>
      <SEO
        title="DashBoard-SecondHalf"
        description="DashBoard-SecondHalf"
        keywords="DashBoard"
      />
      <Navbar>
        <UserDashboard />
      </Navbar>
      <Foter />
    </>
  );
};

export default UDashboard;
