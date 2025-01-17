// import { useEffect, useState } from "react";
// import Marquee from "react-fast-marquee";
// import { Link } from "react-router-dom";
// import UseNews from "../../AxiosFetch/UseNews";

// const Headline = () => {
//   const [news] = UseNews();
//   const [latestNewsByCategory, setLatestNewsByCategory] = useState([]);
//   const [isVisible, setIsVisible] = useState(true);

//   const categories = ["জাতীয়", "আন্তর্জাতিক", "রাজনীতি", "অর্থনীতি", "সারাদেশ", "বিনোদন", "খেলা", "শিক্ষা", "উপর বাংলা", "স্বাস্থ্য"];

//   useEffect(() => {
//     if (news && news.length > 0) {
//       const latestNews = categories.map(category => {
//         const newsInCategory = news.filter(item => item.category === category);
//         return newsInCategory.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
//       }).filter(item => item); // Filter out undefined values

//       setLatestNewsByCategory(latestNews);
//     }
//   }, [news, categories]);

//   if (!isVisible) {
//     return null;
//   }

//   return (
//     <div className="flex justify-between items-center mt-32 z-0 px-3 py-3  rounded-md">
//       <div className="flex items-center">
//         <h1 className="bg-blue-700 text-white py-2 px-4 rounded-l-md text-sm font-bold">শিরোনাম</h1>
//         <Marquee className="space-x-10 text-black py-2">
//           {latestNewsByCategory.map((newsItem, index) => (
//             <Link key={index} to={`/newsDetails/${newsItem._id}`}>
//               <h1 className="mr-5">{newsItem.title} । </h1>
//             </Link>
//           ))}
//         </Marquee>
//       </div>
//       <button
//         className=" p-2 rounded-full transition-colors duration-300"
//         onClick={() => setIsVisible(false)}
//       >
//         ✕
//       </button>
//     </div>
//   );
// };

// export default Headline;

// import { useEffect, useState } from "react";
// import Marquee from "react-fast-marquee";
// import { Link } from "react-router-dom";
// import UseNews from "../../AxiosFetch/UseNews";

// const Headline = () => {
//   // const [news] = UseNews();
//   // const [latestNewsByCategory, setLatestNewsByCategory] = useState([]);
//   // const [isVisible, setIsVisible] = useState(true);

//   // const categories = ["জাতীয়", "আন্তর্জাতিক", "রাজনীতি", "অর্থনীতি", "সারাদেশ", "বিনোদন", "খেলা", "শিক্ষা", "উপর বাংলা", "স্বাস্থ্য"];

//   // useEffect(() => {
//   //   if (news && news.length > 0) {
//   //     const latestNews = categories.map(category => {
//   //       const newsInCategory = news.filter(item => item.category === category);
//   //       return newsInCategory.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
//   //     }).filter(item => item); // Filter out undefined values

//   //     setLatestNewsByCategory(latestNews);
//   //   }
//   // }, [news, categories]);

//   // if (!isVisible) {
//   //   return null;
//   // }

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Left Section: News List */}
//         <div className="md:col-span-1 bg-white p-4 shadow-md">
//         <img
//             src="https://i.ibb.co.com/xjThM10/Screenshot-2024-11-10-02-28-41-06-a23b203fd3aafc6dcb84e438dda678b6-1024x567.jpg"
//             alt="Featured News"
//             className="w-full h-auto mt-1"
//           />
//           <h2 className="text-lg font-bold mb-4 mt-2">জাতীয়</h2>
//           <ul className="space-y-3">
//             <li className="border-b pb-2">
//               সুন্দরবন নিউজ২৪ / নির্বাচিত প্রতিনিধি দেখতে চায় জাতি: আমীর খসরু
//             </li>
//             <li className="border-b pb-2">
//               নিউজ এইট / প্রাইম আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ এইট
//             </li>
//             <li className="border-b pb-2">
//               নিউজ ফোর / প্রাইম আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ ফোর
//             </li>
//             <li className="border-b pb-2">
//               প্রাইম আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ থ্রী
//             </li>
//             <li>প্রাইম আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ টু</li>
//           </ul>
//         </div>

