import React from "react";
import AuthFooter from "../features/footer/AuthFooter";
import Navbar from "../features/navbar/Navbar";
import SEO from "../seohelper/Helmet";
import RegistrationThree from "../features/auth/components/RegistrationThree";

const RegistrationStep3 = () => {
  return (
    <>
      <SEO
        title="RegisterForm-SecondHalf"
        description="RegisterForm-P2-SecondHalf"
        keywords="RegisterForm"
      />
      <Navbar>
        <RegistrationThree/>
      </Navbar>
      <AuthFooter />
    </>
  );
};

export default RegistrationStep3;
