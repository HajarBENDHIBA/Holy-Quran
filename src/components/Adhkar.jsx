import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const Adhkar = () => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = (category, dhikr) => {
    const id = `${category.title}-${dhikr.title}`;
    if (isFavorite('adhkar', id)) {
      removeFavorite('adhkar', id);
    } else {
      addFavorite('adhkar', {
        id,
        type: 'adhkar',
        category: category.title,
        title: dhikr.title,
        arabic: dhikr.arabic,
        english: dhikr.english,
        reference: dhikr.reference
      });
    }
  };

  const categories = [
    {
      title: "Morning and Evening Adhkar",
      adhkar: [
        {
          title: "Morning Remembrance",
          arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
          english: "We have reached the morning and the dominion belongs to Allah. All praise is due to Allah. There is no deity but Allah alone, without any partners. To Him belongs the dominion and to Him belongs all praise, and He is over all things competent.",
          reference: "Sahih Muslim 2723"
        },
        {
          title: "Evening Remembrance",
          arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
          english: "We have reached the evening and the dominion belongs to Allah. All praise is due to Allah. There is no deity but Allah alone, without any partners. To Him belongs the dominion and to Him belongs all praise, and He is over all things competent.",
          reference: "Sahih Muslim 2723"
        },
        {
          title: "Morning Protection",
          arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
          english: "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.",
          reference: "Sunan al-Tirmidhi 3391"
        },
        {
          title: "Evening Protection",
          arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
          english: "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the destination.",
          reference: "Sunan al-Tirmidhi 3391"
        },
        {
          title: "Morning Tasbih",
          arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
          english: "Glory is to Allah and praise is to Him, according to the number of His creation, according to His pleasure, according to the weight of His Throne, and according to the ink of His words.",
          reference: "Sahih Muslim 2726"
        },
        {
          title: "Evening Tasbih",
          arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
          english: "Glory is to Allah and praise is to Him, according to the number of His creation, according to His pleasure, according to the weight of His Throne, and according to the ink of His words.",
          reference: "Sahih Muslim 2726"
        }
      ]
    },
    {
      title: "Home Adhkar",
      adhkar: [
        {
          title: "Entering Home",
          arabic: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَىٰ رَبِّنَا تَوَكَّلْنَا",
          english: "In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we place our trust.",
          reference: "Sunan Abu Dawood 5096"
        },
        {
          title: "Leaving Home",
          arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
          english: "In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.",
          reference: "Sunan Abu Dawood 5095"
        },
        {
          title: "Entering New Home",
          arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
          english: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
          reference: "Sahih Muslim 2708"
        },
        {
          title: "Leaving Home for Prayer",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِحَقِّ السَّائِلِينَ عَلَيْكَ، وَبِحَقِّ مَشْيِي هَذَا",
          english: "O Allah, I ask You by the right of those who ask You and by the right of this walking of mine.",
          reference: "Sunan Ibn Majah 925"
        }
      ]
    },
    {
      title: "Sleep Adhkar",
      adhkar: [
        {
          title: "Before Sleep",
          arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
          english: "In Your name, O Allah, I die and I live.",
          reference: "Sahih al-Bukhari 6324"
        },
        {
          title: "Upon Waking",
          arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
          english: "All praise is due to Allah who has given us life after having taken it from us and unto Him is the resurrection.",
          reference: "Sahih al-Bukhari 6312"
        },
        {
          title: "Sleep Protection",
          arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
          english: "O Allah, protect me from Your punishment on the day You resurrect Your servants.",
          reference: "Sunan Abu Dawood 5044"
        },
        {
          title: "Before Sleep Tasbih",
          arabic: "سُبْحَانَ اللَّهِ (33x) الْحَمْدُ لِلَّهِ (33x) اللَّهُ أَكْبَرُ (34x)",
          english: "Glory is to Allah (33x), All praise is due to Allah (33x), Allah is the Greatest (34x).",
          reference: "Sahih al-Bukhari 5362"
        }
      ]
    },
    {
      title: "Food and Drink Adhkar",
      adhkar: [
        {
          title: "Before Eating",
          arabic: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
          english: "In the name of Allah and upon the blessing of Allah.",
          reference: "Sunan Abu Dawood 3767"
        },
        {
          title: "After Eating",
          arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ، مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
          english: "All praise is due to Allah who fed me this and provided it for me, without any might or power from myself.",
          reference: "Sunan Abu Dawood 4023"
        },
        {
          title: "Breaking Fast",
          arabic: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
          english: "O Allah, for You I have fasted and with Your provision I have broken my fast.",
          reference: "Sunan Abu Dawood 2358"
        },
        {
          title: "Before Drinking Water",
          arabic: "بِسْمِ اللَّهِ، اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ",
          english: "In the name of Allah, O Allah, bless it for us and give us more of it.",
          reference: "Sunan Ibn Majah 3425"
        }
      ]
    },
    {
      title: "Mosque Adhkar",
      adhkar: [
        {
          title: "Entering Mosque",
          arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
          english: "O Allah, open for me the doors of Your mercy.",
          reference: "Sahih Muslim 713"
        },
        {
          title: "Leaving Mosque",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
          english: "O Allah, I ask You from Your bounty.",
          reference: "Sahih Muslim 713"
        },
        {
          title: "Entering Mosque for Friday Prayer",
          arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
          english: "O Allah, send blessings upon Muhammad and the family of Muhammad, and send blessings upon Muhammad and the family of Muhammad.",
          reference: "Sahih Muslim 713"
        }
      ]
    },
    {
      title: "Travel Adhkar",
      adhkar: [
        {
          title: "Beginning Journey",
          arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى",
          english: "O Allah, we ask You for righteousness and piety in this journey of ours, and we ask You for deeds which please You.",
          reference: "Sahih Muslim 1342"
        },
        {
          title: "Returning from Journey",
          arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
          english: "We return repentant, worshipping, praising our Lord.",
          reference: "Sahih al-Bukhari 3084"
        },
        {
          title: "Travel Protection",
          arabic: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ",
          english: "O Allah, we seek refuge in You from the hardships of travel, and from the sorrow of returning, and from the evil of the return in wealth and family.",
          reference: "Sahih Muslim 1342"
        }
      ]
    },
    {
      title: "Rain Adhkar",
      adhkar: [
        {
          title: "When It Rains",
          arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
          english: "O Allah, make it a beneficial rain.",
          reference: "Sahih al-Bukhari 1032"
        },
        {
          title: "After Rain",
          arabic: "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
          english: "We have been given rain by the grace of Allah and His mercy.",
          reference: "Sahih al-Bukhari 1038"
        }
      ]
    },
    {
      title: "Health Adhkar",
      adhkar: [
        {
          title: "When Sick",
          arabic: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَاسَ، اشْفِهِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
          english: "O Allah, Lord of mankind, remove the difficulty and bring about healing. You are the Healer. There is no healing but Your healing, a healing that leaves no illness.",
          reference: "Sahih al-Bukhari 5743"
        },
        {
          title: "Visiting the Sick",
          arabic: "لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ",
          english: "No harm, it is a purification, if Allah wills.",
          reference: "Sahih al-Bukhari 5656"
        }
      ]
    },
    {
      title: "Knowledge Adhkar",
      adhkar: [
        {
          title: "Before Studying",
          arabic: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا",
          english: "O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge.",
          reference: "Sunan Ibn Majah 251"
        },
        {
          title: "After Learning",
          arabic: "الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَٰذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللَّهُ",
          english: "All praise is due to Allah who has guided us to this, and we would not have been guided if Allah had not guided us.",
          reference: "Quran 7:43"
        }
      ]
    },
    {
      title: "Family Adhkar",
      adhkar: [
        {
          title: "For Children",
          arabic: "اللَّهُمَّ اجْعَلْهُ بَارًّا تَقِيًّا رَشِيدًا وَأَنْبِتْهُ فِي الْإِسْلَامِ نَبَاتًا حَسَنًا",
          english: "O Allah, make him righteous, pious, and wise, and cause him to grow up in Islam with good growth.",
          reference: "Musnad Ahmad 2/247"
        },
        {
          title: "For Parents",
          arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
          english: "My Lord, have mercy upon them as they brought me up [when I was] small.",
          reference: "Quran 17:24"
        }
      ]
    },
    {
      title: "Dua for Forgiveness",
      adhkar: [
        {
          title: "Seeking Forgiveness",
          arabic: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ، وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
          english: "O Allah, I have wronged myself greatly and none forgives sins but You, so grant me forgiveness from You and have mercy on me. You are the Forgiving, the Merciful.",
          reference: "Sahih al-Bukhari 834"
        },
        {
          title: "Istighfar",
          arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
          english: "I seek forgiveness from Allah, the Magnificent, the One whom there is no deity but He, the Living, the Sustainer, and I repent to Him.",
          reference: "Sunan Abu Dawood 1517"
        }
      ]
    },
    {
      title: "Dua for Guidance",
      adhkar: [
        {
          title: "Guidance and Righteousness",
          arabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ",
          english: "O Allah, guide me among those You have guided, pardon me among those You have pardoned, turn to me in friendship among those You have turned in friendship, and bless me in what You have bestowed, and save me from the evil of what You have decreed.",
          reference: "Sunan Abu Dawood 1425"
        },
        {
          title: "Guidance in Knowledge",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
          english: "O Allah, I ask You for beneficial knowledge, goodly provision, and acceptable deeds.",
          reference: "Sunan Ibn Majah 925"
        }
      ]
    },
    {
      title: "Dua for Patience",
      adhkar: [
        {
          title: "Patience in Adversity",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
          english: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.",
          reference: "Sahih al-Bukhari 6369"
        },
        {
          title: "Patience in Trials",
          arabic: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا",
          english: "O Allah, there is no ease except in that which You have made easy, and You make the difficulty, if You wish, easy.",
          reference: "Sunan Ibn Majah 3835"
        }
      ]
    },
    {
      title: "Dua for Protection",
      adhkar: [
        {
          title: "Protection from Evil",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ، وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ",
          english: "O Allah, I seek refuge in You from the evil of what I have done and the evil of what I have not done.",
          reference: "Sahih Muslim 2716"
        },
        {
          title: "Protection from Harm",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ، وَالْجُنُونِ، وَالْجُذَامِ، وَمِنْ سَيِّئِ الْأَسْقَامِ",
          english: "O Allah, I seek refuge in You from leprosy, madness, elephantiasis, and evil diseases.",
          reference: "Sunan Abu Dawood 1554"
        }
      ]
    },
    {
      title: "Dua for Success",
      adhkar: [
        {
          title: "Success in Affairs",
          arabic: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا",
          english: "O Allah, there is no ease except in that which You have made easy, and You make the difficulty, if You wish, easy.",
          reference: "Sunan Ibn Majah 3835"
        },
        {
          title: "Success in Work",
          arabic: "اللَّهُمَّ بَارِكْ لِي فِي مَا رَزَقْتَنِي، وَقِنِي عَذَابَ النَّارِ",
          english: "O Allah, bless me in what You have provided me and protect me from the punishment of the Fire.",
          reference: "Sunan Ibn Majah 925"
        }
      ]
    },
    {
      title: "Dua for Thankfulness",
      adhkar: [
        {
          title: "Gratitude to Allah",
          arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
          english: "O Allah, You are my Lord, there is no deity but You. You created me and I am Your servant, and I am faithful to my covenant and my promise to You as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me and I acknowledge my sin, so forgive me, for none forgives sins but You.",
          reference: "Sahih al-Bukhari 6306"
        },
        {
          title: "Thankfulness for Blessings",
          arabic: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
          english: "O Allah, whatever blessing has been received by me or anyone of Your creation is from You alone, You have no partner. So for You is all praise and unto You all thanks.",
          reference: "Sunan Abu Dawood 5073"
        }
      ]
    },
    {
      title: "Dua for Repentance",
      adhkar: [
        {
          title: "Sincere Repentance",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ التَّوْبَةَ وَالْمُسْتَغْفِرِينَ، وَأَسْأَلُكَ الْقَلْبَ السَّلِيمَ",
          english: "O Allah, I ask You for repentance and those who seek forgiveness, and I ask You for a sound heart.",
          reference: "Musnad Ahmad 1/170"
        },
        {
          title: "Turning to Allah",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكَسَلِ وَالْهَرَمِ، وَالْمَأْثَمِ وَالْمَغْرَمِ، وَمِنْ فِتْنَةِ الْقَبْرِ، وَعَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ النَّارِ وَعَذَابِ النَّارِ، وَمِنْ شَرِّ فِتْنَةِ الْغِنَى، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْفَقْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، اللَّهُمَّ اغْسِلْ عَنْيَ خَطَايَايَ بِمَاءِ الثَّلْجِ وَالْبَرَدِ، وَنَقِّ قَلْبِي مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الْأَبْيَضَ مِنَ الدَّنَسِ، وَبَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ",
          english: "O Allah, I seek refuge in You from laziness and old age, from sin and debt, from the trial of the grave and the punishment of the grave, from the trial of the Fire and the punishment of the Fire, from the evil of the trial of wealth, and I seek refuge in You from the trial of poverty, and I seek refuge in You from the trial of the False Messiah. O Allah, wash away my sins with the water of snow and hail, and cleanse my heart of sin as a white garment is cleansed of filth, and put a great distance between me and my sins, as great as the distance You have made between the East and West.",
          reference: "Sahih al-Bukhari 6014"
        }
      ]
    },
    {
      title: "Dua for Strength",
      adhkar: [
        {
          title: "Strength in Faith",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
          english: "O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.",
          reference: "Sahih Muslim 2721"
        },
        {
          title: "Strength in Trials",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْهَرَمِ، وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ",
          english: "O Allah, I seek refuge in You from incapacity and laziness, from cowardice and old age, and from miserliness. I seek refuge in You from the punishment of the grave, and from the trials of life and death.",
          reference: "Sahih al-Bukhari 6367"
        }
      ]
    },
    {
      title: "Dua for Peace",
      adhkar: [
        {
          title: "Peace of Mind",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ",
          english: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.",
          reference: "Sahih al-Bukhari 6369"
        },
        {
          title: "Peace in Heart",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نَفْسًا بِكَ مُطْمَئِنَّةً، تُؤْمِنُ بِلِقَائِكَ، وَتَرْضَى بِقَضَائِكَ، وَتَقْنَعُ بِعَطَائِكَ",
          english: "O Allah, I ask You for a soul that is satisfied with You, that believes in meeting You, that is pleased with Your decree, and that is content with Your provision.",
          reference: "Musnad Ahmad 1/391"
        }
      ]
    },
    {
      title: "Dua for Blessings",
      adhkar: [
        {
          title: "Blessings in Life",
          arabic: "اللَّهُمَّ بَارِكْ لِي فِي مَا رَزَقْتَنِي، وَقِنِي عَذَابَ النَّارِ",
          english: "O Allah, bless me in what You have provided me and protect me from the punishment of the Fire.",
          reference: "Sunan Ibn Majah 925"
        },
        {
          title: "Blessings in Family",
          arabic: "اللَّهُمَّ بَارِكْ لِي فِي أَهْلِي، وَبَارِكْ لَهُمْ فِيَّ، اللَّهُمَّ ارْزُقْنِي مِنْهُمْ، وَارْزُقْهُمْ مِنِّي",
          english: "O Allah, bless me in my family and bless them in me. O Allah, provide for me through them and provide for them through me.",
          reference: "Musnad Ahmad 2/167"
        }
      ]
    }
  ];

  return (
    <div className="pt-20 pb-12">
      <h1 className="text-5xl font-bold text-center my-12 text-[#2C646C]">Daily Adhkar & Remembrance</h1>
      
      <div className="px-6">
        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4 text-center text-[#3F8D98] border-b border-gray-200 pb-3">{category.title}</h2>
                <div className="grid grid-cols-1 gap-4">
                  {category.adhkar.map((dhikr, dhikrIndex) => {
                    const id = `${category.title}-${dhikr.title}`;
                    const isFav = isFavorite('adhkar', id);
                    return (
                      <div key={dhikrIndex} className="border-b last:border-b-0 border-gray-100 pb-4 last:pb-0">
                        <div className="mb-3">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold text-center text-[#5FA8B0]">
                              {dhikr.title}
                            </h3>
                            <button
                              onClick={() => handleFavoriteClick(category, dhikr)}
                              className="text-gray-300 hover:text-red-500 transition-colors duration-200"
                              aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill={isFav ? "currentColor" : "none"}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                            </button>
                          </div>
                          <p className="text-xl font-arabic text-gray-800 mb-3 text-right leading-loose">
                            {dhikr.arabic}
                          </p>
                          <p className="text-gray-600 mb-2">
                            {dhikr.english}
                          </p>
                          <p className="text-sm text-gray-500 italic">
                            {dhikr.reference}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adhkar;