//         {/* Center Section: Featured News */}
//         <div className="md:col-span-1 bg-white p-4 shadow-md">
//           <div className="bg-red-600 text-white text-center py-3 text-lg font-bold">
//             সুন্দরবন নিউজ২৪ / নির্বাচিত প্রতিনিধি দেখতে চায় জাতি: আমীর খসরু
//           </div>
//           <img
//             src="https://i.ibb.co.com/xjThM10/Screenshot-2024-11-10-02-28-41-06-a23b203fd3aafc6dcb84e438dda678b6-1024x567.jpg"
//             alt="Featured News"
//             className="w-full h-auto mt-4"
//           />
//         </div>

//         {/* Right Section: Advertisement */}
//         <div className="md:col-span-1 bg-white p-4 shadow-md">
//           <img
//             src="https://i.ibb.co.com/HqN6p6y/a0bd4373-209c-46ae-a8ad-50700f83bcc3.jpg"
//             alt="Advertisement"
//             className="w-full h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Headline;

// import React from "react";

// const Headline = () => {
//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Left Section: News List */}
//         <div className="md:col-span-1 bg-white p-4 shadow-md">
//           <img
//             src="https://i.ibb.co/xjThM10/Screenshot-2024-11-10-02-28-41-06-a23b203fd3aafc6dcb84e438dda678b6-1024x567.jpg"
//             alt="Featured News"
//             className="w-full h-auto mt-1"
//           />
//           <h2 className="text-lg font-bold mb-4 mt-2">জাতীয়</h2>
//           <ul className="space-y-3">
//             <li className="border-b pb-2">
//               সুন্দরবন নিউজ২৪ / নির্বাচিত প্রতিনিধি দেখতে চায় জাতি: আমীর খসরু
//             </li>
//             <li className="border-b pb-2">
//               নিউজ এইট / প্রাইম আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ এইট
//             </li>
//             <li className="border-b pb-2">
//               নিউজ ফোর / প্রাইম আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ ফোর
//             </li>
//             <li className="border-b pb-2">
//               প্রাইম আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ থ্রী
//             </li>
//             <li>প্রাইম আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ টু</li>
//           </ul>
//         </div>

//         {/* Center Section: Featured News */}
//         <div className="md:col-span-1 bg-white p-4 shadow-md">
//           <div className="bg-red-600 text-white text-center py-3 text-lg font-bold">
//             সুন্দরবন নিউজ২৪ / নির্বাচিত প্রতিনিধি দেখতে চায় জাতি: আমীর খসরু
//           </div>
//           <img
//             src="https://i.ibb.co/xjThM10/Screenshot-2024-11-10-02-28-41-06-a23b203fd3aafc6dcb84e438dda678b6-1024x567.jpg"
//             alt="Featured News"
//             className="w-full h-auto mt-4"
//           />
//         </div>

//         {/* Right Section: Advertisement */}
//         <div className="md:col-span-1 bg-white p-4 shadow-md">
//           <img
//             src="https://i.ibb.co/HqN6p6y/a0bd4373-209c-46ae-a8ad-50700f83bcc3.jpg"
//             alt="Advertisement"
//             className="w-full h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Headline;

import React from "react";
import NewsSectionFinal from "./NewsSectionFinal";
import NewsSectionTwo from "./NewsSectionTwo";

