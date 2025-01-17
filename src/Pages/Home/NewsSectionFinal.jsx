const NewsCard = ({ category, title, image }) => {
  return (
    <div className="flex items-center  p-1 transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-44 h-24 object-cover rounded-md mr-4"
      />
      <div>
        <span className="text-red-600 font-bold text-sm">{category}</span>
        <h3 className="text-md font-semibold text-gray-900 mt-1">{title}</h3>
      </div>
    </div>
  );
};

const NewsSectionFinal = () => {
  const newsItems = [
    {
      category: "অপরাধ-দুর্নীতি",
      title: "১ বিলিয়ন ডলার নিয়ে বন্ধ এসএমএম এমটিএফই",
      image:
        "https://i.ibb.co.com/DwJbBYB/image-16141-1692381066-1024x576.jpg",
    },
    {
      category: "আন্তর্জাতিক",
      title: "গির্জা পোড়ানো নাশকতায় পাকিস্তানে ১৪৫ গ্রেফতার",
      image:
        "https://i.ibb.co.com/ZmbNyTx/pakistan-1-20230818072401-1024x639.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-4">
      <hr />
        {newsItems.map((news, index) => (
          <NewsCard
            key={index}
            category={news.category}
            title={news.title}
            image={news.image}
          />
        ))}
        <hr />
      </div>
    </div>
  );
};

export default NewsSectionFinal;
