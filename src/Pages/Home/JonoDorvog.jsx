import React from "react";

const JonoDorvog = () => {
  // Dummy news data
  const newsData = [
    {
      id: 1,
      image: "https://i.ibb.co.com/ZW4nX31/Screenshot-2024-11-15-02-40-45-76-680d03679600f7af0b4c700c6b270fe7.jpg", // Replace with actual image
      title:
        "১৭ বছরেও মুছেনি সিডরের দাগ, প্রয়োজন টেকসই বেড়িবাঁধ",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/Vx21Vh4/Screenshot-2024-11-12-11-00-29-72-a23b203fd3aafc6dcb84e438dda678b6.jpg", // Replace with actual image
      title:
        "উপকূলবাসীর দুঃস্বপ্ন সেই ভয়াল ১২ নভেম্বর আজ",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/HGQnf9S/6.jpg", // Replace with actual image
      title:
        "<span class='text-red-600 font-bold'>নিউজ সিরিজ</span> / প্রাইম আর্টিক ওয়ার্ল্ড নিউজ-২৪ ডেস্ক নিউজ সিরিজ",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Title Section */}
      <div className="flex items-center mb-6">
        <span className="text-red-600 text-2xl sm:text-4xl font-bold mr-2">
          \
        </span>
        <span className="text-lg sm:text-xl font-bold">জনদুর্ভোগ</span>
        <div className="flex-grow border-t-2 sm:border-t-4 border-gray-400 ml-2"></div>
      </div>

      {/* News Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {newsData.map((news) => (
          <div key={news.id} className="flex items-center gap-3">
            <img
              src={news.image}
              alt="News"
              className="w-[120px] h-[80px] object-cover rounded-md"
            />
            <p className="text-black text-sm sm:text-base font-medium">
              <span dangerouslySetInnerHTML={{ __html: news.title }}></span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JonoDorvog;
