import React from "react";

const InterNationalFinal = () => {
  const articles = [
    {
      id: 1,
      title: "নেই মোদির নাম, ট্রাম্পের শপথ অনুষ্ঠানে আমন্ত্রণ পেলেন যারা",
      image: "https://i.ibb.co.com/N2rys7Q/Screenshot-2025-01-18-09-06-25-51-a23b203fd3aafc6dcb84e438dda678b6.jpg",
      description:
        "আগামী সোমবার যুক্তরাষ্ট্রের নতুন প্রেসিডেন্ট হিসেবে শপথ নিতে যাচ্ছেন ডোনাল্ড ট্রাম্প। শপথ অনুষ্ঠানে আমন্ত্রিত অতিথিদের তালিকায় স্থান পেয়েছেন বিভিন্ন দেশের....",
    },
    {
      id: 2,
      title: "মিলে গেল বাবা ভাঙ্গার দুই ভবিষ্যদ্বাণী, সামনে কি ভয়ংকর বিপদ আসছে?",
      image: "https://i.ibb.co.com/kHr3QgR/Screenshot-2025-01-11-21-48-15-25-a23b203fd3aafc6dcb84e438dda678b6-1024x580.jpg",
      description:
        "নতুন বছরের শুরুতেই অর্থাৎ ২০২৫ নিয়ে বাবা ভাঙ্গার দেওয়া দুই ভবিষ্যদ্বাণী মিলে গিয়েছে! আর এতেই বিশ্বের মানুষ আতঙ্কিত হয়ে উঠেছেন।...",
    },
    {
      id: 3,
      title: "কানাডা দখলে সরব ট্রাম্প, অটল ট্রুডো",
      image: "https://i.ibb.co.com/nbZb6jd/FB-IMG-1736324750820-1024x1024.jpg",
      description:
        "যুক্তরাষ্ট্রের নবনির্বাচিত প্রেসিডেন্ট ডোনাল্ড ট্রাম্প সম্প্রতি কানাডাকে ৫১তম রাজ্য করার ইচ্ছা প্রকাশ করেছেন। এই বিতর্কিত মন্তব্যের পর কানাডার প্রধানমন্ত্রী জাস্টিন...",
    },
    {
      id: 4,
      title: "পদত্যাগ করলেন কানাডার প্রধানমন্ত্রী জাস্টিন ট্রুডো",
      image: "https://i.ibb.co.com/hHyhCfh/FB-IMG-1736190735370.jpg",
      description:
        "কানাডার প্রধানমন্ত্রী জাস্টিন ট্রুডো পদত্যাগ করেছেন। সোমবার (০৬ জানুয়ারি) বাংলাদেশ সময় রাত ১০টায় নিজ বাসভবন রিডো কটেজে এক সম্মেলন করে...",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Title Section */}
      <div className="flex items-center mb-6">
        <span className="text-red-600 text-2xl sm:text-4xl font-bold mr-2">
          \
        </span>
        <span className="text-lg sm:text-xl font-bold">আন্তর্জাতিক</span>
        <div className="flex-grow border-t-2 sm:border-t-4 border-gray-400 ml-2"></div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </div>
  );
};

export default InterNationalFinal;
