import React from "react";

const Sports = () => {
  const articles = [
    {
      id: 1,
      title: "ইস্ট টাইগার্স অ-১৪ বিলগেট ক্রিকেট টুর্নামেন্ট সাক্রিয়া চ্যাম্পিয়ন",
      image: "https://i.ibb.co/Z8jf1Jv/cricket-team.jpg",
      description:
        "খুলনা জেলা হাকিরে ইস্ট টাইগার্স অ-১৪ বিলগেট ক্রিকেট টুর্নামেন্ট চ্যাম্পিয়ন হওয়া পৌরী...",
    },
    {
      id: 2,
      title: "সাতক্ষীরা ফাইনাল",
      image: "https://i.ibb.co/Z8jf1Jv/cricket-team.jpg",
      description:
        "সাতক্ষীরা শীতে আকাশে সবুজ বাতাসে ফুলটা গেছে সাপিয়ারি",
    },
    {
      id: 3,
      title: "পাকিস্তি ভাব ভরাট",
      image: "https://i.ibb.co/sK4JhLQ/pakistan.jpg",
      description:
        "পাকিস্তি ভাব ভরাট দেশের সাথে ক্রিকেট খেলে আছকান ভাই নিয়েছেন ব্লাকের হয়ে সব বিষয়ে",
    },
    {
      id: 4,
      title: "ডি-ট্রেন্ডিং ওয়েস্ট-আইনডাস্ট হোস্ট",
      image: "https://i.ibb.co/3YkZksk/cricket.jpg",
      description:
        "ক্রিকেট বিশ্বে এঞ্জল ইউটেলিজার বর্চির পর প্রধানকারী দা হয়ে আনে বাংলাদেশ",
    },
    {
      id: 5,
      title: "শিরীর ষ্নং হেঁশে বাড়িকে খাদ্য",
      image: "https://i.ibb.co/hYy9K2v/food.jpg",
      description:
        "শিরীর ষ্নং পরে শেষ ভাগে লোকটি নিজ হাতে আল ফসল প্রস্তুত করার সাথে তার পাশে আরো খাবার আসতে তার হয়েও",
    },
    {
      id: 6,
      title: "হ্যাঁ কাঁদছেন মায়েদের",
      image: "https://i.ibb.co/TYdK6ZD/health.jpg",
      description:
        "এই সময়ে খুব সহকার সহকার বুঝো... মনস্ট্রাইটা সামনে আছ যে জায়গাতে দরকার নিখুঁত সন্দর্শণা",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Title Section */}
      <div className="flex items-center mb-6">
        <span className="text-red-600 text-2xl sm:text-4xl font-bold mr-2">
          \
        </span>
        <span className="text-lg sm:text-xl font-bold">খেলাধুলা</span>
        <div className="flex-grow border-t-2 sm:border-t-4 border-gray-400 ml-2"></div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
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
    </div>
  );
};

export default Sports;
