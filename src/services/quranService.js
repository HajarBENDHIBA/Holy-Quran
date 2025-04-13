import axios from "axios";

const API_URL = "https://api.alquran.cloud/v1";

// List of available reciters with their IDs and names
export const RECITERS = [
  { id: "ar.alafasy", name: "Mishary Alafasy" },
  { id: "ar.abdullahbasfar", name: "Abdullah Basfar" },
  { id: "ar.minshawi", name: "Mohammed Siddiq Al-Minshawi" },
  { id: "ar.ahmedajamy", name: "Ahmed Al-Ajamy" },
  { id: "ar.mahermuaiqly", name: "Maher Al-Muaiqly" },
  { id: "ar.ghamidy", name: "Saad Al-Ghamidy" },
  { id: "ar.husary", name: "Mahmoud Khalil Al-Husary" },
  { id: "ar.abdurrahmaansudais", name: "Abdur-Rahman As-Sudais" }
];

export const getSurahs = async () => {
  const response = await axios.get(`${API_URL}/surah`);
  return response.data.data;
};

export const getSurahDetails = async (surahId, reciterId = "ar.alafasy") => {
  try {
    // Get the text, translation, and audio
    const [arabicResponse, englishResponse] = await Promise.all([
      axios.get(`${API_URL}/surah/${surahId}/${reciterId}`),
      axios.get(`${API_URL}/surah/${surahId}/en.sahih`)
    ]);

    const arabicData = arabicResponse.data.data;
    const englishData = englishResponse.data.data;

    // Generate the audio URL
    const audioUrl = `https://cdn.islamic.network/quran/audio/128/${reciterId}/${surahId}.mp3`;

    // Combine the data
    return {
      ...arabicData,
      fullAudioUrl: audioUrl,
      ayahs: arabicData.ayahs.map((ayah, index) => ({
        ...ayah,
        translation: englishData.ayahs[index].text
      }))
    };
  } catch (error) {
    console.error("Error fetching surah details:", error);
    throw error;
  }
};
