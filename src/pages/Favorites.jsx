import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  const handleRemoveFavorite = (type, id) => {
    removeFavorite(type, id);
  };

  const formatDate = (dateString) => {
    return 'Added on Invalid Date';
  };

  return (
    <div className="pt-20 pb-12">
      <h1 className="text-5xl font-bold text-center my-12 text-[#2C646C]">My Favorites</h1>
      
      <div className="px-6">
        {Object.entries(favorites).map(([type, items]) => (
          items.length > 0 && (
            <div key={type} className="mb-12">
              <h2 className="text-3xl text-center font-semibold text-[#3F8D98] mb-6">
                {type === 'duas' ? 'Duas' : type === 'adhkar' ? 'Adhkar' : type}
              </h2>
              <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-[#3F8D98] mb-4">{item.title}</h3>
                        {item.arabic && (
                          <p className="text-xl font-arabic text-gray-800 mb-3 text-right leading-loose">
                            {item.arabic}
                          </p>
                        )}
                        {item.english && (
                          <p className="text-gray-600 mb-2">
                            {item.english}
                          </p>
                        )}
                        {item.reference && (
                          <p className="text-sm text-gray-500 italic">
                            {item.reference}
                          </p>
                        )}
                        <p className="text-xs text-gray-400 mt-2">
                          {formatDate(item.addedAt)}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveFavorite(type, item.id)}
                        className="text-red-500 hover:text-red-600 transition-colors duration-200"
                        aria-label="Remove from favorites"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
        
        {Object.values(favorites).every(items => items.length === 0) && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-6">You haven't added any favorites yet.</p>
            <div className="space-x-4">
              <Link
                to="/duas"
                className="px-6 py-3 bg-[#3F8D98] text-white rounded-lg hover:bg-[#2C646C] transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Browse Duas</span>
              </Link>
              <Link
                to="/adhkar"
                className="px-6 py-3 bg-[#3F8D98] text-white rounded-lg hover:bg-[#2C646C] transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Browse Adhkar</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites; 