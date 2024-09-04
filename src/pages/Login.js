import React from "react";
import AuthNav from "../features/navbar/AuthNav";
import AuthFooter from "../features/footer/AuthFooter";
import AuthLoginComponent from "../features/auth/components/AuthLoginComponent";
// import Navbar from "../features/navbar/Navbar";
import SEO from "../seohelper/Helmet";

function Login() {
  return (
    <>
      <SEO
        title="Login-SecondHalf"
        description="Login-SecondHalf"
        keywords="Login"
      />
      <AuthNav/>
        <AuthLoginComponent />
      <AuthFooter />
    </>
  );
}

export default Login;
