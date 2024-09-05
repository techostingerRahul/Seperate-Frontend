import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import Vip from "./pages/Vip";
import Career from "./pages/Career";
// import EditProfile from "./pages/EditProfile";
import ProtectedRoute from "./route/ProtectedRoute";
import Login from "./pages/Login";
import UDashboard from "./pages/UDashboard";
import ProfileEdit from "./pages/ProfileEdit"
import Register from "./pages/Register";
// import RegistrationStep1 from "./pages/RegistrationStep1";
// import RegistrationStep2 from "./pages/RegistrationStep2";
// import RegistrationStep3 from "./pages/RegistrationStep3";
// import RegistrationStep4 from "./pages/RegistrationStep4";
import PrivateRoute from "./route/PrivateRoute";
import UserProfilePage from "./pages/UserProfilePage";
import RegistrationForms from "./pages/RegistrationForms";
import PreferedF from "./pages/PreferedF";
import Connections from "./features/connections/Connections";
import ConnectRequest from "./pages/ConnectRequest";
import SearchUser from "./pages/SearchUser";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/vip", element: <Vip /> },
  { path: "/career", element: <Career /> },
  { path: "/*", element: <Error404 /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/edit", element: <ProfileEdit /> },
  { path: "/filters", element: <PreferedF /> },
  { path: "/connect", element: <ConnectRequest /> },

  // {
  //   path: "/dashboard",
  //   element: <ProtectedRoute element={<Dashboard />} />,
  //   children: [
  //     {
  //       path: "edit-profile",
  //       element: <ProtectedRoute element={<EditProfile />} />,
  //     },
  //     {
  //       path: "signuporlogin",
  //       element: <ProtectedRoute element={<Signuporlogin />} />,
  //     },
  //   ],
  // },
  {
    path: "/authform",
    element: (
      <ProtectedRoute>
        <RegistrationForms />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "/authformpersonal",
  //   element: (
  //     <ProtectedRoute>
  //       <RegistrationStep2/>
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/authformemployment",
  //   element: (
  //     <ProtectedRoute>
  //       <RegistrationStep3/>
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/authformuserphoto",
  //   element: (
  //     <ProtectedRoute>
  //       <RegistrationStep4/>
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <UDashboard />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "/edit-profile",
  //   element: (
  //     <PrivateRoute>
  //       <EditProfile/>
  //      </PrivateRoute>

  //   ),
  // },
  {
    path: "/viewprofile",
    element: (
      <PrivateRoute>
        <UserProfilePage/>
       </PrivateRoute>

    ),
  },

  {
    path:"/searchuser",
    element:(
      <PrivateRoute>
        <SearchUser/>
       </PrivateRoute>
    )
  }
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
