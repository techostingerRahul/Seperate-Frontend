import React from "react";
import AuthFooter from "../features/footer/AuthFooter";
import SEO from "../seohelper/Helmet";
import AuthRegistrationComponent from "../features/auth/components/AuthRegisterComponent";
import AuthNav from "../features/navbar/AuthNav";

function Register() {
  return (
    <>
      <SEO
        title="Register-SecondHalf"
        description="Register-SecondHalf"
        keywords="Register"
      />
      <AuthNav />
      <AuthRegistrationComponent />
      <AuthFooter />
    </>
  );
}

export default Register;
