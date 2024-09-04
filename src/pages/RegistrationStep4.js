import React from "react";
import AuthFooter from "../features/footer/AuthFooter";
import Navbar from "../features/navbar/Navbar";
import SEO from "../seohelper/Helmet";
import RegistrationFour from "../features/auth/components/RegistrationFour";

const RegistrationStep4 = () => {
  return (
    <>
      <SEO
        title="RegisterForm-SecondHalf"
        description="RegisterForm-P2-SecondHalf"
        keywords="RegisterForm"
      />
      <Navbar>
        <RegistrationFour/>
      </Navbar>
      <AuthFooter />
    </>
  );
};

export default RegistrationStep4;
