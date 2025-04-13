import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getSurahDetails, RECITERS } from "../services/quranService";

const SurahDetails = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(true);
  const [selectedReciter, setSelectedReciter] = useState("ar.alafasy");
  const audioRef = useRef(null);

  useEffect(() => {
    fetchSurahDetails();
  }, [id, selectedReciter]);

  const fetchSurahDetails = async () => {
    setIsLoading(true);
    setAudioError(false);
    setIsAudioLoading(true);
    try {
      const data = await getSurahDetails(id, selectedReciter);
      setSurah(data);
    } catch (error) {
      console.error("Error fetching surah details:", error);
      setAudioError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReciterChange = (e) => {
    setSelectedReciter(e.target.value);
  };

  const handleAudioError = () => {
    setAudioError(true);
    setIsAudioLoading(false);
    console.error("Error loading audio");
  };

  const handleAudioLoaded = () => {
    setIsAudioLoading(false);
    setAudioError(false);
  };

  const getCurrentReciterName = () => {
    const reciter = RECITERS.find(r => r.id === selectedReciter);
    return reciter ? reciter.name : "Mishary Alafasy";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-20">
      {surah ? (
        <div className="max-w-4xl mx-auto px-4">
          {/* Surah Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-arabic text-[#2c3e50] mb-2">{surah.name}</h1>
            <h2 className="text-2xl text-gray-600">{surah.englishName} ({surah.englishNameTranslation})</h2>
            <p className="text-gray-500 mt-2">Surah {surah.number} • {surah.numberOfAyahs} Ayahs</p>
          </div>

          {/* Audio Player */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-[#2c3e50]">
                  Full Surah Audio
                </h3>
                <p className="text-gray-600 text-sm">
                  Recited by {getCurrentReciterName()}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={selectedReciter}
                  onChange={handleReciterChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {RECITERS.map((reciter) => (
                    <option key={reciter.id} value={reciter.id}>
                      {reciter.name}
                    </option>
                  ))}
                </select>
                {isAudioLoading && (
                  <span className="text-sm text-gray-500">Loading audio...</span>
                )}
              </div>
            </div>
            <audio 
              ref={audioRef}
              controls 
              className="w-full rounded-lg"
              onError={handleAudioError}
              onLoadedData={handleAudioLoaded}
              preload="auto"
              src={`https://cdn.islamic.network/quran/audio-surah/128/${selectedReciter}/${id}.mp3`}
            >
              Your browser does not support the audio element.
            </audio>
            {audioError && (
              <p className="text-red-500 text-sm mt-2">
                Error loading audio. Please check your internet connection.
              </p>
            )}
          </div>

          {/* Quran Text */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="space-y-8">
              {surah.ayahs.map((ayah) => (
                <div key={ayah.number} className="relative group">
                  {/* Ayah Number */}
                  <div className="absolute -left-4 -top-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#2c3e50] text-white rounded-full text-sm">
                      {ayah.number}
                    </div>
                  </div>
                  
                  {/* Arabic Text */}
                  <p className="text-3xl font-arabic leading-loose text-right text-[#2c3e50] mb-4">
                    {ayah.text}
                  </p>
                  
                  {/* Translation */}
                  <div className="border-l-4 border-[#2c3e50] pl-4 ml-4">
                    <p className="text-gray-600 text-lg leading-relaxed italic">
                      {ayah.translation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-2xl text-gray-600">
            {isLoading ? "Loading..." : "Error loading surah details"}
          </p>
        </div>
      )}
    </div>
  );
};

export default SurahDetails;