const Headline = () => {
  return (
    <div className="container mx-auto px-4 py-6 bg-gray-100">
       <div className="bg-gray-100 px-4 py-2 mt-0">
      <div className="flex flex-wrap items-center space-x-2">
        <span className="font-bold text-gray-700">ট্রেন্ডিং:</span>
        <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded ">
          মামলাভো
        </button>
        <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded ">
          গিজা পোড়ানো
        </button>
        <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded ">
          এমএলএম
        </button>
        <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded ">
          এসএমএফ
        </button>
        <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded ">
          নির্বাচিত প্রতিনিধি দেখতে চায় জাতি: আমীর খসরু
        </button>
      </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section: News List */}
        <div className="md:col-span-1 p-4  ">
          <img
            src="https://i.ibb.co/xjThM10/Screenshot-2024-11-10-02-28-41-06-a23b203fd3aafc6dcb84e438dda678b6-1024x567.jpg"
            alt="Featured News"
            className="w-full h-auto mt-1 border-b-2 border-gray-300"
          />
          <h2 className="text-lg font-bold mb-4 mt-2 text-red-600">জাতীয়</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="border-b pb-2 cursor-pointer">
              <span className="text-red-600 font-bold">জাতীয়</span> সুন্দরবন
              নিউজ২৪ / নির্বাচিত প্রতিনিধি <br /> দেখতে চায় জাতি: আমীর খসরু
            </li>
            <li className="border-b pb-2 cursor-pointer">
              <span className="text-red-600 font-bold">খেলাধুলা</span> নিউজ এইট
              / প্রাইম আর্টি ওয়ার্ড নিউজ২৪ <br /> তেলো নিউজ এইট
            </li>
            <li className="border-b pb-2  cursor-pointer">
              <span className="text-red-600 font-bold">জাতীয়</span> নিউজ ফোর /
              প্রাইম আর্টি ওয়ার্ড নিউজ২৪ <br /> তেলো নিউজ ফোর
            </li>
            <li className="border-b pb-2  cursor-pointer">
              <span className="text-red-600 font-bold">আন্তর্জাতিক</span> প্রাইম
              আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ <br /> থ্রী
            </li>
            <li className=" cursor-pointer">
              <span className="text-red-600 font-bold">বিনোদন</span> প্রাইম
              আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ <br /> টু
            </li>
            <hr />
          </ul>
        </div>

        {/* Center Section: Featured News */}
        <div className="md:col-span-1  p-4  ">
          <div className="bg-red-600 text-white text-center py-3 text-lg font-bold  w-full h-auto">
            সুন্দরবন নিউজ২৪ / নির্বাচিত প্রতিনিধি <br /> দেখতে চায় জাতি: আমীর খসরু
          </div>
          <img
            src="https://i.ibb.co/xjThM10/Screenshot-2024-11-10-02-28-41-06-a23b203fd3aafc6dcb84e438dda678b6-1024x567.jpg"
            alt="Featured News"
            className="w-full h-auto mt-1 border-b-2 border-gray-300"
          />

          {/* news section */}
          <NewsSectionFinal></NewsSectionFinal>
        </div>

        {/* Right Section: Advertisement */}
        <div className="md:col-span-1 p-4 ">
          <img
            src="https://i.ibb.co/HqN6p6y/a0bd4373-209c-46ae-a8ad-50700f83bcc3.jpg"
            alt="Advertisement"
            className="w-full h-auto"
          />
          <ul className="space-y-3 text-gray-700 mt-3">
            <li className="border-b pb-2 cursor-pointer">
              <span className="text-red-600 font-bold">জাতীয়</span> সুন্দরবন
              নিউজ২৪ / নির্বাচিত প্রতিনিধি দেখতে চায় জাতি: <br /> আমীর খসরু
            </li>
            <li className="border-b pb-2  cursor-pointer">
              <span className="text-red-600 font-bold">খেলাধুলা</span> নিউজ এইট
              / প্রাইম আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ <br /> এইট
            </li>
            <li className="border-b pb-2 cursor-pointer">
              <span className="text-red-600 font-bold">জাতীয়</span> নিউজ ফোর /
              প্রাইম আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ <br /> ফোর
            </li>
            <li className="border-b pb-2 cursor-pointer">
              <span className="text-red-600 font-bold">আন্তর্জাতিক</span> প্রাইম
              আর্টি ওয়ার্ড নিউজ২৪ তেলো নিউজ থ্রী
            </li>
          </ul>
        </div>
      </div>
      <NewsSectionTwo></NewsSectionTwo>
    </div>
  );
};

export default Headline;
