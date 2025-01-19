import React from "react";

const ICT = () => {
  const articles = [
    {
      id: 1,
      title: "খাঁটি মধু চিনবেন যেভাবে",
      image:
        "https://i.ibb.co.com/G3ZHCrb/Screenshot-2024-12-14-10-03-03-31-a23b203fd3aafc6dcb84e438dda678b6-1024x726.jpg",
      description:
        "আমরা কমবেশি সবাই মধু খেতে পছন্দ করি। কারণ, মধুর অনেক উপকারিতা রয়েছে। ত্বকের যত্নে ও ঠান্ডাজনিত সমস্যা সারাতে মধু খুব...",
    },
    {
      id: 2,
      title: "হোয়াটসঅ্যাপে কল রেকর্ড করার উপায়",
      image:
        "https://i.ibb.co.com/fM0YqYW/Screenshot-2024-12-13-23-44-19-12-a23b203fd3aafc6dcb84e438dda678b6-1024x737.jpg",
      description:
        "প্রতিদিন বিশ্বের ১৮০টি দেশের প্রায় ২০০ কোটি মানুষ হোয়াটসঅ্যাপ ব্যবহার করছেন। পরিবারের লোকজন এবং বন্ধুবান্ধবের সঙ্গে সবসময় যোগাযোগ রাখতে ইনস্ট্যান্ট...",
    },
    {
      id: 3,
      title: "মহাকাশে মিলল সোনাভর্তি গ্রহাণু, পেলে আপনিও হয়ে যাবেন বিলিয়নিয়ার",
      image:
        "https://i.ibb.co.com/S35MSqv/Screenshot-2024-11-29-20-48-06-26-a23b203fd3aafc6dcb84e438dda678b6.jpg",
      description:
        "মহাকাশে মূল্যবান ধাতুতে পরিপূর্ণ একটি গ্রহাণুর খোঁজ পেয়েছে মার্কিন মহাকাশ গবেষণা সংস্থা নাসা। ওই গ্রহাণুতে সোনা ও প্লাটিনামসহ বিভিন্ন ধাতু...",
    },
    {
      id: 4,
      title: "সাড়ে ১৮ ঘণ্টা নয়, যুক্তরাষ্ট্র থেকে ভারত আসতে লাগবে ৩০ মিনিট",
      image:
        "https://i.ibb.co.com/xJssqKn/Screenshot-2024-11-19-08-00-00-72-a23b203fd3aafc6dcb84e438dda678b6-1024x725.jpg",
      description:
        "আকাশপথে যুক্তরাষ্ট্রের সান ফ্রান্সিসকো থেকে ভারতের দিল্লিতে আসতে সময় লাগে প্রায় সাড়ে ১৮ ঘণ্টা। তবে তা ৩০ মিনিটেই পাড়ি দেওয়া...",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Title Section */}
      <div className="flex items-center mb-6">
        <span className="text-red-600 text-2xl sm:text-4xl font-bold mr-2">
          \
        </span>
        <span className="text-lg sm:text-xl font-bold">তথ্যপ্রযুক্তি</span>
        <div className="flex-grow border-t-2 sm:border-t-4 border-gray-400 ml-2"></div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-[#f2eee3] rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom Advertisement */}
      <div className="mt-6">
        <img
          src="https://i.ibb.co/dDFmgJb/12759621346271778357.png"
          alt="Advertisement"
          className="w-full h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ICT;
