import React from 'react';
import { Link } from 'react-router-dom';
import adamImage from '../../assets/adam.jpg';
import nuhImage from '../../assets/nuh.jpg';
import musaImage from '../../assets/musa.jpg';
import muhammadImage from '../../assets/muhammad.jpg';
import idrisImage from '../../assets/idris.jpg';
import salihImage from '../../assets/salih.jpg';
import hudImage from '../../assets/hud.jpg';
import shuaibImage from '../../assets/shuaib.jpg';
import ayubImage from '../../assets/ayub.jpg';
import yunusImage from '../../assets/yunus.jpg';
import ibrahimImage from '../../assets/ibrahim.jpg';
import yusufImage from '../../assets/yusuf.jpg';
import isaImage from '../../assets/isa.jpg';
import zakariaImage from '../../assets/zakaria.jpg';

const ProphetStories = () => {
  const stories = [
    {
      id: 1,
      title: "Prophet Adam (AS)",
      titleArabic: "نبي الله آدم عليه السلام",
      description: "Prophet Adam (AS) was the first human created by Allah from clay. He was taught the names of all things and lived in Paradise with his wife, Hawwa (Eve). After being tempted by Iblis (Satan), they ate from the forbidden tree and were sent to Earth. This story teaches us about human nature, repentance, and Allah's mercy.",
      descriptionArabic: "كان النبي آدم عليه السلام أول إنسان خلقه الله من طين. علمه أسماء كل شيء وعاش في الجنة مع زوجته حواء. بعد إغواء إبليس، أكلا من الشجرة المحرمة وأرسلا إلى الأرض. هذه القصة تعلمنا عن الطبيعة البشرية والتوبة ورحمة الله",
      image: adamImage,
      lessons: [
        "Allah created humans with knowledge and wisdom",
        "Repentance is always accepted by Allah",
        "Satan is our eternal enemy",
        "Humans are prone to mistakes but can seek forgiveness",
        "Allah's mercy is greater than any sin"
      ],
      lessonsArabic: [
        "خلق الله البشر بالعلم والحكمة",
        "التوبة مقبولة دائماً عند الله",
        "الشيطان هو عدونا الأبدي",
        "البشر عرضة للخطأ ولكن يمكنهم طلب المغفرة",
        "رحمة الله أكبر من أي ذنب"
      ]
    },
    {
      id: 2,
      title: "Prophet Nuh (AS)",
      titleArabic: "نبي الله نوح عليه السلام",
      description: "Prophet Nuh (AS) preached to his people for 950 years, calling them to worship Allah alone. Despite his efforts, only a few believed. Allah commanded him to build an ark, and when the flood came, he and the believers were saved while the disbelievers perished. This story teaches us about patience, perseverance, and trust in Allah.",
      descriptionArabic: "دعا النبي نوح عليه السلام قومه لمدة 950 عاماً، يدعوهم لعبادة الله وحده. رغم جهوده، آمن القليل فقط. أمره الله ببناء السفينة، وعندما جاء الطوفان، نجا هو والمؤمنون بينما هلك الكافرون. هذه القصة تعلمنا الصبر والمثابرة والثقة في الله",
      image: nuhImage,
      lessons: [
        "Be patient in calling people to Allah",
        "Never give up hope in Allah's mercy",
        "Family ties are important but faith comes first",
        "Trust in Allah's plan even when it seems difficult",
        "Disobedience to Allah leads to destruction"
      ],
      lessonsArabic: [
        "كن صبوراً في دعوة الناس إلى الله",
        "لا تفقد الأمل في رحمة الله",
        "روابط العائلة مهمة لكن الإيمان يأتي أولاً",
        "ثق في خطة الله حتى عندما تبدو صعبة",
        "معصية الله تؤدي إلى الهلاك"
      ]
    },
    {
      id: 3,
      title: "Prophet Ibrahim (AS)",
      titleArabic: "نبي الله إبراهيم عليه السلام",
      description: "Prophet Ibrahim (AS) was known as the friend of Allah. He searched for the truth from a young age, breaking his people's idols. He was thrown into fire but was saved by Allah's command. He built the Kaaba with his son Ismail and was tested with the command to sacrifice his son. This story teaches us about monotheism, sacrifice, and complete trust in Allah.",
      descriptionArabic: "كان النبي إبراهيم عليه السلام معروفاً بخليل الله. بحث عن الحقيقة منذ صغره، وكسر أصنام قومه. ألقي في النار لكن الله أنجاه بأمره. بنى الكعبة مع ابنه إسماعيل واختبر بأمر التضحية بابنه. هذه القصة تعلمنا التوحيد والتضحية والثقة الكاملة في الله",
      image: ibrahimImage,
      lessons: [
        "Always seek the truth and reject falsehood",
        "Have complete trust in Allah's wisdom",
        "Be ready to sacrifice for Allah's sake",
        "Stand firm against polytheism and false beliefs",
        "Build your family on the foundation of faith"
      ],
      lessonsArabic: [
        "ابحث دائماً عن الحقيقة وارفض الباطل",
        "كن واثقاً تماماً في حكمة الله",
        "كن مستعداً للتضحية من أجل الله",
        "اثبت ضد الشرك والمعتقدات الباطلة",
        "ابنِ عائلتك على أساس الإيمان"
      ]
    },
    {
      id: 4,
      title: "Prophet Yusuf (AS)",
      titleArabic: "نبي الله يوسف عليه السلام",
      description: "Prophet Yusuf (AS) was the beloved son of Prophet Yaqub. His brothers threw him in a well out of jealousy. He was sold into slavery in Egypt, where he faced many trials including false imprisonment. Through his wisdom and trust in Allah, he became a minister in Egypt and later forgave his brothers. This story teaches us about patience, forgiveness, and trust in Allah's plan.",
      descriptionArabic: "كان النبي يوسف عليه السلام الابن المحبوب للنبي يعقوب. ألقاه إخوته في البئر بدافع الغيرة. بيع عبداً في مصر، حيث واجه محن كثيرة بما في ذلك السجن ظلماً. من خلال حكمته وثقته في الله، أصبح وزيراً في مصر وسامح إخوته لاحقاً. هذه القصة تعلمنا الصبر والمغفرة والثقة في خطة الله",
      image: yusufImage,
      lessons: [
        "Be patient in difficult times",
        "Maintain your faith in Allah's plan",
        "Forgive those who wrong you",
        "Use wisdom in dealing with others",
        "Trust that Allah will bring good from every situation"
      ],
      lessonsArabic: [
        "كن صبوراً في الأوقات الصعبة",
        "حافظ على إيمانك في خطة الله",
        "سامح من أخطأ في حقك",
        "استخدم الحكمة في التعامل مع الآخرين",
        "ثق أن الله سيخرج الخير من كل موقف"
      ]
    },
    {
      id: 5,
      title: "Prophet Musa (AS)",
      titleArabic: "نبي الله موسى عليه السلام",
      description: "Prophet Musa (AS) was born during Pharaoh's reign when male babies were being killed. He was saved and raised in Pharaoh's palace. After accidentally killing an Egyptian, he fled to Madyan. Allah chose him to free the Children of Israel from Pharaoh's oppression. He received the Torah and led his people through many miracles. This story teaches us about justice, leadership, and reliance on Allah.",
      descriptionArabic: "ولد النبي موسى عليه السلام في عهد فرعون عندما كان يتم قتل الأطفال الذكور. نجا وتربى في قصر فرعون. بعد قتل مصري عن طريق الخطأ، هرب إلى مدين. اختاره الله لتحرير بني إسرائيل من ظلم فرعون. تلقى التوراة وقاد قومه من خلال معجزات كثيرة. هذه القصة تعلمنا العدل والقيادة والاعتماد على الله",
      image: musaImage,
      lessons: [
        "Stand up against oppression and injustice",
        "Trust in Allah's help in difficult times",
        "Be patient with difficult people",
        "Leadership requires wisdom and courage",
        "Allah's help comes to those who are patient"
      ],
      lessonsArabic: [
        "قف ضد الظلم والاضطهاد",
        "ثق في عون الله في الأوقات الصعبة",
        "كن صبوراً مع الناس الصعبة",
        "القيادة تتطلب الحكمة والشجاعة",
        "عون الله يأتي للصابرين"
      ]
    },
    {
      id: 6,
      title: "Prophet Isa (AS)",
      titleArabic: "نبي الله عيسى عليه السلام",
      description: "Prophet Isa (AS) was born miraculously to Maryam (AS) without a father. He spoke in the cradle and performed many miracles by Allah's permission, including healing the blind and raising the dead. He called people to worship Allah alone and was given the Injeel (Gospel). This story teaches us about Allah's power, miracles, and the importance of monotheism.",
      descriptionArabic: "ولد النبي عيسى عليه السلام معجزة لمريم عليها السلام بدون أب. تكلم في المهد وأجرى معجزات كثيرة بإذن الله، بما في ذلك شفاء الأعمى وإحياء الموتى. دعا الناس لعبادة الله وحده وأعطي الإنجيل. هذه القصة تعلمنا عن قدرة الله والمعجزات وأهمية التوحيد",
      image: isaImage,
      lessons: [
        "Allah's power is beyond human understanding",
        "Miracles are signs from Allah",
        "Always call to the worship of Allah alone",
        "Be grateful for Allah's blessings",
        "Trust in Allah's wisdom and plan"
      ],
      lessonsArabic: [
        "قدرة الله تتجاوز فهم البشر",
        "المعجزات هي آيات من الله",
        "ادع دائماً لعبادة الله وحده",
        "كن شاكراً لنعم الله",
        "ثق في حكمة الله وخطته"
      ]
    },
    {
      id: 7,
      title: "Prophet Muhammad (SAW)",
      titleArabic: "سيدنا محمد صلى الله عليه وسلم",
      description: "Prophet Muhammad (SAW) is the final messenger of Allah. Born in Makkah, he received revelation at age 40. Despite persecution, he spread Islam with patience and wisdom. He established the first Islamic state in Madinah and completed his mission of spreading Allah's message. His life is the perfect example for all Muslims. This story teaches us about perseverance, leadership, and complete submission to Allah.",
      descriptionArabic: "النبي محمد صلى الله عليه وسلم هو خاتم الأنبياء والمرسلين. ولد في مكة، وتلقى الوحي في سن الأربعين. رغم الاضطهاد، نشر الإسلام بالصبر والحكمة. أسس أول دولة إسلامية في المدينة وأكمل مهمته في نشر رسالة الله. حياته المثالية هي القدوة لجميع المسلمين. هذه القصة تعلمنا المثابرة والقيادة والاستسلام الكامل لله",
      image: muhammadImage,
      lessons: [
        "Be patient in the face of difficulties",
        "Treat others with kindness and respect",
        "Be honest and trustworthy in all matters",
        "Seek knowledge and wisdom",
        "Follow the Prophet's example in all aspects of life"
      ],
      lessonsArabic: [
        "كن صبوراً في مواجهة الصعوبات",
        "عامل الآخرين بلطف واحترام",
        "كن صادقاً وأميناً في جميع الأمور",
        "اطلب العلم والحكمة",
        "اتبع مثال النبي في جميع جوانب الحياة"
      ]
    },
    {
      id: 8,
      title: "Prophet Idris (AS)",
      titleArabic: "نبي الله إدريس عليه السلام",
      description: "Prophet Idris (AS) was known for his wisdom and knowledge. He was the first to write with a pen and taught people many useful skills. He was raised to a high status by Allah and is mentioned in the Quran for his patience and righteousness. This story teaches us about the importance of knowledge and wisdom in Islam.",
      descriptionArabic: "كان النبي إدريس عليه السلام معروفاً بحكمته وعلمه. كان أول من كتب بالقلم وعلم الناس مهارات مفيدة كثيرة. رفعه الله إلى مكانة عالية وذكر في القرآن لصبره وتقواه. هذه القصة تعلمنا أهمية العلم والحكمة في الإسلام",
      image: idrisImage,
      lessons: [
        "Seek knowledge and wisdom throughout your life",
        "Use your skills to benefit others",
        "Be patient in spreading knowledge",
        "Combine knowledge with righteous actions",
        "Strive for excellence in all that you do"
      ],
      lessonsArabic: [
        "اطلب العلم والحكمة طوال حياتك",
        "استخدم مهاراتك لمساعدة الآخرين",
        "كن صبوراً في نشر العلم",
        "اجمع بين العلم والعمل الصالح",
        "اسع للتميز في كل ما تفعله"
      ]
    },
    {
      id: 9,
      title: "Prophet Hud (AS)",
      titleArabic: "نبي الله هود عليه السلام",
      description: "Prophet Hud (AS) was sent to the people of 'Ad, who were known for their strength and arrogance. They built great buildings and were proud of their power. Hud called them to worship Allah alone, but they rejected him. A terrible windstorm destroyed them as punishment. This story teaches us about the dangers of arrogance and the importance of humility.",
      descriptionArabic: "أرسل النبي هود عليه السلام إلى قوم عاد، الذين كانوا معروفين بقوتهم وتكبرهم. بنوا مبانٍ عظيمة وكانوا فخورين بقوتهم. دعاهم هود لعبادة الله وحده، لكنهم رفضوه. دمرتهم عاصفة رياح رهيبة كعقاب. هذه القصة تعلمنا مخاطر التكبر وأهمية التواضع",
      image: hudImage,
      lessons: [
        "Arrogance leads to destruction",
        "Strength should be used for good",
        "Be humble and grateful to Allah",
        "Don't be deceived by worldly power",
        "Allah's punishment is severe for those who reject His message"
      ],
      lessonsArabic: [
        "التكبر يؤدي إلى الهلاك",
        "يجب استخدام القوة في الخير",
        "كن متواضعاً وشاكراً لله",
        "لا تنخدع بالقوة الدنيوية",
        "عقاب الله شديد لمن يرفض رسالته"
      ]
    },
    {
      id: 10,
      title: "Prophet Salih (AS)",
      titleArabic: "نبي الله صالح عليه السلام",
      description: "Prophet Salih (AS) was sent to the people of Thamud, who were skilled in carving homes out of mountains. Allah gave them a miraculous she-camel as a sign, but they killed it. An earthquake destroyed them as punishment. This story teaches us about the importance of respecting Allah's signs and being grateful for His blessings.",
      descriptionArabic: "أرسل النبي صالح عليه السلام إلى قوم ثمود، الذين كانوا ماهرين في نحت المنازل من الجبال. أعطاهم الله ناقة معجزة كآية، لكنهم قتلوها. دمرهم زلزال كعقاب. هذه القصة تعلمنا أهمية احترام آيات الله والشكر على نعمه",
      image: salihImage,
      lessons: [
        "Respect Allah's signs and miracles",
        "Be grateful for Allah's blessings",
        "Don't harm innocent creatures",
        "Allah's punishment is certain for those who reject His signs",
        "Use your skills for good purposes"
      ],
      lessonsArabic: [
        "احترم آيات الله ومعجزاته",
        "كن شاكراً لنعم الله",
        "لا تؤذي المخلوقات البريئة",
        "عقاب الله مؤكد لمن يرفض آياته",
        "استخدم مهاراتك في الأغراض الحسنة"
      ]
    },
    {
      id: 11,
      title: "Prophet Lut (AS)",
      titleArabic: "نبي الله لوط عليه السلام",
      description: "Prophet Lut (AS) was sent to the people of Sodom, who were committing terrible sins. He called them to stop their evil deeds, but they refused. Angels came to Lut and his family, helping them escape before the city was destroyed. This story teaches us about the importance of standing against evil and maintaining moral values.",
      descriptionArabic: "أرسل النبي لوط عليه السلام إلى قوم سدوم، الذين كانوا يرتكبون ذنوباً فظيعة. دعاهم للتوقف عن أفعالهم الشريرة، لكنهم رفضوا. جاءت الملائكة إلى لوط وعائلته، وساعدتهم على الهروب قبل تدمير المدينة. هذه القصة تعلمنا أهمية الوقوف ضد الشر والحفاظ على القيم الأخلاقية",
      image: hudImage,
      lessons: [
        "Stand firm against evil and immorality",
        "Protect your family from bad influences",
        "Allah saves those who follow His guidance",
        "Don't be afraid to speak against wrong",
        "Maintain high moral standards"
      ],
      lessonsArabic: [
        "اثبت ضد الشر والفساد",
        "احمِ عائلتك من التأثيرات السيئة",
        "الله ينجي من يتبع هداه",
        "لا تخف من التحدث ضد الخطأ",
        "حافظ على المعايير الأخلاقية العالية"
      ]
    },
    {
      id: 12,
      title: "Prophet Shu'ayb (AS)",
      titleArabic: "نبي الله شعيب عليه السلام",
      description: "Prophet Shu'ayb (AS) was sent to the people of Madyan, who were known for cheating in business and giving short measure. He called them to be honest and fair in their dealings, but they rejected him. An earthquake destroyed them as punishment. This story teaches us about the importance of honesty and fairness in business.",
      descriptionArabic: "أرسل النبي شعيب عليه السلام إلى قوم مدين، الذين كانوا معروفين بالغش في التجارة وتقصير المكيال. دعاهم إلى الصدق والعدل في معاملاتهم، لكنهم رفضوه. دمرهم زلزال كعقاب. هذه القصة تعلمنا أهمية الصدق والعدل في التجارة",
      image: shuaibImage,
      lessons: [
        "Be honest in all your dealings",
        "Give full measure in business",
        "Treat others fairly and justly",
        "Don't cheat or deceive others",
        "Allah watches over all our actions"
      ],
      lessonsArabic: [
        "كن صادقاً في جميع معاملاتك",
        "أعطِ المكيال الكامل في التجارة",
        "عامل الآخرين بعدل وإنصاف",
        "لا تغش أو تخدع الآخرين",
        "الله يراقب جميع أفعالنا"
      ]
    },
    {
      id: 13,
      title: "Prophet Ayyub (AS)",
      titleArabic: "نبي الله أيوب عليه السلام",
      description: "Prophet Ayyub (AS) was a wealthy and pious man whom Allah tested with severe illness and loss of wealth and family. Despite his suffering, he remained patient and grateful to Allah. Allah eventually restored his health and blessings. This story teaches us about patience during trials and trust in Allah's wisdom.",
      descriptionArabic: "كان النبي أيوب عليه السلام رجلاً غنياً وتقياً اختبره الله بمرض شديد وفقدان المال والعائلة. رغم معاناته، بقي صبوراً وشاكراً لله. أعاد الله صحته ونعمه في النهاية. هذه القصة تعلمنا الصبر خلال المحن والثقة في حكمة الله",
      image: ayubImage,
      lessons: [
        "Be patient during difficult times",
        "Trust in Allah's wisdom and plan",
        "Don't complain about Allah's decree",
        "Remember that trials are temporary",
        "Allah rewards those who are patient"
      ],
      lessonsArabic: [
        "كن صبوراً في الأوقات الصعبة",
        "ثق في حكمة الله وخطته",
        "لا تشتكِ من قدر الله",
        "تذكر أن المحن مؤقتة",
        "الله يكافئ الصابرين"
      ]
    },
    {
      id: 14,
      title: "Prophet Yunus (AS)",
      titleArabic: "نبي الله يونس عليه السلام",
      description: "Prophet Yunus (AS) was sent to the people of Nineveh. When they rejected his message, he left them in frustration. A whale swallowed him, and in the darkness of its belly, he prayed to Allah for forgiveness. Allah saved him and his people eventually believed. This story teaches us about repentance and never losing hope in Allah's mercy.",
      descriptionArabic: "أرسل النبي يونس عليه السلام إلى قوم نينوى. عندما رفضوا رسالته، تركهم محبطاً. ابتلعه حوت، وفي ظلمة بطنه، دعا الله طالباً المغفرة. أنجاه الله وآمن قومه في النهاية. هذه القصة تعلمنا التوبة وعدم فقدان الأمل في رحمة الله",
      image: yunusImage,
      lessons: [
        "Never give up hope in Allah's mercy",
        "Repent sincerely when you make mistakes",
        "Don't leave your duty in frustration",
        "Allah's mercy is always near",
        "Pray to Allah in times of difficulty"
      ],
      lessonsArabic: [
        "لا تفقد الأمل في رحمة الله",
        "تب توبة صادقة عندما تخطئ",
        "لا تترك واجبك في حالة الإحباط",
        "رحمة الله قريبة دائماً",
        "ادعُ الله في أوقات الصعوبة"
      ]
    },
    {
      id: 15,
      title: "Prophet Zakariya (AS)",
      titleArabic: "نبي الله زكريا عليه السلام",
      description: "Prophet Zakariya (AS) was a righteous man who prayed for a child in his old age. Allah granted him Yahya (AS), who became a prophet. Zakariya was known for his devotion to Allah and his care for Maryam (AS). This story teaches us about the power of sincere prayer and trust in Allah's timing.",
      descriptionArabic: "كان النبي زكريا عليه السلام رجلاً صالحاً دعا الله أن يرزقه ولداً في شيخوخته. استجاب الله دعاءه ورزقه يحيى عليه السلام، الذي أصبح نبياً. كان زكريا معروفاً بتقواه واهتمامه بمريم عليها السلام. هذه القصة تعلمنا قوة الدعاء الصادق والثقة في توقيت الله",
      image: zakariaImage,
      lessons: [
        "Pray sincerely to Allah",
        "Trust in Allah's timing",
        "Be patient in waiting for Allah's response",
        "Take care of those in need",
        "Allah answers the prayers of the righteous"
      ],
      lessonsArabic: [
        "ادعُ الله بصدق",
        "ثق في توقيت الله",
        "كن صبوراً في انتظار استجابة الله",
        "اعتنِ بالمحتاجين",
        "الله يستجيب لدعاء الصالحين"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
      <Link to="/kids-corner" className="inline-flex items-center text-[#3F8D98] hover:text-[#35767F] mb-8 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Kids Corner
        </Link>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#35767F] mb-2">Prophet Stories</h1>
          <h2 className="text-3xl font-arabic text-[#35767F]">قصص الأنبياء</h2>
        </div>

        <div className="space-y-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-96 object-cover mt-16"
                  />
                </div>
                <div className="p-6 md:w-3/4">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-[#35767F]">{story.title}</h3>
                    <h4 className="text-xl font-arabic text-[#35767F]">{story.titleArabic}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <p className="text-gray-600 font-arabic text-right mb-6">{story.descriptionArabic}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-lg font-semibold text-[#35767F] mb-2">Lessons</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {story.lessons.map((lesson, index) => (
                          <li key={index}>{lesson}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-right">
                      <h5 className="text-lg font-semibold text-[#35767F] mb-2 font-arabic">الدروس</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 font-arabic">
                        {story.lessonsArabic.map((lesson, index) => (
                          <li key={index}>{lesson}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#35767F] text-white p-6 rounded-xl">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Why Learn Prophet Stories?</h2>
            <h3 className="text-xl font-arabic">لماذا نتعلم قصص الأنبياء؟</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Learning about the prophets helps us understand how to live our lives according to 
                Islamic teachings. Their stories teach us important lessons about faith, patience, 
                and trust in Allah. Each prophet faced unique challenges but remained steadfast in 
                their mission to spread Allah's message.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Learn from their examples of patience and perseverance</li>
                <li>Understand the history of Islam and its message</li>
                <li>Strengthen your faith through their stories</li>
                <li>Learn important life lessons and moral values</li>
                <li>Understand how to deal with challenges in life</li>
              </ul>
            </div>
            <div className="text-right font-arabic">
              <p className="mb-4">
                تعلم قصص الأنبياء يساعدنا في فهم كيفية عيش حياتنا وفقاً للتعاليم الإسلامية
                قصصهم تعلمنا دروساً مهمة عن الإيمان والصبر والثقة في الله. واجه كل نبي تحديات
                فريدة لكنه بقي ثابتاً في مهمته لنشر رسالة الله
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>تعلم من أمثلتهم في الصبر والمثابرة</li>
                <li>افهم تاريخ الإسلام ورسالته</li>
                <li>قوّ إيمانك من خلال قصصهم</li>
                <li>تعلم دروس الحياة والقيم الأخلاقية المهمة</li>
                <li>افهم كيفية التعامل مع التحديات في الحياة</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProphetStories; 