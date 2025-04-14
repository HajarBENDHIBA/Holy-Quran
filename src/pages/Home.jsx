import { useEffect, useState } from "react";
import { getSurahs } from "../services/quranService";
import { Link } from "react-router-dom";
import quranImage from "../assets/quran.jpg";

const Home = ({ search }) => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    getSurahs().then(setSurahs);
  }, []);

  return (
    <div className="min-h-screen pt-18">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${quranImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
         <h1 className="text-4xl md:text-6xl font-bold text-center text-[#35767F] mb-16">
            The Holy Quran
          </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surahs
            .filter((surah) =>
              surah.englishName.toLowerCase().includes(search.toLowerCase())
            )
            .map((surah) => (
              <div
                key={surah.number}
                className="flex items-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={`/surah/${surah.number}`} className="flex items-center flex-1 min-w-0">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg text-xl font-bold text-gray-700">
                    {surah.number}
                  </div>
                  <div className="ml-4 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      {surah.englishName}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">
                      {surah.englishNameTranslation}
                    </p>
                  </div>
                </Link>
                <div className="text-right ml-4">
                  <h3 className="text-xl font-arabic text-gray-800 mb-1 text-right">
                    {surah.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {surah.numberOfAyahs} Ayahs
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
