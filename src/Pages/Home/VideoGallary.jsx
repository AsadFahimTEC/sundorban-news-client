// import React, { useState, useEffect } from "react";

// const VideoGallery = () => {
//   // Video data with dynamic links
//   const videos = [
//     {
//       id: 1,
//       title: "প্রাইম আইটি ওয়ার্ল্ড নিউজ-২৩ ভিডিও ফের",
//       thumbnail: "https://i.ibb.co.com/d2VfvR6/2.jpg",
//       link: "https://sundorbannews24.com/news/video/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae-%e0%a6%86%e0%a6%87%e0%a6%9f%e0%a6%bf-%e0%a6%93%e0%a7%9f%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b2%e0%a7%8d%e0%a6%a1-%e0%a6%a8%e0%a6%bf%e0%a6%89-6",
//     },
//     {
//       id: 2,
//       title: "প্রাইম আইটি ওয়ার্ল্ড নিউজ-২৩ ভিডিও স্রী",
//       thumbnail: "https://i.ibb.co.com/HGQnf9S/6.jpg",
//       link: "https://sundorbannews24.com/news/video/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae-%e0%a6%86%e0%a6%87%e0%a6%9f%e0%a6%bf-%e0%a6%93%e0%a7%9f%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b2%e0%a7%8d%e0%a6%a1-%e0%a6%a8%e0%a6%bf%e0%a6%89-5",
//     },
//     {
//       id: 3,
//       title: "প্রাইম আইটি ওয়ার্ল্ড নিউজ-২৩ ভিডিও টু",
//       thumbnail: "https://i.ibb.co.com/3T1mqQ9/1-1.jpg",
//       link: "https://sundorbannews24.com/news/video/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae-%e0%a6%86%e0%a6%87%e0%a6%9f%e0%a6%bf-%e0%a6%93%e0%a7%9f%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b2%e0%a7%8d%e0%a6%a1-%e0%a6%a8%e0%a6%bf%e0%a6%89-3",
//     },
//     {
//       id: 4,
//       title: "প্রাইম আইটি ওয়ার্ল্ড নিউজ-২৩ ভিডিও ওয়ান",
//       thumbnail: "https://sundorbannews24.com/wp-content/uploads/2023/07/2.jpg",
//       link: "https://sundorbannews24.com/news/video/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae-%e0%a6%86%e0%a6%87%e0%a6%9f%e0%a6%bf-%e0%a6%93%e0%a7%9f%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b2%e0%a7%8d%e0%a6%a1-%e0%a6%a8%e0%a6%bf%e0%a6%89",
//     },
//     {
//       id: 5,
//       title: "প্রাইম আইটি ওয়ার্ল্ড নিউজ-২৩ ভিডিও সিক্স",
//       thumbnail: "https://i.ibb.co.com/2FLJQGM/10.jpg",
//       link: "https://sundorbannews24.com/news/video/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae-%e0%a6%86%e0%a6%87%e0%a6%9f%e0%a6%bf-%e0%a6%93%e0%a7%9f%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b2%e0%a7%8d%e0%a6%a1-%e0%a6%a8%e0%a6%bf%e0%a6%89-4",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slider functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
//     }, 3000); // 3 seconds

//     return () => clearInterval(interval); // Cleanup
//   }, [videos.length]);

//   // Handle manual navigation
//   const handlePrev = () => {
//     setCurrentIndex((currentIndex - 1 + videos.length) % videos.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((currentIndex + 1) % videos.length);
//   };

//   return (
//     <div className="container mx-auto px-4 py-6">
//       {/* Title Section */}
//       <div className="flex items-center mb-6">
//         <span className="text-red-600 text-2xl sm:text-4xl font-bold mr-2">
//           \
//         </span>
//         <span className="text-lg sm:text-xl font-bold">ভিডিও গ্যালারী</span>
//         <div className="flex-grow border-t-2 sm:border-t-4 border-gray-400 ml-2"></div>
//       </div>

//       {/* Video Slider */}
//       <div className="relative bg-gray-800 p-4 rounded-lg">
//         <div className="flex items-center">
//           {/* Left Arrow */}
//           <button
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full hover:bg-gray-700"
//             onClick={handlePrev}
//           >
//             <span className="text-white text-lg">&lt;</span>
//           </button>

