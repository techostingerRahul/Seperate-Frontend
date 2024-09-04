import React from "react";
import Navbar from "../features/navbar/Navbar";
import SEO from "../seohelper/Helmet";
import Userprofile from "../features/viewuserprofile/Userprofile";
import Footer from "../features/footer/Foter";
import { useLocation } from 'react-router-dom';

const  UserProfilePage= () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  return (
    <>
      <SEO
        title="UserProfile-SecondHalf"
        description="RUserProfile-P2-SecondHalf"
        keywords="UserProfile"
      />
      <Navbar>
        <Userprofile id={id}/>
      </Navbar>
      <Footer/>
    </>
  );
};

export default UserProfilePage;
