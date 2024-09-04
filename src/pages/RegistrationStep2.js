import React from "react";
import AuthFooter from "../features/footer/AuthFooter";
import Navbar from "../features/navbar/Navbar";
import SEO from "../seohelper/Helmet";
import RegistrationTwo from "../features/auth/components/RegistrationTwo";

const RegistrationStep2 = () => {
  return (
    <>
      <SEO
        title="RegisterForm-SecondHalf"
        description="RegisterForm-P2-SecondHalf"
        keywords="RegisterForm"
      />
      <Navbar>
        <RegistrationTwo />
      </Navbar>
      <AuthFooter />
    </>
  );
};

export default RegistrationStep2;
