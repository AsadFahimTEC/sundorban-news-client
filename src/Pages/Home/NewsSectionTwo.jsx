import React, { useState } from "react";

const NewsSectionTwo = () => {
  const [activeTab, setActiveTab] = useState("latest");

  // News data for each category
  const latestNews = [
    {
      title: "আল-কাদির ট্রাস্ট মামলায় ইমরান খানের ১৪ বছরের কারাদণ্ড",
      img: "https://i.ibb.co/stw6XQZ/Screenshot-2025-01-17-14-38-18-15-a23b203fd3aafc6dcb84e438dda678b6.jpg",
    },
    {
      title: "পাশাপাশি পরিস্থিতি! সাইফকে কোপানোর ভিডিও প্রকাশ্যে",
      img: "https://i.ibb.co/q0LqVJ7/Screenshot-2025-01-16-13-48-58-20-a23b203fd3aafc6dcb84e438dda678b6.jpg",
    },
    {
      title: "১৭ বছর পর আবার কামালযুক্ত হচ্ছেন লুকুজ্জোন্না বাবর",
      img: "https://i.ibb.co/YXtgdnc/Screenshot-2025-01-16-10-40-22-63-a23b203fd3aafc6dcb84e438dda678b6.jpg",
    },
  ];

  const mostReadNews = [
    {
      title: "গণতন্ত্র বাঁচাতে নতুন ৪ মূলনীতির সুপারিশ",
      img: "https://i.ibb.co.com/0cpbrfg/Screenshot-2025-01-15-18-35-45-32-a23b203fd3aafc6dcb84e438dda678b6-1024x720.jpg",
    },
    {
      title: "৫০ পুলিশ সুপারসহ ২৪ উচ্চতর কর্মকর্তাকে বদলি",
      img: "https://i.ibb.co.com/4Sgr181/Screenshot-2025-01-13-17-01-33-79-a23b203fd3aafc6dcb84e438dda678b6-1024x730.jpg",
    },
    {
      title: "প্রবাসীদের পাসপোর্ট নিয়ে সুখবর দিল সরকার",
      img: "https://i.ibb.co.com/tHS8LpY/FB-IMG-1736309626501.jpg",
    },
  ];

  // Determine the news to display based on the active tab
  const currentNews = activeTab === "latest" ? latestNews : mostReadNews;
  return (
    <div className="container mx-auto px-4 py-6 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Section: News List */}
        <div className="lg:col-span-3 space-y-4">
          <h2 className="text-xl font-bold border-l-4 border-red-500 pl-2 mb-4">
            জাতীয়
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "সময়ের বাহিনীর ম্যানেজিং সক্ষমতা আরও দুই মাস",
                img: "https://i.ibb.co.com/wLmPWSh/Screenshot-2025-01-12-18-39-54-13-a23b203fd3aafc6dcb84e438dda678b6-1024x758.jpg",
              },
              {
                title:
                  "দেশের মঙ্গলের জন্য রাষ্ট্রপতির দায়িত্ব নিতে পারি: আলি আহমদ",
                img: "https://i.ibb.co.com/MMJBW7t/Screenshot-2025-01-11-17-01-32-18-a23b203fd3aafc6dcb84e438dda678b6-1024x665.jpg",
              },
              {
                title: "৭ বছর পর মায়ের দেখা পেলেন তারেক রহমান",
                img: "https://i.ibb.co.com/8NGFfHx/Screenshot-2025-01-08-16-54-25-75-a23b203fd3aafc6dcb84e438dda678b6-3-1024x785.jpg",
                badge: "৭ বছর পর",
              },
              {
                title: "প্রবাসীদের পাসপোর্ট নিয়ে যে সুখবর দিল সরকার",
                img: "https://i.ibb.co.com/tHS8LpY/FB-IMG-1736309626501.jpg",
              },
            ].map((news, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={news.img}
                  alt="news"
                  className="w-24 h-20 object-cover rounded cursor-pointer"
                />
                <div>
                  {news.badge && (
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-md">
                      {news.badge}
                    </span>
                  )}
                  <p className="text-gray-800 cursor-pointer font-medium">
                    {news.title}
                  </p>
                </div>
              </div>
            ))}
            <hr />
          </div>
        </div>

        {/* Center Section: Featured News */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded overflow-hidden shadow-lg">
            <img
              src="https://i.ibb.co.com/0cpbrfg/Screenshot-2025-01-15-18-35-45-32-a23b203fd3aafc6dcb84e438dda678b6-1024x720.jpg"
              alt="Featured News"
              className="w-full h-auto cursor-pointer"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 hover:text-red-600 cursor-pointer mb-2">
                ধর্মনিরপেক্ষতাসহ রাষ্ট্র পরিচালনার ৩ মূলনীতির বাদ, গণতন্ত্র বহাল
                রেখে নতুন ৪ মূলনীতির সুপারিশ
              </h3>
              <hr />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "৫০ পুলিশ সুপারসহ ২৪ উচ্চতর কর্মকর্তাকে বদলি",
                img: "https://i.ibb.co.com/4Sgr181/Screenshot-2025-01-13-17-01-33-79-a23b203fd3aafc6dcb84e438dda678b6-1024x730.jpg",
              },
            ].map((news, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={news.img}
                  alt="news"
                  className="w-32 h-24 object-cover rounded cursor-pointer"
                />
                <p className="text-gray-800 cursor-pointer font-medium">
                  {news.title}
                </p>
              </div>
            ))}
          </div>
          <hr />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-4">
          {/* Toggle Buttons */}
          <div className="flex justify-center items-center border-b-0">
            <button
              className={`px-6 py-2 font-medium ${
                activeTab === "latest"
                  ? "bg-red-800 text-white"
                  : "bg-gray-300 text-gray-800"
              } rounded-tl-md cursor-pointer transition-all duration-300`}
              onClick={() => setActiveTab("latest")}
            >
              সর্বশেষ সংবাদ
            </button>
            <button
              className={`px-6 py-2 font-medium  ${
                activeTab === "mostRead"
                  ? "bg-red-800 text-white"
                  : "bg-gray-300 text-gray-800"
              } rounded-tr-md cursor-pointer transition-all duration-300`}
              onClick={() => setActiveTab("mostRead")}
            >
              সর্বাধিক পঠিত
            </button>
          </div>

          {/* News List */}
          <div className="space-y-4">
            {currentNews.map((news, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={news.img}
                  alt="news"
                  className="w-16 h-16 object-cover rounded cursor-pointer"
                />
                <p className="text-gray-800 cursor-pointer font-medium">
                  {news.title}
                </p>
              </div>
            ))}
          </div>

          {/* Read More Button */}
          <button className="px-4 py-2 w-full bg-black text-white rounded">
            আরও পড়ুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSectionTwo;
