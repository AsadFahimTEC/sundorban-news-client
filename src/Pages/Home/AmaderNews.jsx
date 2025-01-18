import React from "react";

const AmaderNews = () => {
  const newsData = [
    {
      title: "বাগেরহাটের পথে পাঁচ শিক্ষার্থী",
      description:
        "পায়ে হেঁটে শ্যামনগর থেকে বাগেরহাটের পথে পাঁচ শিক্ষার্থী, ১৫০ কিলোমিটারের যাত্রা।",
      image: "https://i.ibb.co/r4bpQGj/Screenshot-2025-01-15-14-36-18-93-a23b203fd3aafc6dcb84e438dda678b6-1024x722.jpg",
    },
    {
      title: "সাতক্ষীরায় স্বামীর দাবিতে স্ত্রীর পিটিয়ে হত্যা",
      description:
        "সাতক্ষীরায় দাম্পত্য কলহের জেরে স্ত্রীকে নির্মমভাবে হত্যা করেছে স্বামী।",
      image: "https://i.ibb.co/wWDFQqw/Screenshot-2025-01-14-14-33-46-42-a23b203fd3aafc6dcb84e438dda678b6-1024x738.jpg",
    },
    {
      title: "পাঁচগ্রাম সীমান্তে বিএসএফের ফাঁকা গুলি",
      description:
        "সাতক্ষীরার সীমান্তে বিএসএফের অযাচিত গুলি, জনমনে উদ্বেগ।",
      image: "https://i.ibb.co/sWByC4X/Screenshot-2025-01-13-18-11-51-16-a23b203fd3aafc6dcb84e438dda678b6.jpg",
    },
    {
      title: "সড়কের বেহাল দশা, সাতক্ষীরায় বছরে ৫৮ জনের মৃত্যু",
      description:
        "দুর্বল সড়ক অবকাঠামো এবং বেপরোয়া যানবাহনের কারণে মৃত্যুর মিছিল থামছে না।",
      image: "https://i.ibb.co/J5jpKRD/Messenger-creation-7-DB7-FEAC-CA2-C-4-BBE-9090-D261-FBE99683.jpg",
    },
    {
      title: "হেঁটেই পদ্মা পারাপার",
      description:
        "পদ্মা নদীর পাড়ে জীবনের সংগ্রাম, পায়ে হেঁটে নিত্য পারাপার।",
      image: "https://i.ibb.co/DDQdZFy/Screenshot-2025-01-06-19-59-23-23-a23b203fd3aafc6dcb84e438dda678b6-1024x670.jpg",
    },
    {
      title: "শ্যামনগরে অপহৃত নারী উদ্ধার, গ্রেফতার ২",
      description:
        "সাতক্ষীরার শ্যামনগরে অপহৃত নারী উদ্ধার, অভিযুক্তদের গ্রেফতার।",
      image: "https://i.ibb.co/jGmSK97/Screenshot-2025-01-06-19-40-32-75-a23b203fd3aafc6dcb84e438dda678b6.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Title Section */}
      <div className="flex items-center mb-6">
        <span className="text-red-600 text-2xl sm:text-4xl font-bold mr-2">\</span>
        <span className="text-lg sm:text-xl font-bold">আমাদের সংবাদ</span>
        <div className="flex-grow border-t-2 sm:border-t-4 border-gray-400 ml-2"></div>
      </div>

      {/* Main News Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* News Content */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image Section */}
        <img
          src="https://i.ibb.co/r4bpQGj/Screenshot-2025-01-15-14-36-18-93-a23b203fd3aafc6dcb84e438dda678b6-1024x722.jpg"
          alt="বাগেরহাটের পথে পাঁচ শিক্ষার্থী"
          className="w-full object-cover h-48 sm:h-96"
        />

        {/* Text Section */}
        <div className="p-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            পায়ে হেঁটে শ্যামনগর থেকে বাগেরহাটের পথে পাঁচ শিক্ষার্থী
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            সাতক্ষীরার শ্যামনগর সরকারি মহসিন ডিগ্রি কলেজের রোভার স্কাউট
            গ্রুপের পাঁচ সদস্য শ্যামনগর থেকে বাগেরহাট পর্যন্ত ১৫০ কিলোমিটারের পথ
            পায়ে হেঁটে পরিভ্রমণের উদ্যোগে রওনা দিয়েছেন। বুধবার (১৫ জানুয়ারি)
            সকাল। শ্যামনগর সরকারি মহসিন ডিগ্রি কলেজ থেকে যাত্রা শুরু করেন তারা। ১৯
            জানুয়ারি...
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <div className="space-y-6 w-full max-w-2xl px-4">
        {/* First Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-full h-[300px] md:h-[400px] relative">
            <img
              src="https://i.ibb.co/wWDFQqw/Screenshot-2025-01-14-14-33-46-42-a23b203fd3aafc6dcb84e438dda678b6-1024x738.jpg"
              alt="First Card"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">
              সাতক্ষীরায় যৌতুকের দাবিতে স্ত্রীকে পিটিয়ে ও শ্বাসরোধ করে হত্যা
            </h2>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-full h-[300px] md:h-[400px] relative">
            <img
              src="https://i.ibb.co/sWByC4X/Screenshot-2025-01-13-18-11-51-16-a23b203fd3aafc6dcb84e438dda678b6.jpg"
              alt="Second Card"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">
              সাতক্ষীরা সীমান্তে বিজিবি-বিএসএফের ফাঁকা গুলি
            </h2>
          </div>
        </div>
      </div>
    </div>

        {/* Right Section with Side and Bottom News */}
        <div className="flex flex-col space-y-4">
          {newsData.slice(1).map((news, index) => (
            <div
              key={index}
              className="flex bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-1/3 h-24 object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-bold text-gray-800 mb-1">
                  {news.title}
                </h3>
                <p className="text-xs text-gray-600">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmaderNews;
