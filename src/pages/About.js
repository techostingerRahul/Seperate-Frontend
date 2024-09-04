import React from "react";
import Navbar from "../features/navbar/Navbar";
import Foter from "../features/footer/Foter";
import SEO from "../seohelper/Helmet";

const About = () => {
  return (
    <>
      <SEO
        title="About us-SecondHalf"
        description="its all about secondHalf"
        keywords="secondHalf"
      />
      <Navbar>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight   ">
          About Us
        </h2>

        <p class="mb-3 text-gray-500 dark:text-gray-400">
          Track work across the enterprise through an open, collaborative
          platform. Link issues across Jira and ingest data from other software
          development tools, so your IT support and operations teams have richer
          contextual information to rapidly respond to requests, incidents, and
          changes.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.Accelerate critical development work,
          eliminate toil, and deploy changes with ease, with a complete audit
          trail for every change.
        </p>
      </Navbar>

      <Foter />
    </>
  );
};

export default About;
