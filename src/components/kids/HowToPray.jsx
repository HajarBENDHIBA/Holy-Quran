import React from 'react';
import { Link } from 'react-router-dom';

const HowToPray = () => {
  const prayerSteps = [
    {
      step: 1,
      title: "Make Wudu",
      description: "Clean yourself by washing your hands, face, arms, and feet",
      image: "wudu.png"
    },
    {
      step: 2,
      title: "Stand Facing Qibla",
      description: "Stand straight facing the direction of the Kaaba",
      image: "qibla.png"
    },
    {
      step: 3,
      title: "Make Takbir",
      description: "Raise your hands and say 'Allahu Akbar'",
      image: "takbir.png"
    },
    {
      step: 4,
      title: "Recite Surah Al-Fatiha",
      description: "Read the opening chapter of the Quran",
      image: "fatiha.png"
    },
    {
      step: 5,
      title: "Bow Down (Ruku)",
      description: "Bend down with your hands on your knees",
      image: "ruku.png"
    },
    {
      step: 6,
      title: "Stand Up",
      description: "Stand straight again saying 'Sami Allahu liman hamidah'",
      image: "stand.png"
    },
    {
      step: 7,
      title: "Prostrate (Sujood)",
      description: "Put your forehead, nose, hands, knees, and toes on the ground",
      image: "sujood.png"
    },
    {
      step: 8,
      title: "Sit Between Prostrations",
      description: "Sit briefly between the two prostrations",
      image: "sitting.png"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <Link to="/kids-corner" className="text-[#3F8D98] hover:text-[#35767F] mb-4 inline-block">
          ← Back to Kids Corner
        </Link>
        
        <h1 className="text-4xl font-bold text-[#35767F] mb-8">How to Pray</h1>
        
        <div className="space-y-8">
          {prayerSteps.map((step) => (
            <div key={step.step} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#35767F] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#35767F] mb-2">{step.title}</h2>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Tip: Practice this step slowly and carefully</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#35767F] text-white p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Remember!</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Always pray with clean clothes and in a clean place</li>
            <li>Try to pray at the right time</li>
            <li>Be patient and keep practicing</li>
            <li>Ask Allah to help you learn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowToPray; 