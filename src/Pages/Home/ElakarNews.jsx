import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon

const ElakarNews = () => {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8">
      {/* Title Section */}
      <div className="flex items-center mb-4">
        <span className="text-red-600 text-2xl sm:text-4xl font-bold mr-2"> \ </span>
        <span className=" text-lg sm:text-xl font-bold">
          আপনার এলাকার খবর
        </span>
        <div className="flex-grow border-t-2 sm:border-t-4 border-gray-400 ml-2"></div>
      </div>

      {/* Dropdown & Search Section */}
      <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
        {/* Division Dropdown */}
        <select
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          className="border border-gray-400 p-2 rounded-md w-full sm:w-48 focus:outline-none"
        >
          <option value="">-বিভাগ-</option>
          <option value="dhaka">ঢাকা</option>
          <option value="chittagong">চট্টগ্রাম</option>
        </select>

        {/* District Dropdown */}
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="border border-gray-400 p-2 rounded-md w-full sm:w-48 focus:outline-none"
        >
          <option value="">-জেলা-</option>
          <option value="dhaka">ঢাকা</option>
          <option value="comilla">কুমিল্লা</option>
        </select>

        {/* Upazila Dropdown */}
        <select
          value={upazila}
          onChange={(e) => setUpazila(e.target.value)}
          className="border border-gray-400 p-2 rounded-md w-full sm:w-48 focus:outline-none"
        >
          <option value="">-উপজেলা-</option>
          <option value="savar">সাভার</option>
          <option value="gazipur">গাজীপুর</option>
        </select>

        {/* Search Button */}
        <button className="bg-gray-800 text-white flex items-center justify-center px-6 py-2 rounded-md hover:bg-gray-700 transition">
          খুঁজুন <FaSearch className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ElakarNews;
