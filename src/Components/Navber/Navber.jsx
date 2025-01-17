// import React, { useContext, useEffect, useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../../Security/AuthProvider';
// import { FaFacebook, FaInstagram, FaRss, FaTwitter, FaYoutube } from 'react-icons/fa';

// const NavBar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [dateInfo, setDateInfo] = useState('');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const updateDateInfo = () => {
//       const currentDate = new Date();
//       const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
//       const bengaliDate = new Intl.DateTimeFormat('bn-BD', options).format(currentDate);

//       // Example conversion to Bengali calendar (mocked, implement actual conversion if needed)
//       const bengaliYear = '১৪৩১'; // Update dynamically if possible
//       const bengaliMonthDay = '৩রা মাঘ'; // Update dynamically if needed

//       setDateInfo(`${bengaliDate}, ${bengaliMonthDay}, ${bengaliYear} বঙ্গাব্দ`);
//     };

//     updateDateInfo();
//   }, []);



//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   return (
//     // <nav className={`navbar text-black bg-white mb-44 lg:pt-1 px-4 shadow-lg py-2 lg:px-10 md:px-8 fixed z-50 border-b ${user ? 'top-8' : 'top-0'}`}>
      

//     //   <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center py-3">
//     //     {/* Mobile Menu Button */}
//     //     <div className="lg:hidden">
//     //       <button
//     //         className="text-gray-500 hover:text-gray-700 focus:outline-none"
//     //         aria-label="Open menu"
//     //         onClick={toggleSidebar}
//     //       >
//     //         <svg
//     //           xmlns="http://www.w3.org/2000/svg"
//     //           className="h-6 w-6"
//     //           fill="none"
//     //           viewBox="0 0 24 24"
//     //           stroke="currentColor"
//     //         >
//     //           <path
//     //             strokeLinecap="round"
//     //             strokeLinejoin="round"
//     //             strokeWidth="2"
//     //             d="M4 6h16M4 12h16m-16 6h16"
//     //           />
//     //         </svg>
//     //       </button>
//     //     </div>

//     //     {/* Logo */}
//     //     <Link to="/" className="flex items-center lg:justify-start justify-center w-full lg:w-auto">
//     //       <img
//     //         className="h-12 w-auto"
//     //         src="https://i.ibb.co/sHLrjHq/Logo-Nilakash-Today-1.png"
//     //         alt="Nilakash Today"
//     //       />
//     //     </Link>

//     //     {/* Desktop Navigation */}
//     //     <div className="hidden lg:flex flex-grow justify-center">
//     //       <ul className="flex space-x-4">
//     //         {[
//     //           "জাতীয়",
//     //           "আন্তর্জাতিক",
//     //           "রাজনীতি",
//     //           "অর্থনীতি",
//     //           "সারাদেশ",
//     //           "বিনোদন",
//     //           "খেলা",
//     //           "শিক্ষা",
//     //           "উপর বাংলা",
//     //           "স্বাস্থ্য"
//     //         ].map((category) => (
//     //           <NavLink
//     //             key={category}
//     //             to={`/category/${category}`}
//     //             className={({ isActive }) =>
//     //               `text-gray-800 hover:text-blue-600 px-1 py-2 rounded-md font-medium ${isActive ? "bg-blue-100 text-blue-600" : ""}`
//     //             }
//     //           >
//     //             {category}
//     //           </NavLink>
//     //         ))}
//     //       </ul>
//     //     </div>
//     //   </div>

