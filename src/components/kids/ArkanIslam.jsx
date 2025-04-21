import React from 'react';
import { Link } from 'react-router-dom';

const ArkanIslam = () => {
  const pillars = [
    {
      id: 1,
      title: "Shahada",
      titleArabic: "الشهادة",
      description: "The declaration of faith in Allah and His Messenger",
      descriptionArabic: "الإقرار بالله ورسوله",
      details: "Shahada is the first and most important pillar of Islam. It is the declaration that there is no god but Allah and that Muhammad is His Messenger. By sincerely proclaiming it, one enters Islam.",
      detailsArabic: "الشهادة هي الركن الأول والأعظم في الإسلام، وتعني الإقرار بأن لا إله إلا الله وأن محمدًا رسول الله. بنطقها بإخلاص، يدخل الإنسان في الإسلام",
      color: "border-blue-500",
      icon: "☪️"
    },
    {
      id: 2,
      title: "Salah",
      titleArabic: "الصلاة",
      description: "The five daily prayers",
      descriptionArabic: "الصلوات الخمس",
      details: "Muslims pray five times a day facing the Kaaba in Makkah. Prayer connects us with Allah and helps us stay mindful of Him and live a righteous life.",
      detailsArabic: "يصلي المسلمون خمس مرات يوميًا متجهين نحو الكعبة في مكة، والصلاة تربطهم بالله وتُعينهم على ذكره والاستقامة في حياتهم اليومية",
      color: "border-green-500",
      icon: "🕌 "
    },
    {
      id: 3,
      title: "Zakat",
      titleArabic: "الزكاة",
      description: "Giving to those in need",
      descriptionArabic: "إعطاء المحتاجين",
      details: "Zakat is the giving of a portion of our wealth to help the poor and needy. It teaches us generosity, compassion, and care for others.",
      detailsArabic: "الزكاة هي إخراج جزء من أموالنا لمساعدة الفقراء والمحتاجين، وهي تُعلّمنا الكرم والعطاء والرحمة تجاه الآخرين",
      color: "border-yellow-500",
      icon: "🤲"
    },
    {
      id: 4,
      title: "Sawm",
      titleArabic: "الصوم",
      description: "Fasting during Ramadan",
      descriptionArabic: "الصيام في رمضان",
      details:  "During the month of Ramadan, Muslims fast from dawn until sunset, refraining from food and drink, and striving to embody good character. Fasting helps us feel the suffering of those in need and understand their circumstances.",
      detailsArabic: "في شهر رمضان، يصوم المسلمون من الفجر حتى غروب الشمس، ممتنعين عن الطعام والشراب، ويسعون للتحلي بالأخلاق الحسنة. يساعدنا الصيام على الشعور بمعاناة المحتاجين وفهم أحوالهم",
      color: "border-orange-500",
      icon: "🌙"
    },
    {
      id: 5,
      title: "Hajj",
      titleArabic: "الحج",
      description: "Pilgrimage to Makkah",
      descriptionArabic: "الحج إلى مكة",
      details: "Hajj is a pilgrimage that a Muslim performs to Makkah once in a lifetime if able. Millions of Muslims from around the world gather to perform the rituals and draw closer to Allah.",
      detailsArabic: "الحج هو رحلة يؤديها المسلم إلى مكة مرة واحدة في العمر إذا كان قادرًا. يجتمع فيها ملايين المسلمين من مختلف بقاع الأرض لتأدية المناسك والتقرب إلى الله",
      color: "border-purple-500",
      icon: "🕋"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 mb-8">
      <div className="max-w-4xl mx-auto">
      <Link to="/kids-corner" className="inline-flex items-center text-[#3F8D98] hover:text-[#35767F] mb-8 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Kids Corner
        </Link>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#35767F] mb-2">The Five Pillars of Islam</h1>
          <h2 className="text-3xl font-arabic text-[#35767F]">أركان الإسلام الخمسة</h2>
        </div>

        <div className="space-y-4">
          {pillars.map((pillar) => (
            <div key={pillar.id} className={`bg-white rounded-lg border-l-4 ${pillar.color} shadow-sm p-4`}>
              <div className="flex items-start gap-4 p-8">
                <div className="text-3xl">{pillar.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-4xl font-bold text-[#35767F]">{pillar.title}</h3>
                      <h4 className="text-2xl font-arabic text-[#35767F]">{pillar.titleArabic}</h4>
                    </div>
                    <div className="text-xl text-[#35767F]">
                      <h1>{pillar.description}</h1>
                      <h1 className="font-arabic text-right">{pillar.descriptionArabic}</h1>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded">
                    <p className="text-gray-700 text-md mb-4">{pillar.details}</p>
                    <p className="text-gray-700 text-md font-arabic text-right">{pillar.detailsArabic}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-[#35767F] mb-2">Why Are the Five Pillars Important?</h2>
            <h3 className="text-xl font-arabic text-[#35767F]">لماذا أركان الإسلام الخمسة مهمة؟</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded">
              <h4 className="text-lg font-semibold text-[#35767F] mb-3">Benefits of Following the Pillars</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#35767F] mr-2">✓</span>
                  <span>Builds a strong connection with Allah</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35767F] mr-2">✓</span>
                  <span>Helps us live a good and meaningful life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35767F] mr-2">✓</span>
                  <span>Teaches us to be kind and helpful</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35767F] mr-2">✓</span>
                  <span>Keeps us on the right path</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35767F] mr-2">✓</span>
                  <span>Makes us part of the Muslim community</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded text-right font-arabic">
              <h4 className="text-lg font-semibold text-[#35767F] mb-3">فوائد اتباع الأركان</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#35767F] ml-2">✓</span>
                  <span>بناء علاقة قوية مع الله</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35767F] ml-2">✓</span>
                  <span>مساعدتنا على العيش حياة جيدة وذات معنى</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35767F] ml-2">✓</span>
                  <span>تعليمنا أن نكون لطفاء ومفيدين</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35767F] ml-2">✓</span>
                  <span>إبقاؤنا على الطريق الصحيح</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35767F] ml-2">✓</span>
                  <span>جعلنا جزءاً من المجتمع المسلم</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArkanIslam; 