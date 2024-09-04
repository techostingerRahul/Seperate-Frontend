import React, { useEffect } from "react";
import Navbar from "../features/navbar/Navbar";
import Foter from "../features/footer/Foter";
import SEO from "../seohelper/Helmet";
import EditProfile from "../features/edit/EditProfile";
const Home = () => {
  useEffect(() => {
    console.log('parent load from home')
    return () => {
      
    };
  }, []);
  return (
    <>
      <SEO
        title="Homepage-SecondHalf"
        description="Homepage-SecondHalf"
        keywords="home"
      />
      <Navbar/>
        <div className="main-container">
      <EditProfile/>
        </div>
      <Foter />
      
    </>
  );
};

export default Home;