//           {/* Video Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden">
//             {videos.map((video, index) => (
//               <div
//                 key={video.id}
//                 className={`transition-transform duration-300 ${
//                   index === currentIndex ? "block" : "hidden"
//                 }`}
//               >
//                 <a href={video.link} target="_blank" rel="noopener noreferrer">
//                   <img
//                     src={video.thumbnail}
//                     alt={video.title}
//                     className="w-full h-40 md:h-48 rounded-lg object-cover"
//                   />
//                   <p className="text-white text-sm mt-2 text-center">
//                     {video.title}
//                   </p>
//                 </a>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full hover:bg-gray-700"
//             onClick={handleNext}
//           >
//             <span className="text-white text-lg">&gt;</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;

import React, { useState } from "react";

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      title: "প্রাইম আইটি ওয়ার্ল্ড নিউজ-২৩ ভিডিও ফের",
      thumbnail: "https://i.ibb.co/d2VfvR6/2.jpg",
      link: "https://sundorbannews24.com/news/video/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae-%e0%a6%86%e0%a6%87%e0%a6%9f%e0%a6%bf-%e0%a6%93%e0%a7%9F%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b2%e0%a7%8d%e0%a6%a1-%e0%a6%a8%e0%a6%bf%e0%a6%89-6",
    },
    {
      id: 2,
      title: "প্রাইম আইটি ওয়ার্ল্ড নিউজ-২৩ ভিডিও স্রী",
      thumbnail: "https://i.ibb.co/HGQnf9S/6.jpg",
      link: "https://sundorbannews24.com/news/video/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae-%e0%a6%86%e0%a6%87%e0%a6%9f%e0%a6%bf-%e0%a6%93%e0%a7%9F%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b2%e0%a7%8d%e0%a6%a1-%e0%a6%a8%e0%a6%bf%e0%a6%89-5",
    },
    {
      id: 3,
      title: "প্রাইম আইটি ওয়ার্ল্ড নিউজ-২৩ ভিডিও টু",
      thumbnail: "https://i.ibb.co/3T1mqQ9/1-1.jpg",
      link: "https://sundorbannews24.com/news/video/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae-%e0%a6%86%e0%a6%87%e0%a6%9F%e0%a6%bf-%e0%a6%93%e0%a7%9F%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b2%e0%a7%8d%e0%a6%a1-%e0%a6%a8%e0%a6%bf%e0%a6%89-3",
    },
    {
      id: 4,
      title: "প্রাইম আইটি ওয়ার্ল্ড নিউজ-২৩ ভিডিও ওয়ান",
      thumbnail: "https://sundorbannews24.com/wp-content/uploads/2023/07/2.jpg",
      link: "https://sundorbannews24.com/news/video/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae-%e0%a6%86%e0%a6%87%e0%a6%9f%e0%a6%bf-%e0%a6%93%e0%a7%9F%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b2%e0%a7%8d%e0%a6%a1-%e0%a6%a8%e0%a6%bf%e0%a6%89",
    },
    {
      id: 5,
      title: "প্রাইম আইটি ওয়ার্ল্ড নিউজ-২৩ ভিডিও সিক্স",
      thumbnail: "https://i.ibb.co/2FLJQGM/10.jpg",
      link: "https://sundorbannews24.com/news/video/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae-%e0%a6%aa%e0%a6%bf-%e0%a6%ab%e0%a6%bc%e0%a6%be%e0%a6%87%e0%a6%ae-%e0%a6%aa%e0%a6%bf-%e0%a6%b8%e0%a7%8d%e0%a6%95-%e0%a6%a4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Title Section */}
      <div className="flex items-center mb-6">
        <span className="text-red-600 text-2xl sm:text-4xl font-bold mr-2">
          \
        </span>
        <span className="text-lg sm:text-xl font-bold">ভিডিও গ্যালারী</span>
        <div className="flex-grow border-t-2 sm:border-t-4 border-gray-400 ml-2"></div>
      </div>

      {/* Video Gallery with Slider */}
      <div className="relative">
        {/* Left Slider Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
          onClick={handlePrev}
        >
          ◁
        </button>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`relative ${
                index === currentIndex ? "scale-105" : "scale-95 opacity-80"
              }`}
            >
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 md:h-48 lg:h-56 rounded-lg object-cover bg-gray-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <span className="text-white text-4xl">▶</span>
                  </div>
                </div>
                <p className="text-black text-sm mt-2 text-center">{video.title}</p>
              </a>
            </div>
          ))}
        </div>

        {/* Right Slider Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
          onClick={handleNext}
        >
          ▷
        </button>
      </div>
    </div>
  );
};

export default VideoGallery;
