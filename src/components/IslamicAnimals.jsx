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
      videoUrl: "https://www.youtube.com/embed/QHm8wE7Losk",
      category: "Prophet's Stories"
    },
    {
      id: 2,
      title: "Prophet Yunus and the Whale",
      titleArabic: "النبي يونس والحوت",
      description: "The amazing story of Prophet Yunus (AS) and the whale that swallowed him.",
      descriptionArabic: "القصة المدهشة للنبي يونس عليه السلام والحوت الذي ابتلعه",
      videoUrl: "https://www.youtube.com/embed/HqaFeQXBzuU",
      category: "Prophet's Stories"
    },
    {
      id: 3,
      title: "The Ant of Prophet Sulaiman",
      titleArabic: "نملة النبي سليمان",
      description: "Discover how Prophet Sulaiman (AS) could talk to animals and the wise ant's warning.",
      descriptionArabic: "اكتشف كيف كان النبي سليمان عليه السلام يتحدث مع الحيوانات وتحذير النملة الحكيمة",
      videoUrl: "https://www.youtube.com/embed/Z6ihqYJUVVk",
      category: "Prophet's Stories"
    },
    {
      id: 4,
      title: "The Hoopoe Bird",
      titleArabic: "طائر الهدهد",
      description: "Learn about the special bird that helped Prophet Sulaiman (AS) find the Queen of Sheba.",
      descriptionArabic: "تعرف على الطائر المميز الذي ساعد النبي سليمان في العثور على ملكة سبأ",
      videoUrl: "https://www.youtube.com/embed/YK4R5r3J0Wk",
      category: "Prophet's Stories"
    },
    {
      id: 5,
      title: "The She-Camel of Prophet Salih",
      titleArabic: "ناقة النبي صالح",
      description: "The story of the miraculous she-camel that Allah sent as a sign to the people of Thamud.",
      descriptionArabic: "قصة الناقة المعجزة التي أرسلها الله كآية لقوم ثمود",
      videoUrl: "https://www.youtube.com/embed/nZrW-HZLd-E",
      category: "Prophet's Stories"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <Link to="/kids-corner" className="text-[#3F8D98] hover:text-[#35767F] mb-4 inline-block">
          ← Back to Kids Corner
        </Link>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#35767F] mb-2">Animals in Islam</h1>
          <h2 className="text-3xl font-arabic text-[#35767F]">الحيوانات في الإسلام</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <div key={animal.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={animal.videoUrl}
                  title={animal.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-[#35767F]">{animal.title}</h3>
                  <h4 className="text-lg font-arabic text-[#35767F]">{animal.titleArabic}</h4>
                </div>
                <p className="text-gray-600 mb-2">{animal.description}</p>
                <p className="text-gray-600 font-arabic text-right mb-2">{animal.descriptionArabic}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {animal.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#35767F] text-white p-6 rounded-xl">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">About Animals in Islam</h2>
            <h3 className="text-xl font-arabic">عن الحيوانات في الإسلام</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Animals play important roles in many Islamic stories. They teach us valuable 
                lessons about Allah's creation and how even the smallest creatures can make 
                a big difference. Islam teaches us to be kind to animals and treat them with care.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Amazing animal stories from the Quran</li>
                <li>Lessons about kindness to animals</li>
                <li>Prophet's interactions with animals</li>
                <li>Fun and educational content</li>
              </ul>
            </div>
            <div className="text-right font-arabic">
              <p className="mb-4">
                تلعب الحيوانات أدواراً مهمة في العديد من القصص الإسلامية. إنها تعلمنا 
                دروساً قيمة عن خلق الله وكيف يمكن حتى لأصغر المخلوقات أن تحدث فرقاً 
                كبيراً. يعلمنا الإسلام أن نكون رحماء بالحيوانات ونعاملها برفق.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>قصص حيوانات مذهلة من القرآن</li>
                <li>دروس عن الرفق بالحيوانات</li>
                <li>تفاعل النبي مع الحيوانات</li>
                <li>محتوى ممتع وتعليمي</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicAnimals; 