//     //   {/* Sidebar */}
//     //   {sidebarOpen && (
//     //     <div className="fixed inset-0 z-40 flex">
//     //       <div className="fixed inset-0 bg-black opacity-50" onClick={closeSidebar}></div>
//     //       <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-lg">
//     //         <div className="absolute top-0 right-0 -mr-12 pt-2">
//     //           <button
//     //             className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:bg-gray-600"
//     //             onClick={closeSidebar}
//     //           >
//     //             <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//     //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//     //             </svg>
//     //           </button>
//     //         </div>
//     //         <div className="mt-5 flex-1 h-0 overflow-y-auto">
//     //           <nav className="px-2">
//     //             {[
//     //               "জাতীয়",
//     //               "আন্তর্জাতিক",
//     //               "রাজনীতি",
//     //               "অর্থনীতি",
//     //               "সারাদেশ",
//     //               "বিনোদন",
//     //               "খেলা",
//     //               "শিক্ষা",
//     //               "উপর বাংলা",
//     //               "স্বাস্থ্য"
//     //             ].map((category) => (
//     //               <NavLink
//     //                 key={category}
//     //                 to={`/category/${category}`}
//     //                 className="block text-black py-2 px-4 hover:bg-gray-100 rounded-md"
//     //                 onClick={closeSidebar}
//     //               >
//     //                 {category}
//     //               </NavLink>
//     //             ))}
//     //             <NavLink
//     //               to={"/addNews"}
//     //               className="block text-black py-2 px-4 hover:bg-gray-100 rounded-md"
//     //               onClick={closeSidebar}
//     //             >
//     //               Add News
//     //             </NavLink>
//     //             <NavLink
//     //               to={"/dashboard"}
//     //               className="block text-black py-2 px-4 hover:bg-gray-100 rounded-md"
//     //               onClick={closeSidebar}
//     //             >
//     //               Dashboard
//     //             </NavLink>
//     //           </nav>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   )}
//     // </nav>
//     <header className="bg-white shadow-md py-4">
//     <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
//       {/* Left Section */}
//       <div className="flex items-center space-x-4">
//         <button className="text-lg md:text-xl focus:outline-none">≡</button>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border rounded px-3 py-1 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Center Section */}
//       <div className="text-center text-gray-700 text-sm md:text-base">
//         <p>{dateInfo}</p>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center space-x-4">
//         <img src="https://i.ibb.co.com/FY6PtV8/Sundarban-News24-Logo.gif" alt="Logo" className="h-8 md:h-12" />
//         <div className="flex space-x-3">
//             <a href="#" className="text-blue-600 text-xl md:text-2xl"><FaFacebook /></a>
//             <a href="#" className="text-pink-500 text-xl md:text-2xl"><FaInstagram /></a>
//             <a href="#" className="text-blue-400 text-xl md:text-2xl"><FaTwitter /></a>
//             <a href="#" className="text-red-600 text-xl md:text-2xl"><FaYoutube /></a>
//             <a href="#" className="text-orange-500 text-xl md:text-2xl"><FaRss /></a>
//           </div>
//       </div>
//     </div>
//   </header>
//   );
// };

// export default NavBar;

import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaRss } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [dateInfo, setDateInfo] = useState("");

  useEffect(() => {
    const updateDateInfo = () => {
      const currentDate = new Date();
      const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      const bengaliDate = new Intl.DateTimeFormat("bn-BD", options).format(currentDate);

      // Mocked Bengali calendar details (adjust if needed)
      const bengaliYear = "১৪৩১"; // Static for now
      const bengaliMonthDay = "৩রা মাঘ"; // Static for now

      setDateInfo(`${bengaliDate}, ${bengaliMonthDay}, ${bengaliYear} বঙ্গাব্দ`);
    };

    updateDateInfo();
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between py-2 md:py-4">
          {/* Left Section */}
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-3">
              {/* Toggle Button */}
              <button className="text-lg md:text-xl focus:outline-none">
                <FiMenu />
              </button>
              {/* Search Button */}
              <button className="text-lg md:text-xl focus:outline-none">
                <FiSearch />
              </button>
            </div>
            {/* Date Info Below (hidden on small devices) */}
            <p className="hidden md:block text-sm md:text-base text-gray-700 truncate">
              {dateInfo}
            </p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center space-y-2">
            {/* Logo */}
            <img
              src="https://i.ibb.co/FY6PtV8/Sundarban-News24-Logo.gif"
              alt="Logo"
              className="h-12 md:h-20"
            />
          </div>

          {/* Right Section (hidden on small devices) */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-blue-600 text-lg md:text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-pink-500 text-lg md:text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-400 text-lg md:text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-red-600 text-lg md:text-xl">
              <FaYoutube />
            </a>
            <a href="#" className="text-orange-500 text-lg md:text-xl">
              <FaRss />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
