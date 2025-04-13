import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const Duas = () => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = (dua) => {
    const id = dua.title;
    if (isFavorite('duas', id)) {
      removeFavorite('duas', id);
    } else {
      addFavorite('duas', {
        id,
        type: 'duas',
        title: dua.title,
        arabic: dua.arabic,
        english: dua.english,
        reference: dua.reference
      });
    }
  };

  const duas = [
    {
      title: "Dua for Good in This World and the Hereafter",
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      english: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
      reference: "Quran 2:201"
    },
    {
      title: "Dua for Steadfastness in Faith",
      arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
      english: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
      reference: "Quran 3:8"
    },
    {
      title: "Dua for Patience and Victory",
      arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
      english: "Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.",
      reference: "Quran 2:250"
    },
    {
      title: "Dua for Forgiveness and Righteous Death",
      arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ",
      english: "Our Lord, forgive us our sins and remove from us our misdeeds and cause us to die with the righteous.",
      reference: "Quran 3:193"
    },
    {
      title: "Dua for Protection from the Fire",
      arabic: "رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ",
      english: "Our Lord, You did not create this aimlessly; exalted are You [above such a thing]; then protect us from the punishment of the Fire.",
      reference: "Quran 3:191"
    },
    {
      title: "Dua for Forgiveness and Mercy",
      arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
      english: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
      reference: "Quran 7:23"
    },
    {
      title: "Dua for Light and Forgiveness",
      arabic: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      english: "Our Lord, perfect for us our light and forgive us. Indeed, You are over all things competent.",
      reference: "Quran 66:8"
    },
    {
      title: "Dua for Righteous Family",
      arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
      english: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.",
      reference: "Quran 25:74"
    },
    {
      title: "Dua for Protection from Disbelievers",
      arabic: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا ۖ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
      english: "Our Lord, do not make us a trial for those who have disbelieved and forgive us, our Lord. Indeed, You are the Exalted in Might, the Wise.",
      reference: "Quran 60:5"
    },
    {
      title: "Dua for Reliance on Allah",
      arabic: "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
      english: "Our Lord, upon You we have relied, and to You we have returned, and to You is the destination.",
      reference: "Quran 60:4"
    },
    {
      title: "Dua for Guidance and Piety",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
      english: "O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.",
      reference: "Sahih Muslim 2721"
    },
    {
      title: "Dua for Protection from Worries",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
      english: "O Allah, I seek refuge in You from anxiety and sorrow, and I seek refuge in You from weakness and laziness, and I seek refuge in You from cowardice and miserliness, and I seek refuge in You from being overcome by debt and overpowered by men.",
      reference: "Sahih al-Bukhari 6369"
    },
    {
      title: "Dua for Beneficial Knowledge",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
      english: "O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.",
      reference: "Sunan Ibn Majah 925"
    },
    {
      title: "Dua Following the Prophet's Example",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
      english: "O Allah, I ask You for the good that Your Prophet Muhammad (peace be upon him) asked You for, and I seek refuge in You from the evil from which Your Prophet Muhammad (peace be upon him) sought refuge.",
      reference: "Sunan Ibn Majah 3846"
    },
    {
      title: "Dua for Pardon and Well-being",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
      english: "O Allah, I ask You for pardon and well-being in this life and the next.",
      reference: "Sunan Abu Dawood 5074"
    },
    {
      title: "Dua for Good Deeds and Mercy",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ فِعْلَ الْخَيْرَاتِ، وَتَرْكَ الْمُنْكَرَاتِ، وَحُبَّ الْمَسَاكِينِ، وَأَنْ تَغْفِرَ لِي وَتَرْحَمَنِي",
      english: "O Allah, I ask You to enable me to do good deeds, abandon evil deeds, love the poor, and forgive me and have mercy on me.",
      reference: "Sunan al-Tirmidhi 3233"
    },
    {
      title: "Dua for Allah's Pleasure and Paradise",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ، وَأَعُوذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ",
      english: "O Allah, I ask You for Your pleasure and Paradise, and I seek refuge in You from Your displeasure and the Fire.",
      reference: "Sunan Abu Dawood 792"
    },
    {
      title: "Dua for Guidance and Uprightness",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالسَّدَادَ",
      english: "O Allah, I ask You for guidance and uprightness.",
      reference: "Sahih Muslim 2725"
    },
    {
      title: "Dua for Protection from Evil Deeds",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ",
      english: "O Allah, I seek refuge in You from the evil of what I have done and the evil of what I have not done.",
      reference: "Sahih Muslim 2716"
    },
    {
      title: "Dua for Morning and Evening",
      arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
      english: "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.",
      reference: "Sunan al-Tirmidhi 3391"
    },
    {
      title: "Dua for Entering the Mosque",
      arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
      english: "O Allah, open for me the doors of Your mercy.",
      reference: "Sahih Muslim 713"
    },
    {
      title: "Dua for Leaving the Mosque",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
      english: "O Allah, I ask You from Your bounty.",
      reference: "Sahih Muslim 713"
    },
    {
      title: "Dua for Traveling",
      arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى",
      english: "O Allah, we ask You for righteousness and piety in this journey of ours, and we ask You for deeds which please You.",
      reference: "Sahih Muslim 1342"
    },
    {
      title: "Dua for Entering a New City",
      arabic: "اللَّهُمَّ رَبَّ السَّمَاوَاتِ السَّبْعِ وَمَا أَظْلَلْنَ، وَرَبَّ الْأَرَضِينَ السَّبْعِ وَمَا أَقْلَلْنَ، وَرَبَّ الشَّيَاطِينِ وَمَا أَضْلَلْنَ، وَرَبَّ الرِّيَاحِ وَمَا ذَرَيْنَ، أَسْأَلُكَ خَيْرَ هَذِهِ الْقَرْيَةِ وَخَيْرَ أَهْلِهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ أَهْلِهَا",
      english: "O Allah, Lord of the seven heavens and what they shade, Lord of the seven earths and what they carry, Lord of the devils and those whom they misguide, Lord of the winds and what they blow, I ask You for the good of this city and the good of its people, and I seek refuge in You from its evil and the evil of its people.",
      reference: "Sunan Ibn Majah 3886"
    },
    {
      title: "Dua for Rain",
      arabic: "اللَّهُمَّ اسْقِنَا غَيْثًا مُغِيثًا مَرِيئًا مَرِيعًا، نَافِعًا غَيْرَ ضَارٍّ، عَاجِلًا غَيْرَ آجِلٍ",
      english: "O Allah, give us a saving rain, good and productive, general and heavy, now and not later.",
      reference: "Sunan Abu Dawood 1169"
    },
    {
      title: "Dua for Protection from Evil Eye",
      arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
      english: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
      reference: "Sahih Muslim 2708"
    },
    {
      title: "Dua for Breaking Fast",
      arabic: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
      english: "O Allah, for You I have fasted and with Your provision I have broken my fast.",
      reference: "Sunan Abu Dawood 2358"
    },
    {
      title: "Dua for Entering the Market",
      arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لَا يَمُوتُ، فِي يَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      english: "There is no god but Allah, alone, without partner. To Him belongs the dominion and to Him belongs all praise. He gives life and causes death, and He is living and does not die. In His hand is all good, and He has power over all things.",
      reference: "Sunan al-Tirmidhi 3428"
    },
    {
      title: "Dua for Seeking Knowledge",
      arabic: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا",
      english: "O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge.",
      reference: "Sunan Ibn Majah 251"
    },
    {
      title: "Dua for Protection from Poverty",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ، وَالْقِلَّةِ، وَالذِّلَّةِ، وَأَعُوذُ بِكَ مِنْ أَنْ أَظْلِمَ أَوْ أُظْلَمَ",
      english: "O Allah, I seek refuge in You from poverty, scarcity, and humiliation, and I seek refuge in You from oppressing or being oppressed.",
      reference: "Sunan Abu Dawood 1544"
    },
    {
      title: "Dua for Good Character",
      arabic: "اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الْأَخْلَاقِ، لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لَا يَصْرِفُ عَنِّي سَيِّئَهَا إِلَّا أَنْتَ",
      english: "O Allah, guide me to the best of manners, for none can guide to the best of them but You, and turn me away from bad manners, for none can turn me away from them but You.",
      reference: "Sahih Muslim 771"
    },
    {
      title: "Dua for Protection from Calamities",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ",
      english: "O Allah, I seek refuge in You from the removal of Your blessing, the change of Your protection, the suddenness of Your punishment, and all Your displeasure.",
      reference: "Sahih Muslim 2739"
    },
    {
      title: "Dua for Protection from Diseases",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ، وَالْجُنُونِ، وَالْجُذَامِ، وَمِنْ سَيِّئِ الْأَسْقَامِ",
      english: "O Allah, I seek refuge in You from leprosy, madness, elephantiasis, and evil diseases.",
      reference: "Sunan Abu Dawood 1554"
    },
    {
      title: "Dua for Protection from Debt",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ",
      english: "O Allah, I seek refuge in You from sin and debt.",
      reference: "Sahih al-Bukhari 832"
    },
    {
      title: "Dua for Protection from Hypocrisy",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ النِّفَاقِ، وَالشِّقَاقِ، وَسُوءِ الْأَخْلَاقِ",
      english: "O Allah, I seek refuge in You from hypocrisy, discord, and bad manners.",
      reference: "Sunan Abu Dawood 1545"
    },
    {
      title: "Dua for Protection from Cowardice",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوذُ بِكَ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ",
      english: "O Allah, I seek refuge in You from cowardice, I seek refuge in You from being brought back to a feeble age, I seek refuge in You from the trials of this world, and I seek refuge in You from the punishment of the grave.",
      reference: "Sahih al-Bukhari 2822"
    },
    {
      title: "Dua for Protection from Laziness",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَالْهَرَمِ، وَعَذَابِ الْقَبْرِ",
      english: "O Allah, I seek refuge in You from incapacity, laziness, cowardice, miserliness, old age, and the punishment of the grave.",
      reference: "Sahih al-Bukhari 6367"
    },
    {
      title: "Dua for Protection from Oppression",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ، وَدَرَكِ الشَّقَاءِ، وَسُوءِ الْقَضَاءِ، وَشَمَاتَةِ الْأَعْدَاءِ",
      english: "O Allah, I seek refuge in You from the severity of calamity, from the misery of destruction, from the evil of fate, and from the malicious rejoicing of enemies.",
      reference: "Sahih al-Bukhari 6347"
    },
    {
      title: "Dua for Protection from Poverty and Need",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ، وَالْفَاقَةِ، وَالذِّلَّةِ، وَأَعُوذُ بِكَ مِنْ أَنْ أَظْلِمَ أَوْ أُظْلَمَ",
      english: "O Allah, I seek refuge in You from poverty, need, and humiliation, and I seek refuge in You from oppressing or being oppressed.",
      reference: "Sunan Abu Dawood 1544"
    },
    {
      title: "Dua for Protection from Evil Thoughts",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
      english: "O Allah, I seek refuge in You from anxiety and sorrow, from incapacity and laziness, from miserliness and cowardice, from being overcome by debt and overpowered by men.",
      reference: "Sahih al-Bukhari 6369"
    },
    {
      title: "Dua for Protection from Bad Dreams",
      arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَنْ يَحْضُرُونِ",
      english: "I seek refuge in the perfect words of Allah from His anger and punishment, from the evil of His slaves, and from the evil suggestions of the devils and from their presence.",
      reference: "Sunan Abu Dawood 3893"
    },
    {
      title: "Dua for Protection from Evil People",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ جِبْرِيلَ، وَمِنْ شَرِّ مِيكَائِيلَ، وَمِنْ شَرِّ إِسْرَافِيلَ، وَمِنْ شَرِّ عَزْرَائِيلَ، وَمِنْ شَرِّ مَلَكِ الْمَوْتِ، وَمِنْ شَرِّ الْمَلَائِكَةِ الْمُقَرَّبِينَ",
      english: "O Allah, I seek refuge in You from the evil of Jibreel, from the evil of Mika'il, from the evil of Israfeel, from the evil of Azraeel, from the evil of the Angel of Death, and from the evil of the noble angels.",
      reference: "Musnad Ahmad 3/120"
    },
    {
      title: "Dua for Protection from Evil Jinn",
      arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ الَّتِي لَا يُجَاوِزُهُنَّ بَرٌّ وَلَا فَاجِرٌ مِنْ شَرِّ مَا خَلَقَ، وَبَرَأَ، وَذَرَأَ، وَمِنْ شَرِّ مَا يَنْزِلُ مِنَ السَّمَاءِ، وَمِنْ شَرِّ مَا يَعْرُجُ فِيهَا، وَمِنْ شَرِّ مَا ذَرَأَ فِي الْأَرْضِ، وَمِنْ شَرِّ مَا يَخْرُجُ مِنْهَا، وَمِنْ شَرِّ فِتَنِ اللَّيْلِ وَالنَّهَارِ، وَمِنْ شَرِّ كُلِّ طَارِقٍ إِلَّا طَارِقًا يَطْرُقُ بِخَيْرٍ يَا رَحْمَنُ",
      english: "I seek refuge in the perfect words of Allah, which no righteous or wicked person can surpass, from the evil of what He has created, brought forth, and made, from the evil of what descends from the heaven, from the evil of what ascends to it, from the evil of what He has scattered in the earth, from the evil of what comes forth from it, from the evil of the trials of night and day, and from the evil of every visitor that comes at night, except the visitor who comes with good, O Most Merciful.",
      reference: "Musnad Ahmad 3/419"
    },
    {
      title: "Dua for Protection from Evil Eye",
      arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
      english: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
      reference: "Sahih Muslim 2708"
    },
    {
      title: "Dua for Protection from Evil Tongue",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ سَمْعِي، وَمِنْ شَرِّ بَصَرِي، وَمِنْ شَرِّ لِسَانِي، وَمِنْ شَرِّ قَلْبِي، وَمِنْ شَرِّ مَنِيِّي",
      english: "O Allah, I seek refuge in You from the evil of my hearing, from the evil of my seeing, from the evil of my tongue, from the evil of my heart, and from the evil of my semen.",
      reference: "Sunan Abu Dawood 1551"
    },
    {
      title: "Dua for Protection from Evil Neighbors",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَارِ السُّوءِ فِي دَارِ الْمُقَامِ، فَإِنَّ جَارَ الْبَادِيَةِ يَتَحَوَّلُ",
      english: "O Allah, I seek refuge in You from an evil neighbor in the permanent abode, for the neighbor of the desert moves away.",
      reference: "Sunan Ibn Majah 2256"
    },
    {
      title: "Dua for Protection from Evil Companions",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ صُحْبَةِ السُّوءِ",
      english: "O Allah, I seek refuge in You from evil companionship.",
      reference: "Sunan Abu Dawood 1547"
    },
    {
      title: "Dua for Protection from Evil Thoughts",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
      english: "O Allah, I seek refuge in You from anxiety and sorrow, from incapacity and laziness, from miserliness and cowardice, from being overcome by debt and overpowered by men.",
      reference: "Sahih al-Bukhari 6369"
    }
  ];

  return (
    <div className="pt-20 pb-12">
      <h1 className="text-5xl font-bold text-center my-12 text-[#2C646C]">Daily Duas</h1>
      
      <div className="px-6">
        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
          {duas.map((dua, index) => {
            const isFav = isFavorite('duas', dua.title);
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-[#3F8D98]">{dua.title}</h2>
                    <button
                      onClick={() => handleFavoriteClick(dua)}
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
                    {dua.arabic}
                  </p>
                  <p className="text-gray-600 mb-2">
                    {dua.english}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    {dua.reference}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Duas; 