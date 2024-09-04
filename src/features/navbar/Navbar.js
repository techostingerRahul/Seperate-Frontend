import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  CalendarDaysIcon,
  XMarkIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
// import logo from "../navbar/assets/SecondHalftemporaryLOGO.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateJwt } from "../auth/authUtils";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUserLogInfo, UserLoginfo } from "../auth/user_listSlice";
import IndianMahuratCalendar from "../../components/IndianMahuratCalendar";
import "./assets/navbar.css"

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "VIP", href: "/vip", current: false },
  { name: "Connections", href: "/connection", current: false },
  { name: "Chat", href: "#", current: false },
];
const beforeLogin = [
  // { name: "Home", href: "/", current: true },
  { name: "Login", href: "/login", current: true },
  { name: "Create a new account", href: "/register", current: true },
];
const userNavigation = [
  { name: "Profile", href: "/edit-profile" },
  { name: "Account settings", href: "#" },
  { name: "Preferences settings", href: "#" },
  { name: "Log out", href: "/login" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar({ children }) {
  const loginInfo = useSelector(selectUserLogInfo)
  const user = {
    name: loginInfo?.name,
    email: loginInfo?.email,
    imageUrl:
    loginInfo?.profilePhoto,
  };
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const LogInfo = useSelector(selectUserLogInfo) ;
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    (async () => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        console.log("JWT FOUND");
        if (await validateJwt()) {
          console.log("JWT VALID");
          setIsAuthenticated(true);
          dispatch(UserLoginfo({ jwt }));
        } else {
          console.log("JWT INVALID");
          setIsAuthenticated(false);
          localStorage.clear();
        }
      } else {
        setIsAuthenticated(false);
      }
    })();
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    function isObjectEmpty(obj) {
      return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
    }
  
    function saveUserLogInfo(userLogInfo) {
      if (userLogInfo && !isObjectEmpty(userLogInfo)) {
        console.log("saveUserLogInfo - saveUserLogInfo", userLogInfo);
        localStorage.setItem("userLogInfo", JSON.stringify(userLogInfo));
      }
    }
  
    function saveLogData() {
      if (isAuthenticated && LogInfo) {
        saveUserLogInfo(LogInfo);
      }
    }
    
    saveLogData();
  }, [LogInfo, isAuthenticated]);

  //save login data in local storage

  

  //logout
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    setIsAuthenticated(false);
    navigate("/login", { replace: true });
  };


  //hide the things from navigation bar
  const shouldHideNav = location.pathname === "/authform" || location.pathname === "/authformpersonal" || location.pathname === "/authformemployment" || location.pathname === "/authformuserphoto";



  console.log("from navbar response", isAuthenticated, LogInfo);
  return (
    <>
      <div className="min-h-full min-w-full bg-white   ">
        <Disclosure as="nav" className="bg-white lg:py-3 md:py-2 shadow-navbar">
          <div className="mx-auto max-w-7xl px-4  lg:px-8  min-w-full min-h-full ">
            <div className="flex h-16 items-center justify-between ">
              <div className="flex items-center sm:h-10 sm:w-41  ">
                <div className="flex-shrink-0 ">
                  <Link to={"/"}>
                    {/* <img
                      alt="Your Company"
                      src={logo}
                      className=" h-40 w-40 ml-5 sm:ml-0"
                    /> */}
                    <h1 className="logo-m">Second Half</h1>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block ">
                {isAuthenticated ? (
                  shouldHideNav ? (
                    <></>
                  ) : (
                    <>
                      <div className="ml-4 flex items-center md:ml-10  md:space-x-1 lg:space-x-14  ">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            aria-current={item.current ? "page" : undefined}
                            className={classNames(
                              item.current
                                ? " text-pink-800 text-3xl font-bold "
                                : "text-gray-600 text-2xl font-medium",
                              " px-3 py-2 md:text-base "
                            )}>
                            {item.name}
                          </Link>
                        ))}
                        <button
                          type="button"
                          className=" relative rounded-lg p-1 text-pink-800"
                          onClick={openModal}>
                          <CalendarDaysIcon
                            aria-hidden="true"
                            className="h-6 w-6"
                          />
                        </button>
                        {/* calender Modal */}
                        {isOpen && (
                          <div
                            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
                            onClick={closeModal}>
                            <div
                              className="bg-white rounded-lg shadow-lg max-w-lg mx-auto p-6 relative"
                              onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                                &times;
                              </button>
                              <IndianMahuratCalendar />
                            </div>
                          </div>
                        )}

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <MenuButton className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                alt=""
                                src={user.imageUrl}
                                className="h-8 w-8 rounded-full"
                              />
                            </MenuButton>
                          </div>
                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                            {userNavigation.map((item) => (
                              <MenuItem key={item.name}>
                                {item.name === "Log out" ? (
                                  <Link
                                    onClick={handleLogout}
                                    to={item.href}
                                    className="block px-4 py-2 text-sm text-gray-700 w-full ">
                                    {item.name}
                                  </Link>
                                ) : (
                                  <Link
                                    to={item.href}
                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                    {item.name}
                                  </Link>
                                )}
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Menu>
                        <button
                          type="button"
                          className=" relative rounded-lg p-1 text-gray-600 ">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </>
                  )
                ) : (
                  <>
                    <div className="ml-4 flex items-center md:ml-10  md:space-x-1 lg:space-x-14  ">
                      {beforeLogin.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          aria-current={item.current ? "page" : undefined}
                          className={classNames(
                            item.current
                              ? " text-pink-800 text-3xl font-bold "
                              : "text-gray-600 text-2xl font-medium",
                            " px-3 py-2 md:text-base "
                          )}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                {shouldHideNav ? (
                  <></>
                ) : (
                  <>
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-pink-800 p-2 text-white hover:bg-pink-700 hover:text-white  ">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon
                        aria-hidden="true"
                        className="block h-6 w-6 group-data-[open]:hidden"
                      />
                      <XMarkIcon
                        aria-hidden="true"
                        className="hidden h-6 w-6 group-data-[open]:block"
                      />
                    </DisclosureButton>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on mobile menu open state */}
          {isAuthenticated ? (
            shouldHideNav ? (
              <></>
            ) : (
              <>
                <DisclosurePanel className="md:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current ? " text-pink-800" : "text-gray-600",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className=" pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          alt=""
                          src={user.imageUrl}
                          className="h-10 w-10 rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-pink-800">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-600">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full p-1 text-pink-800 ">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <CalendarDaysIcon
                          aria-hidden="true"
                          className="h-6 w-6"
                        />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <>
                          {item.name === "Log out" ? (
                            <Link
                              onClick={handleLogout}
                              to={item.href}
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600">
                              {item.name}
                            </Link>
                          ) : (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600">
                              {item.name}
                            </Link>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                </DisclosurePanel>
              </>
            )
          ) : (
            <>
              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {beforeLogin.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current ? " text-pink-800" : "text-gray-600",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        <main>
          <div className="mx-auto max-w-full ">{children}</div>
        </main>
      </div>
    </>
  );
}

export default Navbar;

// RAHUL CODE

// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, CalendarDaysIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import logo from  '../navbar/assets/SecondHalftemporaryLOGO.svg'
// import { Link } from 'react-router-dom'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'VIP', href: '/vip', current: false },
//   { name: 'Connections', href: '/connection', current: false },
//   { name: 'Chat', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
// function Navbar({children}) {
//     return (
//         <>
//          <div className="min-h-full min-w-full ">
//         <Disclosure as="nav" className="bg-white lg:py-3 md:py-2 ">
//           <div className="mx-auto max-w-7xl px-4  lg:px-8  min-w-full min-h-full ">
//             <div className="flex h-16 items-center justify-between ">
//               <div className="flex items-center sm:h-10 sm:w-41  ">
//                 <div className="flex-shrink-0 ">
//                   <img
//                     alt="Your Company"
//                     src={logo}
//                     className=" h-40 w-40 ml-5 sm:ml-0"
//                   />
//                 </div>
//               </div>
//               <div className="hidden md:block ">
//                 <div className="ml-4 flex items-center md:ml-10  md:space-x-1 lg:space-x-14  ">
//                 {navigation.map((item) => (
//                       <Link
//                         key={item.name}
//                         to={item.href}
//                         aria-current={item.current ? 'page' : undefined}
//                         className={classNames(
//                           item.current ? ' text-pink-800 text-xl font-bold ' : 'text-gray-600 text-lg font-medium',
//                           ' px-3 py-2 md:text-base ',
//                         )}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   <button
//                     type="button"
//                     className=" relative rounded-lg p-1 text-pink-800"
//             >
//                     <span className="absolute -inset-1.5" />
//                     <span className="sr-only">View notifications</span>
//                     <CalendarDaysIcon aria-hidden="true" className="h-6 w-6" />
//                   </button>

//                   {/* Profile dropdown */}
//                   <Menu as="div" className="relative ml-3">
//                     <div>
//                       <MenuButton className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800">
//                         <span className="absolute -inset-1.5" />
//                         <span className="sr-only">Open user menu</span>
//                         <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
//                       </MenuButton>
//                     </div>
//                     <MenuItems
//                       transition
//                       className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                     >
//                       {userNavigation.map((item) => (
//                         <MenuItem key={item.name}>
//                           <a
//                             href={item.href}
//                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
//                           >
//                             {item.name}
//                           </a>
//                         </MenuItem>
//                       ))}
//                     </MenuItems>
//                   </Menu>
//                 </div>
//               </div>
//               <div className="-mr-2 flex md:hidden">
//                 {/* Mobile menu button */}
//                 <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-pink-800 p-2 text-white hover:bg-pink-700 hover:text-white  ">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
//                   <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
//                 </DisclosureButton>
//               </div>
//             </div>
//           </div>

//           <DisclosurePanel className="md:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//               {navigation.map((item) => (
//                 <DisclosureButton
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   aria-current={item.current ? 'page' : undefined}
//                   className={classNames(
//                     item.current ? ' text-pink-800' : 'text-gray-600',
//                     'block rounded-md px-3 py-2 text-base font-medium',
//                   )}
//                 >
//                   {item.name}
//                 </DisclosureButton>
//               ))}
//             </div>
//             <div className=" pb-3 pt-4">
//               <div className="flex items-center px-5">
//                 <div className="flex-shrink-0">
//                   <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
//                 </div>
//                 <div className="ml-3">
//                   <div className="text-base font-medium leading-none text-pink-800">{user.name}</div>
//                   <div className="text-sm font-medium leading-none text-gray-600">{user.email}</div>
//                 </div>
//                 <button
//                   type="button"
//                   className="relative ml-auto flex-shrink-0 rounded-full p-1 text-pink-800 "
//                 >
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">View notifications</span>
//                   <CalendarDaysIcon aria-hidden="true" className="h-6 w-6" />
//                 </button>
//               </div>
//               <div className="mt-3 space-y-1 px-2">
//                 {userNavigation.map((item) => (
//                   <DisclosureButton
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-600"
//                   >
//                     {item.name}
//                   </DisclosureButton>
//                 ))}
//               </div>
//             </div>
//           </DisclosurePanel>
//         </Disclosure>

//         <main>
//           <div className="mx-auto max-w-full ">{children}</div>
//         </main>
//       </div>
//         </>

//      );
// }

// export default Navbar;
