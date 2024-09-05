import React  from "react";
import Navbar from "../features/navbar/Navbar";
import Foter from "../features/footer/Foter";
import { useLocation } from 'react-router-dom';
import SEO from "../seohelper/Helmet";
import { UserSearch } from "../features/userSearch/UserSearch";

const SearchUser = () => {
  

    const location = useLocation();

    // Parse the query string into an object
    const searchParams = new URLSearchParams(location.search);
    const formData = Object.fromEntries(searchParams.entries());

  return (
    <>
      <SEO
        title="SearchUser-SecondHalf"
        description="SearchUser-SecondHalf"
        keywords="SearchUser"
      />
      <Navbar>
        <UserSearch formdata = {formData}/>
      </Navbar>  
      <Foter />
      
    </>
  );
};

export default SearchUser;
