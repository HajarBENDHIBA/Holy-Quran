import React from 'react';
import { Link } from 'react-router-dom';

const ProphetStories = () => {
  const stories = [
    {
      id: 1,
      title: "The Birth of Prophet Muhammad (PBUH)",
      description: "Learn about the special night when our beloved Prophet was born",
      lesson: "The importance of being kind and truthful",
      image: "birth.png"
    },
    {
      id: 2,
      title: "The First Revelation",
      description: "How the Quran was first revealed to Prophet Muhammad (PBUH)",
      lesson: "The importance of seeking knowledge",
      image: "revelation.png"
    },
    {
      id: 3,
      title: "The Night Journey",
      description: "The miraculous journey to Jerusalem and the heavens",
      lesson: "The power of faith and prayer",
      image: "isra.png"
    },
    {
      id: 4,
      title: "The Migration to Madinah",
      description: "How the Prophet and his companions moved to Madinah",
      lesson: "Trust in Allah's plan",
      image: "hijrah.png"
    },
    {
      id: 5,
      title: "The Conquest of Makkah",
      description: "How the Prophet forgave his enemies",
      lesson: "The importance of forgiveness",
      image: "makkah.png"
    },
    {
      id: 6,
      title: "The Farewell Sermon",
      description: "The Prophet's last message to all Muslims",
      lesson: "Equality and brotherhood in Islam",
      image: "farewell.png"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <Link to="/kids-corner" className="text-[#3F8D98] hover:text-[#35767F] mb-4 inline-block">
          ← Back to Kids Corner
        </Link>
        
        <h1 className="text-4xl font-bold text-[#35767F] mb-8">Stories of Our Prophet (PBUH)</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Story Illustration</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#35767F] mb-2">{story.title}</h2>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-[#35767F] mb-2">Lesson to Learn:</h3>
                  <p className="text-gray-600">{story.lesson}</p>
                </div>
                <button className="w-full bg-[#35767F] text-white py-2 rounded-lg hover:bg-[#3F8D98] transition-colors">
                  Read Story
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#35767F] text-white p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Why Learn About the Prophet?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>He is the best example for all Muslims</li>
            <li>His life teaches us how to be good Muslims</li>
            <li>We learn about patience, kindness, and honesty</li>
            <li>His stories help us understand Islam better</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProphetStories; 