import React, { useEffect } from "react";
import Navbar from "../features/navbar/Navbar";
import Userlist from "../features/user_list/Userlist";
import Foter from "../features/footer/Foter";
import Homebannersearch from "../features/home_banner_search/Home_banner_search";
import SEO from "../seohelper/Helmet";
import Upgrade from "../features/user_list/Upgrade"
import Nearbyuser from "../features/user_list/Nearbyuser"
import Vipuser from "../features/user_list/Vipuser";
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
        <Homebannersearch />
        <Userlist />
        <Nearbyuser/>
        <Vipuser/>
        <Upgrade/>
        </div>
      <Foter />
      
    </>
  );
};

export default Home;
