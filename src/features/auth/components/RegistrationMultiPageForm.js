import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationOne from './registrationForms/RegistrationOne';
import RegistrationTwo from './registrationForms/RegistrationTwo';
import RegistrationThree from './registrationForms/RegistrationThree';
import RegistrationFour from './registrationForms/RegistrationFour';

const RegistrationMultiPageForm = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const skip = () => navigate('/', { state: { from: '/authform' } });
  const submitAndRedirect = () => navigate('/', { state: { from: '/authform' } });

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <RegistrationOne nextPage={nextPage} />;
      case 2:
        return <RegistrationTwo nextPage={nextPage} skip={skip} />;
      case 3:
        return <RegistrationThree nextPage={nextPage} skip={skip} />;
      case 4:
        return <RegistrationFour submitAndRedirect={submitAndRedirect} skip = {skip}/>;
      default:
        return null;
    }
  };

  return (
    // <div className="form-container">
    //   <div className="form-content">
       
    //   </div>
    // </div>
    <>
     {renderPage()}
    </>
  );
};

export default RegistrationMultiPageForm;
