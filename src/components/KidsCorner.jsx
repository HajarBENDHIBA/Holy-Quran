import React from 'react';
import { Link } from 'react-router-dom';

const KidsCorner = () => {
  return (
    <div className="min-h-screen pt-24 pb-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-5xl font-bold text-[#35767F] my-12 text-center">Kids Corner</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Arkan Islam Section - Enhanced Styling */}
        <Link to="/kids/arkan-islam" className="bg-gradient-to-br from-[#35767F] to-[#3F8D98] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] col-span-1 md:col-span-2 lg:col-span-3">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-4 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">The Five Pillars of Islam</h2>
              <h3 className="text-2xl font-arabic mb-4">أركان الإسلام الخمسة</h3>
              <p className="text-white/90">Learn about the foundation of our faith in a fun way!</p>
            </div>
            <div className="text-white text-2xl font-medium">
              Learn More →
            </div>
          </div>
        </Link>

        {/* How to Make Wudu Section */}
        <Link to="/kids/how-to-wudu" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-[#35767F] mb-4">How to Make Wudu</h2>
          <p className="text-gray-600 mb-4">Learn how to clean yourself before prayer!</p>
          <div className="text-[#3F8D98] hover:text-[#35767F] font-medium">
            Learn More →
          </div>
        </Link>

        {/* How to Pray Section */}
        <Link to="/kids/how-to-pray" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-[#35767F] mb-4">How to Pray</h2>
          <p className="text-gray-600 mb-4">Learn the steps of prayer in a fun and easy way!</p>
          <div className="text-[#3F8D98] hover:text-[#35767F] font-medium">
            Learn More →
          </div>
        </Link>

        {/* Islamic Cartoons Section */}
        <Link to="/kids/cartoons" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-[#35767F] mb-4">Islamic Cartoons</h2>
          <p className="text-gray-600 mb-4">Watch fun and educational Islamic cartoons!</p>
          <div className="text-[#3F8D98] hover:text-[#35767F] font-medium">
            Watch Now →
          </div>
        </Link>

        {/* Prophet Stories Section */}
        <Link to="/kids/prophet-stories" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-[#35767F] mb-4">Stories of Our Prophet (PBUH)</h2>
          <p className="text-gray-600 mb-4">Discover the beautiful stories of Prophet Muhammad (PBUH)</p>
          <div className="text-[#3F8D98] hover:text-[#35767F] font-medium">
            Read Stories →
          </div>
        </Link>

        {/* Daily Duas Section */}
        <Link to="/kids/daily-duas" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-[#35767F] mb-4">Daily Duas for Kids</h2>
          <p className="text-gray-600 mb-4">Learn important duas for everyday activities!</p>
          <div className="text-[#3F8D98] hover:text-[#35767F] font-medium">
            Learn Duas →
          </div>
        </Link>

        {/* Islamic Animals Section */}
        <Link to="/kids/islamic-animals" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-[#35767F] mb-4">Animals in Islam</h2>
          <p className="text-gray-600 mb-4">Learn about special animals mentioned in the Quran!</p>
          <div className="text-[#3F8D98] hover:text-[#35767F] font-medium">
            Meet Animals →
          </div>
        </Link>
      </div>
    </div>
  );
};

export default KidsCorner; 