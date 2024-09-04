import React from "react";
import AuthFooter from "../features/footer/AuthFooter";
import RegistrationOne from "../features/auth/components/RegistrationOne";
import Navbar from "../features/navbar/Navbar";
import SEO from "../seohelper/Helmet";

const RegistrationStep1 = () => {
  return (
    <>
      <SEO
        title="RegisterForm-SecondHalf"
        description="RegisterForm-P1-SecondHalf"
        keywords="RegisterForm"
      />
      <Navbar>
        <RegistrationOne />
      </Navbar>
      <AuthFooter />
    </>
  );
};

export default RegistrationStep1;
