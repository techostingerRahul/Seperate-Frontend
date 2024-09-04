userUtils.js file is this

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const isLoggedIn = async () => {
const jwt = localStorage.getItem('jwt');

if (!jwt) {
return false;
}

const isValid = await validateJwt();
if (!isValid) {
localStorage.removeItem('jwt');
localStorage.removeItem('isNewUser');
return false;
}

return true;
};

export const validateJwt = async () => {
try {
const jwt = localStorage.getItem('jwt');
if (!jwt) return false;

const response = await axios.get(`${API_URL}/signin/isAuthenticated`, {
headers: {
'Authorization': `Bearer ${jwt}`
}
});

// Return the token validity status from the response
return response.data.data.isValidToken;
} catch (error) {
// If there's an error (e.g., network issue, server error), consider the token invalid
return false;
}
};






useAuth.js file is this



import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { isLoggedIn, validateJwt } from '../features/auth/authUtils';

const useAuth = () => {
const [authorized, setAuthorized] = useState(false);
const [isNewUser, setIsNewUser] = useState(false);
const [loading, setLoading] = useState(true);
const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
const checkAuthorization = async () => {
const loggedIn = await isLoggedIn();

if (loggedIn) {
const isValidToken = await validateJwt();
if (isValidToken) {
const newUser = localStorage.getItem('isNewUser') === 'true';
setIsNewUser(newUser);
setAuthorized(true);

if (newUser && (location.pathname === '/any' || location.pathname === '/signuporlogin')) {
navigate('/signuporlogin');
} else if (!newUser && location.pathname === '/any') {
navigate('/dashboard');
}
} else {
localStorage.removeItem('jwt');
localStorage.removeItem('isNewUser');
navigate('/');
}
} else {
if (location.pathname === '/dashboard' || location.pathname === '/any') {
navigate('/');
}
}
setLoading(false);
};

checkAuthorization();
}, [navigate, location]);

return { authorized, isNewUser, loading };
};

export default useAuth;







protectedRoute.js file is this



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateJwt } from '../features/auth/authUtils';

const ProtectedRoute = ({ element }) => {
const [isLoading, setIsLoading] = useState(true);
const navigate = useNavigate();

useEffect(() => {
const checkAuth = async () => {
const isValidToken = await validateJwt();
const isNewUser = localStorage.getItem('isNewUser') === 'true';

if (isValidToken) {
if (isNewUser) {

navigate('signuporlogin');
} else {

setIsLoading(false);
}
} else {

localStorage.clear();
navigate('/');
}
};

checkAuth();
}, [navigate]);

return isLoading ? <div>Loading...</div> : element;
};

export default ProtectedRoute;





restrictedRoute.js file is this



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateJwt } from '../features/auth/authUtils';

const RestrictedRoute = ({ element }) => {
const [isLoading, setIsLoading] = useState(true);
const navigate = useNavigate();

useEffect(() => {
const checkAuth = async () => {
const isValidToken = await validateJwt();

if (isValidToken) {
const isNewUser = localStorage.getItem('isNewUser') === 'true';

if (isNewUser) {

setIsLoading(false);
} else {

navigate('/dashboard');
}
} else {

setIsLoading(false);
}
};

checkAuth();
}, [navigate]);

return isLoading ? <div>Loading...</div> : element;
};

export default RestrictedRoute;







app.js file is this

import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import About from './pages/About';
import Vip from './pages/Vip';
import Signuporlogin from './pages/Signuporlogin';
import Career from './pages/Career';
import Dashboard from './features/auth/components/UserDashboard';
import Otpregister from './pages/Otpregister';
import Random from './pages/Random';
import OrtpComponent from './pages/Any';
import EditProfile from './pages/EditProfile';
import ProtectedRoute from './route/ProtectedRoute';
import RestrictedRoute from './route/RestrictedRoute';

const router = createBrowserRouter([
{ path: "/", element: <Home /> },
{ path: "/about", element: <About /> },
{ path: "/vip", element: <Vip /> },
{ path: "/career", element: <Career /> },
{ path: "/*", element: <Error404 /> },
{ path: "/otp", element: <Otpregister /> },
{ path: "/random", element: <Random /> },
{
path: "/any",
element: <RestrictedRoute element={<OrtpComponent />} />,
},
{
path: "/dashboard",
element: <ProtectedRoute element={<Dashboard />} />,
children: [
{ path: "edit-profile", element: <ProtectedRoute element={<EditProfile />} /> },
{ path: "signuporlogin", element: <ProtectedRoute element={<Signuporlogin />} /> },
],
},
]);

function App() {
return (
<div className="App">
<Provider store={store}>
<RouterProvider router={router} />
</Provider>
</div>
);
}

export default App;








if there was no jwt in localstorage user can access the public routes pages only
if non registered or non loggedin user try to access dashboard or any restricted route by link or manually then its show a loader and redirect to the homepage

if there was jwt in localstorage then check "isValidToken: true or not" --- in localstorage "isNewUser: true or false"
--------------------------------------------------------------------------------------------------
now "isValidToken: true" and "isNewUser: true" --its mean user is complete his registration first step and now user should not access the login(/any.js) page and do whatever standard process user can do and if try to access via route link or manually its should be show a loader and redirect to the /signuporlogin page , and registered user can access the dashboard and all the other protected routes as his authentication given access rights

now "isValidToken: true" and "isNewUser: false" --its mean user is logged in and now user should not access the login(any.js) page and standard process whatever standard process user can do and if try to access via route link or manually its should be show a loader and redirect to the /dashboard page and logged in user can access the protected routes as his authentication rights

"protected route pages should be accusable for only logged in user and registered user only"

now "isValidToken: false" --its mean token expired and now remove the localstorage data and redirect to the homepage





now issue is when "isNewUser: true"   http://localhost:3000/dashboard/signuporlogin  trying access its show a    "loading..."
i want its should be show the "signuporlogin" route component page 
