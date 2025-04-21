import React from 'react';
import { Link } from 'react-router-dom';

const HowToWudu = () => {
  const wuduSteps = [
    {
      step: 1,
      title: "Make Intention (Niyyah)",
      titleArabic: "النية",
      description: "Say 'Bismillah' and make intention to perform wudu",
      descriptionArabic: "قل بسم الله وانوي الوضوء",
      arabic: "بِسْمِ اللَّهِ",
      tip: "Remember to start everything with Bismillah"
    },
    {
      step: 2,
      title: "Wash Hands",
      titleArabic: "غسل اليدين",
      description: "Wash your hands three times up to the wrists",
      descriptionArabic: "اغسل يديك ثلاث مرات إلى الرسغين",
      tip: "Make sure to clean between your fingers"
    },
    {
      step: 3,
      title: "Rinse Mouth",
      titleArabic: "المضمضة",
      description: "Take water in your mouth and rinse it three times",
      descriptionArabic: "خذ الماء في فمك واغسله ثلاث مرات",
      tip: "Use your right hand to put water in your mouth"
    },
    {
      step: 4,
      title: "Clean Nose",
      titleArabic: "الاستنشاق",
      description: "Sniff water into your nose and blow it out three times.",
      descriptionArabic: "استنشق الماء في أنفك وأخرجه ثلاث مرات",
      arabic: "بِسْمِ اللَّهِ",
      tip: "Use your right hand to take water and your left hand to blow your nose."
    },
    {
      step: 5,
      title: "Wash Face",
      titleArabic: "غسل الوجه",
      description: "Wash your entire face three times",
      descriptionArabic: "اغسل وجهك كاملاً ثلاث مرات",
      tip: "Wash from forehead to chin and ear to ear"
    },
    {
      step: 6,
      title: "Wash Arms",
      titleArabic: "غسل اليدين إلى المرفقين",
      description: "Wash both arms up to the elbows three times",
      descriptionArabic: "اغسل ذراعيك إلى المرفقين ثلاث مرات",
      tip: "Start with the right arm, then the left"
    },
    {
      step: 7,
      title: "Wipe Head",
      titleArabic: "مسح الرأس",
      description: "Wet your hands and wipe your head once",
      descriptionArabic: "بلل يديك وامسح رأسك مرة واحدة",
      tip: "Start from front and go to back, then back to front"
    },
    {
      step: 8,
      title: "Wipe Ears",
      titleArabic: "مسح الأذنين",
      description: "Clean your ears with wet fingers",
      descriptionArabic: " نظف أذنيك بأصابع مبللة مرة واحدة",
      tip: "Use your index fingers for inside and thumbs for outside"
    },
    {
      step: 9,
      title: "Wash Feet",
      titleArabic: "غسل القدمين",
      description: "Wash both feet up to the ankles three times",
      descriptionArabic: "اغسل قدميك إلى الكعبين ثلاث مرات",
      tip: "Clean between your toes and start with the right foot"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
      <Link to="/kids-corner" className="inline-flex items-center text-[#3F8D98] hover:text-[#35767F] mb-8 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Kids Corner
        </Link>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#35767F] mb-2">How to Make Wudu</h1>
          <h2 className="text-3xl font-arabic text-[#35767F]">كيفية الوضوء</h2>
        </div>

        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="../src/assets/wudu.jpg" 
            alt="Steps of Wudu" 
            className="w-9/12 h-auto object-cover mx-auto"
          />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
  <h2 className="text-2xl font-semibold text-center text-[#35767F] mb-2">What is Wudu?</h2>
  <h3 className="text-2xl font-arabic text-center text-[#35767F] mb-8">ما هو الوضوء؟</h3>
  <p className="text-gray-700 mb-2">
  Wudu is the way Muslims cleanse themselves before praying. It’s a special preparation to stand before Allah in prayer.
  </p>
  <p className="text-gray-700 font-arabic text-right">
  الوضوء هو طهارة يقوم بها المسلمون قبل الصلاة، وهو استعداد خاص للوقوف بين يدي الله في العبادة
  </p>
</div>

        <div className="space-y-6">
          {wuduSteps.map((step) => (
            <div key={step.step} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#35767F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-[#35767F] mb-1">{step.title}</h2>
                    <h3 className="text-xl font-arabic text-[#35767F]">{step.titleArabic}</h3>
                  </div>
                  {step.arabic && (
                    <div className="text-2xl font-arabic mb-2 text-gray-700">{step.arabic}</div>
                  )}
                  <div className="mb-4">
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-gray-600 font-arabic text-right">{step.descriptionArabic}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-700">
                      <span className="font-semibold">Tip:</span> {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#35767F] text-white p-6 rounded-xl">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Important Things to Remember</h2>
            <h3 className="text-xl font-arabic">أشياء مهمة للتذكر</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside space-y-2">
              <li>Always start with Bismillah</li>
              <li>Do everything three times (except wiping head and wiping ears)</li>
              <li>Start from the right side</li>
              <li>Make sure water reaches everywhere</li>
              <li>Don't waste water</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-right font-arabic">
              <li>ابدأ دائماً ببسم الله</li>
              <li>كرر كل خطوة ثلاث مرات (ما عدا مسح الرأس و مسح الأذنين)</li>
              <li>ابدأ من الجانب الأيمن</li>
              <li>تأكد من وصول الماء إلى كل مكان</li>
              <li>لا تسرف في الماء</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Fun Fact!</h2>
            <h3 className="text-lg font-arabic text-yellow-800">معلومة ممتعة!</h3>
          </div>
          <p className="text-yellow-800 mb-2">
            Did you know? When you make wudu, your sins are washed away with the water! 
            That's why it's so important to do it properly and with care.
          </p>
          <p className="text-yellow-800 font-arabic text-right">
            هل تعلم؟ عندما تتوضأ، تُغسل ذنوبك مع الماء!
            لهذا السبب من المهم أن تؤديه بشكل صحيح وبعناية.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToWudu; 