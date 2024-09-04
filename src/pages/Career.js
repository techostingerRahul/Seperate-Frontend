import React from "react";
import Navbar from "../features/navbar/Navbar";
import Foter from "../features/footer/Foter";
import SEO from "../seohelper/Helmet";

const Career = () => {
  return (
    <>
      <SEO
        title="Career-SecondHalf"
        description="its all about career"
        keywords="it-job,career"
      />
      <Navbar>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight  p-80 ">
          Career
        </h2>
      </Navbar>
      <Foter />
    </>
  );
};

export default Career;
