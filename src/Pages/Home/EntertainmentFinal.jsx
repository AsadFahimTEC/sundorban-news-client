import React from "react";

const EntertainmentFinal = () => {
  const entertainmentNews = [
    {
      id: 1,
      title: "ভুবন বিখ্যাত তবলাবাদক জাকির হোসেন আর নেই",
      image:
        "https://i.ibb.co/DCbjbJV/Screenshot-2024-12-15-23-10-45-38-a23b203fd3aafc6dcb84e438dda678b6-1024x800.jpg",
    },
    {
      id: 2,
      title: "ভারতের দক্ষিণী অভিনেতা আল্লু অর্জুনের অভুতপূর্ব জয়গান",
      image:
        "https://i.ibb.co/5T9DTdw/Screenshot-2024-12-13-19-08-30-07-a23b203fd3aafc6dcb84e438dda678b6.jpg",
    },
    {
      id: 3,
      title: "গালে গাল ঠেকিয়ে সেলফি, নতুন কার বালখানা হলেন ঐশ্বরিয়া?",
      image:
        "https://i.ibb.co/588hSRd/Screenshot-2024-12-01-15-51-21-38-a23b203fd3aafc6dcb84e438dda678b6-1-1024x691.jpg",
    },
    {
      id: 4,
      title: "ঢাকায় আসছেন রাতের ফতোয়া আলি খান, গাইবেন বিশেষ পারফরমেন্সে",
      image:
        "https://i.ibb.co/WHF5q5P/Screenshot-2024-11-29-18-06-10-91-a23b203fd3aafc6dcb84e438dda678b6-1024x738.jpg",
    },
  ];

  const featuredEntertainment = {
    title: "পাগলপ্রায় পরিস্থিতি! সাইফকে কোরানের ভিডিও প্রকাশ্যে",
    description:
      "বুধবার রাতে নবাব পত্নিদের সাথে কোরানের আলোচনার একটি ভিডিও প্রকাশ্যে এসেছে। এটি দেখে আরো মানুষের কৌতূহল বাড়িয়েছে...",
    image:
      "https://i.ibb.co/q0LqVJ7/Screenshot-2025-01-16-13-48-58-20-a23b203fd3aafc6dcb84e438dda678b6.jpg",
  };

  const economyNews = [
    {
      id: 1,
      title: "বিকল্প উপায়ে রাজস্ব বাড়ানোর সুপারিশ উচ্চ পর্যায়ে",
      image:
        "https://i.ibb.co/tpnD4fh/Screenshot-2025-01-03-06-58-22-85-46e9b5da97bf806c7cb07564ebe57e41-1024x620.jpg",
    },
    {
      id: 2,
      title: "আয়কর রিটার্ন দাখিলের সময় বাড়ল এক মাস",
      image:
        "https://i.ibb.co/XpGQx9H/Screenshot-2024-12-25-00-23-57-58-a23b203fd3aafc6dcb84e438dda678b6-1024x764.jpg",
    },
    {
      id: 3,
      title: "খেজুরের তৈরী কোমল পানীয় বাজারে আনছে সৌদি আরব",
      image:
        "https://i.ibb.co/bzJbxm9/Screenshot-2024-12-07-21-58-59-67-a23b203fd3aafc6dcb84e438dda678b6-1024x765.jpg",
    },
    {
      id: 4,
      title: "দূরালঞ্চ চরের শুঁটকি বাণিজ্য ক্রমবর্ধমান",
      image: "https://i.ibb.co/MRRbW7Z/FB-IMG-1732983972792-1024x462.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      {/* Entertainment Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold border-b-2 border-red-500 flex items-center">
            <span className="bg-red-500 w-3 h-3 mr-2"></span> বিনোদন
            <span className="flex-grow border-t border-gray-300 mx-2"></span>
          </h2>
          <h2 className="text-xl font-bold border-b-2 border-red-500 flex items-center">
            <span className="flex-grow border-t border-gray-300 mx-2"></span>{" "}
            <span className="bg-red-500 w-3 h-3 mr-2"></span> অর্থনীতি
          </h2>
        </div>
     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Section */}
          <div className="space-y-4 cursor-pointer">
            {entertainmentNews.map((news) => (
              <div
                key={news.id}
                className="flex items-center space-x-4 bg-white p-2 rounded-md shadow hover:shadow-lg transition"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <h3 className="text-sm font-medium text-gray-800">
                  {news.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Featured Section */}
          <div className="md:col-span-1">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img
                src={featuredEntertainment.image}
                alt={featuredEntertainment.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {featuredEntertainment.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {featuredEntertainment.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4 cursor-pointer">
            
            {economyNews.map((news) => (
              <div
                key={news.id}
                className="flex items-center space-x-4 bg-white p-2 rounded-md shadow hover:shadow-lg transition"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <h3 className="text-sm font-medium text-gray-800">
                  {news.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentFinal;
