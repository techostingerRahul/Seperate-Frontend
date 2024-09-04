import React from "react";
import AuthFooter from "../features/footer/AuthFooter";
import Navbar from "../features/navbar/Navbar";
import SEO from "../seohelper/Helmet";
import RegistrationMultiPageForm from "../features/auth/components/RegistrationMultiPageForm";

const RegistrationForms = () => {
  return (
    <>
      <SEO
        title="Register-SecondHalf"
        description="RegisterForm-SecondHalf"
        keywords="RegisterForm"
      />
      <Navbar>
        <RegistrationMultiPageForm/>
      </Navbar>
      <AuthFooter />
    </>
  );
};

export default RegistrationForms;
