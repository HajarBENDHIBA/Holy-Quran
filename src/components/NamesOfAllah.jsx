import { useState } from 'react';

const NamesOfAllah = () => {
  const [selectedName, setSelectedName] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const names = [
    { arabic: 'الرَّحْمَنُ', english: 'Ar-Rahman', meaning: 'The Most Gracious' },
    { arabic: 'الرَّحِيمُ', english: 'Ar-Raheem', meaning: 'The Most Merciful' },
    { arabic: 'الْمَلِكُ', english: 'Al-Malik', meaning: 'The King' },
    { arabic: 'الْقُدُّوسُ', english: 'Al-Quddus', meaning: 'The Most Sacred' },
    { arabic: 'السَّلَامُ', english: 'As-Salam', meaning: 'The Source of Peace' },
    { arabic: 'الْمُؤْمِنُ', english: 'Al-Mu\'min', meaning: 'The Guardian of Faith' },
    { arabic: 'الْمُهَيْمِنُ', english: 'Al-Muhaymin', meaning: 'The Protector' },
    { arabic: 'الْعَزِيزُ', english: 'Al-Aziz', meaning: 'The Mighty' },
    { arabic: 'الْجَبَّارُ', english: 'Al-Jabbar', meaning: 'The Compeller' },
    { arabic: 'الْمُتَكَبِّرُ', english: 'Al-Mutakabbir', meaning: 'The Supreme' },
    { arabic: 'الْخَالِقُ', english: 'Al-Khaliq', meaning: 'The Creator' },
    { arabic: 'الْبَارِئُ', english: 'Al-Bari', meaning: 'The Maker of Order' },
    { arabic: 'الْمُصَوِّرُ', english: 'Al-Musawwir', meaning: 'The Shaper of Beauty' },
    { arabic: 'الْغَفَّارُ', english: 'Al-Ghaffar', meaning: 'The Forgiving' },
    { arabic: 'الْقَهَّارُ', english: 'Al-Qahhar', meaning: 'The Subduer' },
    { arabic: 'الْوَهَّابُ', english: 'Al-Wahhab', meaning: 'The Giver of All' },
    { arabic: 'الرَّزَّاقُ', english: 'Ar-Razzaq', meaning: 'The Sustainer' },
    { arabic: 'الْفَتَّاحُ', english: 'Al-Fattah', meaning: 'The Opener' },
    { arabic: 'الْعَلِيمُ', english: 'Al-Alim', meaning: 'The Knower of All' },
    { arabic: 'الْقَابِضُ', english: 'Al-Qabid', meaning: 'The Constrictor' },
    { arabic: 'الْبَاسِطُ', english: 'Al-Basit', meaning: 'The Reliever' },
    { arabic: 'الْخَافِضُ', english: 'Al-Khafid', meaning: 'The Abaser' },
    { arabic: 'الرَّافِعُ', english: 'Ar-Rafi', meaning: 'The Exalter' },
    { arabic: 'الْمُعِزُّ', english: 'Al-Mu\'izz', meaning: 'The Bestower of Honors' },
    { arabic: 'الْمُذِلُّ', english: 'Al-Mudhill', meaning: 'The Humiliator' },
    { arabic: 'السَّمِيعُ', english: 'As-Sami', meaning: 'The Hearer of All' },
    { arabic: 'الْبَصِيرُ', english: 'Al-Basir', meaning: 'The Seer of All' },
    { arabic: 'الْحَكَمُ', english: 'Al-Hakam', meaning: 'The Judge' },
    { arabic: 'الْعَدْلُ', english: 'Al-Adl', meaning: 'The Just' },
    { arabic: 'اللَّطِيفُ', english: 'Al-Latif', meaning: 'The Subtle One' },
    { arabic: 'الْخَبِيرُ', english: 'Al-Khabir', meaning: 'The All-Aware' },
    { arabic: 'الْحَلِيمُ', english: 'Al-Halim', meaning: 'The Forbearing' },
    { arabic: 'الْعَظِيمُ', english: 'Al-Azim', meaning: 'The Magnificent' },
    { arabic: 'الْغَفُورُ', english: 'Al-Ghafur', meaning: 'The Forgiving' },
    { arabic: 'الشَّكُورُ', english: 'Ash-Shakur', meaning: 'The Grateful' },
    { arabic: 'الْعَلِيُّ', english: 'Al-Ali', meaning: 'The Highest' },
    { arabic: 'الْكَبِيرُ', english: 'Al-Kabir', meaning: 'The Greatest' },
    { arabic: 'الْحَفِيظُ', english: 'Al-Hafiz', meaning: 'The Preserver' },
    { arabic: 'المُقِيتُ', english: 'Al-Muqit', meaning: 'The Nourisher' },
    { arabic: 'الْحَسِيبُ', english: 'Al-Hasib', meaning: 'The Reckoner' },
    { arabic: 'الْجَلِيلُ', english: 'Al-Jalil', meaning: 'The Majestic' },
    { arabic: 'الْكَرِيمُ', english: 'Al-Karim', meaning: 'The Bountiful' },
    { arabic: 'الرَّقِيبُ', english: 'Ar-Raqib', meaning: 'The Watchful One' },
    { arabic: 'الْمُجِيبُ', english: 'Al-Mujib', meaning: 'The Responder to Prayer' },
    { arabic: 'الْوَاسِعُ', english: 'Al-Wasi', meaning: 'The All-Comprehending' },
    { arabic: 'الْحَكِيمُ', english: 'Al-Hakim', meaning: 'The Perfectly Wise' },
    { arabic: 'الْوَدُودُ', english: 'Al-Wadud', meaning: 'The Loving One' },
    { arabic: 'الْمَجِيدُ', english: 'Al-Majid', meaning: 'The Most Glorious One' },
    { arabic: 'الْبَاعِثُ', english: 'Al-Ba\'ith', meaning: 'The Resurrector' },
    { arabic: 'الشَّهِيدُ', english: 'Ash-Shahid', meaning: 'The Witness' },
    { arabic: 'الْحَقُّ', english: 'Al-Haqq', meaning: 'The Truth' },
    { arabic: 'الْوَكِيلُ', english: 'Al-Wakil', meaning: 'The Trustee' },
    { arabic: 'الْقَوِيُّ', english: 'Al-Qawi', meaning: 'The Possessor of All Strength' },
    { arabic: 'الْمَتِينُ', english: 'Al-Matin', meaning: 'The Forceful One' },
    { arabic: 'الْوَلِيُّ', english: 'Al-Wali', meaning: 'The Protecting Friend' },
    { arabic: 'الْحَمِيدُ', english: 'Al-Hamid', meaning: 'The Praiseworthy' },
    { arabic: 'الْمُحْصِي', english: 'Al-Muhsi', meaning: 'The Appraiser' },
    { arabic: 'الْمُبْدِئُ', english: 'Al-Mubdi', meaning: 'The Originator' },
    { arabic: 'الْمُعِيدُ', english: 'Al-Mu\'id', meaning: 'The Restorer' },
    { arabic: 'الْمُحْيِي', english: 'Al-Muhyi', meaning: 'The Giver of Life' },
    { arabic: 'الْمُمِيتُ', english: 'Al-Mumit', meaning: 'The Taker of Life' },
    { arabic: 'الْحَيُّ', english: 'Al-Hayy', meaning: 'The Ever Living One' },
    { arabic: 'الْقَيُّومُ', english: 'Al-Qayyum', meaning: 'The Self-Existing One' },
    { arabic: 'الْوَاجِدُ', english: 'Al-Wajid', meaning: 'The Finder' },
    { arabic: 'الْمَاجِدُ', english: 'Al-Majid', meaning: 'The Glorious' },
    { arabic: 'الْوَاحِدُ', english: 'Al-Wahid', meaning: 'The Unique' },
    { arabic: 'الْأَحَدُ', english: 'Al-Ahad', meaning: 'The One' },
    { arabic: 'الصَّمَدُ', english: 'As-Samad', meaning: 'The Satisfier of All Needs' },
    { arabic: 'الْقَادِرُ', english: 'Al-Qadir', meaning: 'The All Powerful' },
    { arabic: 'الْمُقْتَدِرُ', english: 'Al-Muqtadir', meaning: 'The Creator of All Power' },
    { arabic: 'الْمُقَدِّمُ', english: 'Al-Muqaddim', meaning: 'The Expediter' },
    { arabic: 'الْمُؤَخِّرُ', english: 'Al-Mu\'akhkhir', meaning: 'The Delayer' },
    { arabic: 'الْأَوَّلُ', english: 'Al-Awwal', meaning: 'The First' },
    { arabic: 'الْآخِرُ', english: 'Al-Akhir', meaning: 'The Last' },
    { arabic: 'الظَّاهِرُ', english: 'Az-Zahir', meaning: 'The Manifest' },
    { arabic: 'الْبَاطِنُ', english: 'Al-Batin', meaning: 'The Hidden One' },
    { arabic: 'الْوَالِي', english: 'Al-Wali', meaning: 'The Protecting Friend' },
    { arabic: 'الْمُتَعَالِي', english: 'Al-Muta\'ali', meaning: 'The Supreme One' },
    { arabic: 'الْبَرُّ', english: 'Al-Barr', meaning: 'The Doer of Good' },
    { arabic: 'التَّوَّابُ', english: 'At-Tawwab', meaning: 'The Guide to Repentance' },
    { arabic: 'الْمُنْتَقِمُ', english: 'Al-Muntaqim', meaning: 'The Avenger' },
    { arabic: 'الْعَفُوُّ', english: 'Al-Afu', meaning: 'The Forgiver and Hider of Faults' },
    { arabic: 'الرَّؤُوفُ', english: 'Ar-Ra\'uf', meaning: 'The Clement' },
    { arabic: 'مَالِكُ الْمُلْكِ', english: 'Malik-ul-Mulk', meaning: 'The Owner of All' },
    { arabic: 'ذُو الْجَلَالِ وَالْإِكْرَامِ', english: 'Dhu-al-Jalali wa-al-Ikram', meaning: 'The Lord of Majesty and Generosity' },
    { arabic: 'الْمُقْسِطُ', english: 'Al-Muqsit', meaning: 'The Equitable One' },
    { arabic: 'الْجَامِعُ', english: 'Al-Jami', meaning: 'The Gatherer' },
    { arabic: 'الْغَنِيُّ', english: 'Al-Ghani', meaning: 'The Rich One' },
    { arabic: 'الْمُغْنِي', english: 'Al-Mughni', meaning: 'The Enricher' },
    { arabic: 'الْمَانِعُ', english: 'Al-Mani', meaning: 'The Preventer of Harm' },
    { arabic: 'الضَّارُّ', english: 'Ad-Darr', meaning: 'The Creator of The Harmful' },
    { arabic: 'النَّافِعُ', english: 'An-Nafi', meaning: 'The Creator of Good' },
    { arabic: 'النُّورُ', english: 'An-Nur', meaning: 'The Light' },
    { arabic: 'الْهَادِي', english: 'Al-Hadi', meaning: 'The Guide' },
    { arabic: 'الْبَدِيعُ', english: 'Al-Badi', meaning: 'The Originator' },
    { arabic: 'الْبَاقِي', english: 'Al-Baqi', meaning: 'The Everlasting One' },
    { arabic: 'الْوَارِثُ', english: 'Al-Warith', meaning: 'The Inheritor of All' },
    { arabic: 'الرَّشِيدُ', english: 'Ar-Rashid', meaning: 'The Righteous Teacher' },
    { arabic: 'الصَّبُورُ', english: 'As-Sabur', meaning: 'The Patient One' }
  ];

  const handleNameClick = (name) => {
    setSelectedName(name);
    setIsPlaying(true);
    // Play audio logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#2C646C] mb-8">
          99 Names of Allah
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {names.map((name, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleNameClick(name)}
            >
              <div className="text-center">
                <h2 className="text-3xl font-arabic text-[#2c3e50] mb-2">
                  {name.arabic}
                </h2>
                <h3 className="text-xl font-semibold text-[#3F8D98] mb-2">
                  {name.english}
                </h3>
                <p className="text-gray-600">
                  {name.meaning}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NamesOfAllah; 