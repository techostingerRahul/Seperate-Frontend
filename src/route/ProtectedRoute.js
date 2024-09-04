import { Navigate, useNavigate  } from "react-router-dom";
import { validateJwt } from "../features/auth/authUtils";
import { useState, useEffect } from "react";
import { selectisBasicRegistrationCompleted, selectJwt } from "../features/auth/user_listSlice";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // const isBasicRegistrationCompleted = useSelector(selectisBasicRegistrationCompleted) 

  // if (isBasicRegistrationCompleted === null) {
  //   const temp = localStorage.getItem('jwt')
  //   console.log(`Printing isBasicRegistrationCompleted :${temp}`)

  // }
  // const jwt = useSelector(selectJwt) 

  // console.log(jwt,isBasicRegistrationCompleted)

  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const isBasicRegistrationCompleted = useSelector(selectisBasicRegistrationCompleted)
  // const jwt = useSelector(selectJwt)
  

  const jwt = localStorage.getItem("jwt");
   const isBasicRegistrationCompleted  = localStorage.getItem("isBasicRegistrationCompleted")

  useEffect(() => {
    (async () => {
      console.log("Entering async func");
      if (!jwt) {
        console.log("JWT is not found");
        setLoading(false);

        return;
      }
      if (!(await validateJwt())) {
        console.log("JWT is not valid");
        setLoading(false);
        localStorage.clear();
        return;
      } else {
        console.log("JWT IS valid, setting authetnticaon");
        setIsAuthenticated(true);
      }
      console.log("Swtting loading false");

      setLoading(false);
    })();
  }, [jwt]);

   
  if (loading) {
    return <>Loading</>;
  } else {
    if (!isAuthenticated) {
      console.log("Is authenticate false")
    return <Navigate to="/" replace={true}></Navigate>;

    }else{
      console.log("Is authenticated true")
      if(isBasicRegistrationCompleted === 'true'){
        console.log("already submitted the basic info redirect to home")
        console.log("isBasicRegistrationCompleted",isBasicRegistrationCompleted)
        return <Navigate to="/" replace={true}></Navigate>;
      }else{
        console.log("basic info not submitted now submit and show the form")
        console.log("isBasicRegistrationCompleted",isBasicRegistrationCompleted)
        console.log("Navigating to auth form")
        return children;

      }
    }
    

    // If basic regsiter not complete show regsiter page
    



    // IF basic registration completed
   
  }
}

export default ProtectedRoute;
