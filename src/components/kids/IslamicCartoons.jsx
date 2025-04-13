import React from 'react';
import { Link } from 'react-router-dom';

const IslamicCartoons = () => {
  const cartoons = [
    {
      id: 1,
      title: "The Story of Prophet Adam (AS)",
      description: "Learn about the first human and prophet",
      duration: "15 min",
      age: "5+"
    },
    {
      id: 2,
      title: "The Story of Prophet Nuh (AS)",
      description: "The story of the great flood and the ark",
      duration: "12 min",
      age: "5+"
    },
    {
      id: 3,
      title: "The Story of Prophet Ibrahim (AS)",
      description: "Learn about the friend of Allah",
      duration: "18 min",
      age: "6+"
    },
    {
      id: 4,
      title: "The Story of Prophet Yusuf (AS)",
      description: "A beautiful story of patience and trust in Allah",
      duration: "20 min",
      age: "7+"
    },
    {
      id: 5,
      title: "The Story of Prophet Musa (AS)",
      description: "The story of the prophet who spoke to Allah",
      duration: "16 min",
      age: "6+"
    },
    {
      id: 6,
      title: "The Story of Prophet Isa (AS)",
      description: "Learn about the prophet who was born without a father",
      duration: "14 min",
      age: "6+"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <Link to="/kids-corner" className="text-[#3F8D98] hover:text-[#35767F] mb-4 inline-block">
          ← Back to Kids Corner
        </Link>
        
        <h1 className="text-4xl font-bold text-[#35767F] mb-8">Islamic Cartoons</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartoons.map((cartoon) => (
            <div key={cartoon.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Video Thumbnail</span>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#35767F] mb-2">{cartoon.title}</h2>
                <p className="text-gray-600 mb-4">{cartoon.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Duration: {cartoon.duration}</span>
                  <span>Age: {cartoon.age}</span>
                </div>
                <button className="mt-4 w-full bg-[#35767F] text-white py-2 rounded-lg hover:bg-[#3F8D98] transition-colors">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#35767F] text-white p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Parent's Guide</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Watch these cartoons with your children</li>
            <li>Discuss the lessons learned from each story</li>
            <li>Encourage children to ask questions</li>
            <li>Help them understand the moral of each story</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IslamicCartoons; 