import React from "react";

const NewsSectionFour = () => {
  const newsItems = [
    {
      id: 1,
      title: "১৭ বছর পর আজ কারামুক্ত হচ্ছেন লুৎফুজ্জামান বাবর",
      description:
        "সব মামলায় খালাস পাওয়ার পর কারামুক্ত হচ্ছেন সাবেক স্বরাষ্ট্র প্রতিমন্ত্রী লুৎফুজ্জামান বাবর। ১৭ বছর কারাবাসের পর আজ দুপুরে তিনি কেরানীগঞ্জ কেন্দ্রীয়...",
      image: "https://i.ibb.co.com/Qmqc72z/Screenshot-2025-01-16-10-40-22-63-a23b203fd3aafc6dcb84e438dda678b6-1024x565.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title:
        "দেবহাটা থেকে নিখোঁজ ছাত্রলীগের কেন্দ্রীয় যুগ্ম সম্পাদক নিনি গ্রেফতার",
      description:
        "সাতক্ষীরার দেবহাটা থেকে নিখোঁজ সংগঠনের কেন্দ্রীয় কমিটির যুগ্ম সাধারণ সম্পাদক নিনি গ্রেফতার হয়েছেন। সোমবার ১৩ জানুয়ারি দিবাগত রাত তিনটার...",
      image: "https://i.ibb.co.com/1vgv2n4/Screenshot-2025-01-13-19-05-59-67-a23b203fd3aafc6dcb84e438dda678b6-1024x646.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      title: "সংসদে প্রথম ভাষণ প্রিয়াঙ্কার, আক্রমণ বিজেপিকে",
      description:
        "সংসদে প্রথমবারের মতো ভাষণ দিয়েছেন কংগ্রেস নেত্রী প্রিয়াঙ্কা গান্ধী। লম্বা বক্তৃতার শুরুতে তিনি বিতর্কিত বিষয় নিয়ে বিজেপিকে...",
      image: "https://i.ibb.co.com/wsnDL9x/Screenshot-2024-12-14-05-12-24-79-a23b203fd3aafc6dcb84e438dda678b6.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      title: "‘শহীদ বুদ্ধিজীবীগণ আমাদের প্রেরণার উৎস হিসেবে কাজ করে যাবেন’",
      description:
        "শহীদ বুদ্ধিজীবী দিবস উপলক্ষে ১৯৭১ সালে মুক্তিযুদ্ধের কালে প্রান হারানো বুদ্ধিজীবী ও তাদের দেশের প্রতি অবদানকে স্মরণ করে...",
      image: "https://i.ibb.co.com/c8183gZ/Screenshot-2024-12-13-14-47-20-92-a23b203fd3aafc6dcb84e438dda678b6-1024x728.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      {/* <h2 className="text-xl font-bold mb-4 border-b-2 border-red-500 inline-block">
        রাজনীতি
      </h2> */}
      <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-red-600 text-4xl mr-2">\</span> রাজনীতি
          <span className="flex-grow border-t-4 border-gray-400 ml-2"></span>
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSectionFour;
