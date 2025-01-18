import React from "react";

const SaraDeshFinal = () => {
  return (
    <div className=" container mx-auto px-4 py-6">
      {/* Title Section */}
      <div className="flex items-center mb-4">
        <span className="text-red-600 text-2xl sm:text-4xl font-bold mr-2">
          {" "}
          \{" "}
        </span>
        <span className=" text-lg sm:text-xl font-bold">সারাদেশ</span>
        <div className="flex-grow border-t-2 sm:border-t-4 border-gray-400 ml-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Left Section - Small News */}
        <div className="md:col-span-1 space-y-4 cursor-pointer">
          <div className="flex flex-col">
            <img
              src="https://i.ibb.co.com/qgv03VL/Messenger-creation-2836-E514-6174-4-A1-D-BF97-6-C46-ED08082-D-1024x460.jpg"
              alt="News"
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="text-sm font-semibold mt-2">
              দেবহাটায় উদ্যগী সদস্যদের সংবর্ধনা ফেন্ড অনুষ্ঠান অনুষ্ঠিত
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="https://i.ibb.co.com/k6PcxhR/IMG-20241201-183534.jpg"
              alt="News"
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="text-sm font-semibold mt-2">
              শ্যামনগরে ইউপি চেয়ারম্যান অক্ষ্মক জাফরুল আলম বাবু গ্রেপ্তার
            </p>
          </div>
        </div>

        {/* Middle Section - Featured News */}
        <div className="md:col-span-1 cursor-pointer">
          <img
            src="https://i.ibb.co.com/b1hRG47/IMG-20241209-163507-1024x770.jpg"
            alt="Main News"
            className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-2">
            উঠেছে নতুন ধান তবুও বাড়ছে দাম, নেপথ্যে কারা
          </h2>
        </div>

        {/* Right Section - List News */}
        <div className="md:col-span-1">
            
          <div className="border-b-2 border-red-500 pb-2 mb-2 cursor-pointer">
            <h3 className="text-lg font-bold text-red-600">রেকর্ড অঙ্কের টাকা মিলল</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="border-b pb-1">
              রেকর্ড অঙ্কের টাকা ও সোনার অলংকার মিলল পাগলা মসজিদের দানবাক্সে
            </li>
            <li className="border-b pb-1">
              দেশের আকালে শুল্ক উঠছে বাড়ছে, নামতে দেওয়া হবে না: ডা. শফিকুর রহমান
            </li>
            <li className="border-b pb-1">
              জামায়াত আমীর সাতক্ষীরায় আসছেন শনিবার, প্রস্তুতি পরিদর্শনে জেলা উজির
            </li>
            <li>
              দেবহাটায় বার্ষিক পুষ্টি কর্ম পরিকল্পনা সভা অনুষ্ঠিত
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Advertisement */}
      <div className="mt-6">
        <img
          src="https://i.ibb.co.com/dDFmgJb/12759621346271778357.png"
          alt="Advertisement"
          className="w-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default SaraDeshFinal;
