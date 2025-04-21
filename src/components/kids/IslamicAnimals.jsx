import React from 'react';
import { Link } from 'react-router-dom';

const IslamicAnimals = () => {
  const animals = [
    {
      id: 1,
      title: "The Spider's Web",
      titleArabic: "بيت العنكبوت",
      description: "Learn about how a spider helped protect Prophet Muhammad (PBUH) in the cave of Thawr.",
      descriptionArabic: "تعرف على كيف ساعد العنكبوت في حماية النبي محمد ﷺ في غار ثور",
      story: "During the Hijra (migration) to Medina, Prophet Muhammad (PBUH) and Abu Bakr took refuge in the Cave of Thawr. Allah commanded a spider to spin its web across the cave's entrance. When the Quraysh pursuers reached the cave, they saw the spider's web and thought no one could have entered recently without breaking it. This small spider, through Allah's will, played a crucial role in protecting our beloved Prophet (PBUH). The story teaches us that Allah can use even the smallest of His creatures to do great things, and that we should never underestimate anything Allah has created.",
      storyArabic: "خلال الهجرة إلى المدينة المنورة، لجأ النبي محمد ﷺ وأبو بكر إلى غار ثور. أمر الله عز وجل عنكبوتاً أن تنسج شبكتها على مدخل الغار. عندما وصل مطاردو قريش إلى الغار، رأوا نسيج العنكبوت وظنوا أنه لا يمكن لأحد أن يكون قد دخل مؤخراً دون أن يكسر هذا النسيج. هذا العنكبوت الصغير، بمشيئة الله، لعب دوراً حاسماً في حماية نبينا الحبيب ﷺ. تعلمنا القصة أن الله يمكن أن يستخدم حتى أصغر مخلوقاته لفعل أشياء عظيمة، وأنه لا ينبغي لنا أبداً أن نستهين بأي شيء خلقه الله",
      category: "Prophet's Stories"
    },
    {
      id: 2,
      title: "Prophet Yunus and the Whale",
      titleArabic: "النبي يونس والحوت",
      description: "The amazing story of Prophet Yunus (AS) and the whale that swallowed him.",
      descriptionArabic: "القصة المدهشة للنبي يونس عليه السلام والحوت الذي ابتلعه",
      story: "Prophet Yunus (AS) was sent to guide the people of Nineveh. When they rejected his message, he left in anger without waiting for Allah's command. During his journey by sea, a great storm arose. The sailors cast lots to decide who to throw overboard to lighten the ship, and Prophet Yunus was chosen. A huge whale swallowed him, but by Allah's mercy, the whale did not harm him. Inside the whale's belly, in complete darkness, Prophet Yunus (AS) made his famous supplication: 'There is no god but You, Glory be to You, I have been among the wrongdoers.' Allah commanded the whale to safely release him on the shore. This story teaches us about repentance, patience, and Allah's infinite mercy.",
      storyArabic: "أُرسل النبي يونس عليه السلام لهداية أهل نينوى. عندما رفضوا رسالته، غادر غاضباً دون انتظار أمر الله. خلال رحلته في البحر، هبت عاصفة شديدة. اقترع البحارة ليقرروا من يلقون في البحر لتخفيف حمولة السفينة، فوقع الاختيار على النبي يونس. ابتلعه حوت كبير، ولكن برحمة الله، لم يؤذه الحوت. داخل بطن الحوت، في الظلمات، دعا النبي يونس دعاءه المشهور: 'لا إله إلا أنت سبحانك إني كنت من الظالمين.' أمر الله الحوت أن يلفظه سالماً على الشاطئ. تعلمنا هذه القصة عن التوبة والصبر ورحمة الله الواسعة",
      category: "Prophet's Stories"
    },
    {
      id: 3,
      title: "The Ant of Prophet Sulaiman",
      titleArabic: "نملة النبي سليمان",
      description: "Discover how Prophet Sulaiman (AS) could talk to animals and the wise ant's warning.",
      descriptionArabic: "اكتشف كيف كان النبي سليمان عليه السلام يتحدث مع الحيوانات وتحذير النملة الحكيمة",
      story: "Prophet Sulaiman (AS) was blessed with the ability to understand the language of animals. One day, as he was marching with his mighty army, they approached a valley of ants. One ant, seeing them coming, called out to the other ants: 'O ants! Enter your dwellings, lest Sulaiman and his army crush you unknowingly!' Prophet Sulaiman (AS) smiled at her words and was grateful to Allah for this blessing. He appreciated the ant's wisdom and leadership in protecting her community. This story teaches us about responsibility, caring for others, and how even the smallest creatures have their own communities and intelligence.",
      storyArabic: "أنعم الله على النبي سليمان عليه السلام بالقدرة على فهم لغة الحيوانات. في يوم من الأيام، بينما كان يسير مع جيشه القوي، اقتربوا من وادي النمل. نملة واحدة، عندما رأتهم قادمين، نادت على النمل الآخر: 'يا أيها النمل ادخلوا مساكنكم لا يحطمنكم سليمان وجنوده وهم لا يشعرون!' تبسم النبي سليمان لكلماتها وشكر الله على هذه النعمة. قدّر حكمة النملة وقيادتها في حماية مجتمعها. تعلمنا هذه القصة عن المسؤولية والاهتمام بالآخرين، وكيف أن حتى أصغر المخلوقات لديها مجتمعاتها وذكاؤها",
      category: "Prophet's Stories"
    },
    {
      id: 4,
      title: "The Hoopoe Bird",
      titleArabic: "طائر الهدهد",
      description: "Learn about the special bird that helped Prophet Sulaiman (AS) find the Queen of Sheba.",
      descriptionArabic: "تعرف على الطائر المميز الذي ساعد النبي سليمان في العثور على ملكة سبأ",
      story: "The Hoopoe bird was one of Prophet Sulaiman's (AS) loyal subjects. One day, when Prophet Sulaiman noticed the bird's absence, he said he would punish it unless it had a good reason. When the Hoopoe returned, it brought important news about the Kingdom of Sheba and its queen who worshipped the sun. The bird described their magnificent throne and kingdom but pointed out their wrong beliefs. This information led to the famous story of the Queen of Sheba's guidance to Islam. The Hoopoe's story teaches us that size doesn't matter when it comes to doing important work, and that we should use our abilities to guide others to the truth.",
      storyArabic: "كان الهدهد أحد رعايا النبي سليمان عليه السلام المخلصين. في يوم من الأيام، عندما لاحظ النبي سليمان غياب الطائر، قال إنه سيعاقبه ما لم يكن لديه سبب وجيه. عندما عاد الهدهد، جلب أخباراً مهمة عن مملكة سبأ وملكتها التي كانت تعبد الشمس. وصف الطائر عرشهم ومملكتهم العظيمة لكنه أشار إلى معتقداتهم الخاطئة. أدت هذه المعلومات إلى القصة الشهيرة عن هداية ملكة سبأ إلى الإسلام. تعلمنا قصة الهدهد أن الحجم لا يهم عندما يتعلق الأمر بالقيام بعمل مهم، وأنه يجب علينا استخدام قدراتنا لهداية الآخرين إلى الحق",
      category: "Prophet's Stories"
    },
    {
      id: 5,
      title: "The She-Camel of Prophet Salih",
      titleArabic: "ناقة النبي صالح",
      description: "The story of the miraculous she-camel that Allah sent as a sign to the people of Thamud.",
      descriptionArabic: "قصة الناقة المعجزة التي أرسلها الله كآية لقوم ثمود",
      story: "Allah sent Prophet Salih (AS) to guide the people of Thamud. They asked for a miracle as proof of his prophethood. Allah created a huge she-camel that emerged from a rock. This miraculous camel was a clear sign from Allah, and the people were instructed to let her drink from their well on alternate days. However, despite this clear miracle, some people of Thamud became hostile towards the camel because she drank a lot of water. They plotted against her and killed her, despite Prophet Salih's warnings. This disobedience led to their punishment from Allah. The story teaches us about respecting Allah's signs and the consequences of disobedience.",
      storyArabic: "أرسل الله النبي صالح عليه السلام لهداية قوم ثمود. طلبوا معجزة كدليل على نبوته. خلق الله ناقة ضخمة خرجت من صخرة. كانت هذه الناقة المعجزة آية واضحة من الله، وأُمر القوم بتركها تشرب من بئرهم يوماً بعد يوم. ولكن، رغم هذه المعجزة الواضحة، أصبح بعض قوم ثمود عدائيين تجاه الناقة لأنها كانت تشرب كمية كبيرة من الماء. تآمروا عليها وقتلوها، رغم تحذيرات النبي صالح. أدى هذا العصيان إلى عقابهم من الله. تعلمنا القصة عن احترام آيات الله وعواقب العصيان",
      category: "Prophet's Stories"
    },
    {
      id: 6,
      title: "The Dog of the Cave",
      titleArabic: "كلب أهل الكهف",
      description: "Learn about the faithful dog that guarded the People of the Cave (Ashab Al-Kahf).",
      descriptionArabic: "تعرف على الكلب الوفي الذي حرس أصحاب الكهف",
      story: "In the story of the People of the Cave (Ashab Al-Kahf), a group of young believers fled from their city to protect their faith. They took refuge in a cave, and with them was their loyal dog. Allah mentions this dog in the Quran, showing how it stayed with them, guarding the entrance of the cave with its paws stretched out. The dog remained faithful to its companions for the entire 309 years they slept in the cave. This story shows us the loyalty of animals and how Allah can bless any of His creatures with special honor. Even though it was 'just a dog,' Allah mentioned it in the Quran, teaching us that we shouldn't look down on any of Allah's creatures.",
      storyArabic: "في قصة أهل الكهف، فر مجموعة من الشباب المؤمنين من مدينتهم لحماية إيمانهم. لجأوا إلى كهف، وكان معهم كلبهم الوفي. ذكر الله هذا الكلب في القرآن، موضحاً كيف بقي معهم، يحرس مدخل الكهف وذراعيه باسطتان. ظل الكلب وفياً لرفاقه طوال 309 سنوات التي ناموا فيها في الكهف. تظهر لنا هذه القصة وفاء الحيوانات وكيف يمكن لله أن يكرم أياً من مخلوقاته بشرف خاص. على الرغم من أنه 'مجرد كلب'، ذكره الله في القرآن، مما يعلمنا ألا نحتقر أياً من مخلوقات الله",
      category: "Quranic Stories"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <Link to="/kids-corner" className="inline-flex items-center text-[#3F8D98] hover:text-[#35767F] mb-8 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Kids Corner
        </Link>

        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#35767F] mb-2">Animals in Islam</h1>
          <h2 className="text-2xl font-arabic text-[#35767F]">الحيوانات في الإسلام</h2>
        </div>

        <div className="space-y-12">
          {animals.map((animal, index) => (
            <div key={animal.id} 
                 className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                            ${index % 2 === 0 ? 'border-l-8 border-[#3F8D98]' : 'border-r-8 border-[#3F8D98]'}`}>
              <div className="relative">
                <div className={`absolute ${index % 2 === 0 ? '-left-2' : '-right-2'} top-8`}>
                  <div className={`bg-[#3F8D98] text-white px-8 py-2 ${index % 2 === 0 ? 'rounded-r-full' : 'rounded-l-full'} shadow-md text-lg`}>
                    {animal.category}
                  </div>
                </div>

                <div className="p-8 pt-20">
                  <div className="text-center mb-10">
                    <h3 className="text-4xl font-bold text-[#35767F] mb-3">{animal.title}</h3>
                    <h4 className="text-3xl font-arabic text-[#3F8D98]">{animal.titleArabic}</h4>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* English Section */}
                    <div className="bg-[#f8fcfc] rounded-2xl p-6">
                      <div className="mb-6">
                        <div className="inline-block bg-[#35767F]/10 rounded-full px-4 py-2 mb-4">
                          <p className="text-[#35767F] text-lg font-semibold">{animal.description}</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-inner">
                        <p className="text-gray-600 leading-relaxed text-lg">{animal.story}</p>
                      </div>
                    </div>

                    {/* Arabic Section */}
                    <div className="bg-[#f8fcfc] rounded-2xl p-6">
                      <div className="mb-6 text-right">
                        <div className="inline-block bg-[#35767F]/10 rounded-full px-4 py-2 mb-4">
                          <p className="text-[#35767F] text-lg font-semibold font-arabic">{animal.descriptionArabic}</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-inner text-right">
                        <p className="text-gray-600 leading-relaxed text-lg font-arabic">{animal.storyArabic}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-12">
          <div className="bg-gradient-to-br from-[#35767F] to-[#3F8D98] rounded-3xl shadow-xl overflow-hidden">
            <div className="p-10 text-white backdrop-blur-sm">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-3">About Animals in Islam</h2>
                <h3 className="text-3xl font-arabic">عن الحيوانات في الإسلام</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {/* English Section */}
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <p className="text-xl leading-relaxed mb-8">
                    Animals play important roles in many Islamic stories. They teach us valuable 
                    lessons about Allah's creation and how even the smallest creatures can make 
                    a big difference. Islam teaches us to be kind to animals and treat them with care.
                  </p>
                  <ul className="space-y-4">
                    {['Amazing animal stories from the Quran', 
                      'Lessons about kindness to animals',
                      'Prophet\'s interactions with animals',
                      'Moral lessons from animal stories'].map((item, index) => (
                      <li key={index} className="flex items-center text-lg">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arabic Section */}
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm text-right">
                  <p className="text-xl leading-relaxed mb-8 font-arabic">
                    تلعب الحيوانات أدواراً مهمة في العديد من القصص الإسلامية. إنها تعلمنا 
                    دروساً قيمة عن خلق الله وكيف يمكن حتى لأصغر المخلوقات أن تحدث فرقاً 
                    كبيراً. يعلمنا الإسلام أن نكون رحماء بالحيوانات ونعاملها برفق
                  </p>
                  <ul className="space-y-4">
                    {['قصص حيوانات مذهلة من القرآن',
                      'دروس عن الرفق بالحيوانات',
                      'تفاعل النبي مع الحيوانات',
                      'دروس أخلاقية من قصص الحيوانات'].map((item, index) => (
                      <li key={index} className="flex items-center justify-end text-lg font-arabic">
                        {item}
                        <span className="w-2 h-2 bg-white rounded-full ml-3"></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicAnimals; 