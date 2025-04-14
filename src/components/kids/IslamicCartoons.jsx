import React from 'react';
import { Link } from 'react-router-dom';

const IslamicCartoons = () => {
  const cartoons = [
    {
      id: 1,
      title: "Learning Arabic Letters",
      titleArabic: "تعلم الحروف العربية",
      description: "Fun and interactive way to learn Arabic letters.",
      descriptionArabic: "طريقة ممتعة وتفاعلية لتعلم الحروف العربية",
      videoUrl: "https://www.youtube.com/embed/LyzupN62MGA",
      category: "Arabic Learning"
    },
    {
      id: 2,
      title: "The Five Pillars of Islam",
      titleArabic: "أركان الإسلام الخمسة",
      description: "Learn about the five pillars of Islam in a fun and engaging way.",
      descriptionArabic: "تعرف على أركان الإسلام الخمسة بطريقة ممتعة وجذابة",
      videoUrl: "https://www.youtube.com/embed/vC43yxyjIEE",
      category: "Islamic Basics"
    },
    {
      id: 3,
      title: "How to Make Wudu",
      titleArabic: "كيفية الوضوء",
      description: "Learn the proper way to perform Wudu (ablution) step by step.",
      descriptionArabic: "تعلم كيفية الوضوء خطوة بخطوة",
      videoUrl: "https://www.youtube.com/embed/y3Hd5srW_ak",
      category: "Islamic Practices"
    },
    {
      id: 4,
      title: "How to Pray Salah",
      titleArabic: "كيفية الصلاة",
      description: "Step by step guide to performing the five daily prayers.",
      descriptionArabic: "دليل خطوة بخطوة لأداء الصلوات الخمس",
      videoUrl: "https://www.youtube.com/embed/edL3W38ODd4",
      category: "Islamic Practices"
    },
    {
      id: 5,
      title: "Ramadan and Fasting",
      titleArabic: "رمضان والصيام",
      description: "Learn about the holy month of Ramadan and the importance of fasting.",
      descriptionArabic: "تعرف على شهر رمضان المبارك وأهمية الصيام",
      videoUrl: "https://www.youtube.com/embed/YqQEF_WJclU",
      category: "Islamic Events"
    },
    {
      id: 6,
      title: "Q&A About Prophets and Messengers",
      titleArabic: "أسئلة و أجوبة عن الأنبياء و الرسل",
      description: "Interesting questions and answers about the Prophets and Messengers in Islam.",
      descriptionArabic: "أسئلة وأجوبة شيقة عن الأنبياء والرسل في الإسلام",
      videoUrl: "https://www.youtube.com/embed/kRNck4MdV2g",
      category: "Prophets"
    },
    {
      id: 7,
      title: "The Story of Prophet Nuh",
      titleArabic: "معلومات عن نبي الله نوح",
      description: "Learn about Prophet Nuh (Noah) and his mission to guide his people.",
      descriptionArabic: "تعرف على نبي الله نوح ودعوته لقومه",
      videoUrl: "https://www.youtube.com/embed/stcIFhI05PQ",
      category: "Prophets"
    },
    {
      id: 8,
      title: "Q&A About Prophet Muhammad's Life",
      titleArabic: "أسئلة و أجوبة عن حياة الرسول صلى الله عليه وسلم",
      description: "Interesting questions and answers about the life of Prophet Muhammad (peace be upon him).",
      descriptionArabic: "أسئلة وأجوبة شيقة عن حياة الرسول صلى الله عليه وسلم",
      videoUrl: "https://www.youtube.com/embed/ECJ_PzG2MAw",
      category: "Prophets"
    },
    {
      id: 9,
      title: "Honoring Parents for Children",
      titleArabic: "برّ الوالدين للأطفال",
      description: "Learn about the importance of being kind and respectful to parents in Islam.",
      descriptionArabic: "تعرف على أهمية بر الوالدين في الإسلام",
      videoUrl: "https://www.youtube.com/embed/kdD1k4OHEcI",
      category: "Islamic Values"
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
          <h1 className="text-4xl font-bold text-[#35767F] mb-2">Islamic Cartoons</h1>
          <h2 className="text-3xl font-arabic text-[#35767F]">الرسوم المتحركة الإسلامية</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartoons.map((cartoon) => (
            <div key={cartoon.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={cartoon.videoUrl}
                  title={cartoon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-[#35767F]">{cartoon.title}</h3>
                  <h4 className="text-lg font-arabic text-[#35767F]">{cartoon.titleArabic}</h4>
                </div>
                <p className="text-gray-600 mb-2">{cartoon.description}</p>
                <p className="text-gray-600 font-arabic text-right mb-2">{cartoon.descriptionArabic}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {cartoon.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#35767F] text-white p-6 rounded-xl">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">About Islamic Cartoons</h2>
            <h3 className="text-xl font-arabic">عن الرسوم المتحركة الإسلامية</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Islamic cartoons are a fun and engaging way for children to learn about Islam, 
                the prophets, and Islamic values. These cartoons are designed to be both 
                educational and entertaining, making learning about Islam enjoyable for kids.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Child-friendly content</li>
                <li>Educational value</li>
                <li>Islamic teachings</li>
                <li>Fun and engaging</li>
              </ul>
            </div>
            <div className="text-right font-arabic">
              <p className="mb-4">
                الرسوم المتحركة الإسلامية هي طريقة ممتعة وجذابة للأطفال لتعلم الإسلام،
                الأنبياء، والقيم الإسلامية. تم تصميم هذه الرسوم لتكون تعليمية وترفيهية،
                مما يجعل تعلم الإسلام ممتعاً للأطفال.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>محتوى مناسب للأطفال</li>
                <li>قيمة تعليمية</li>
                <li>تعاليم إسلامية</li>
                <li>ممتعة وجذابة</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicCartoons; 