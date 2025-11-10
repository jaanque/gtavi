import React from 'react';

const News = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-4 text-white">
      <h2 id="news" className="text-4xl font-bold text-center mb-4 text-gta-pink" style={{ textShadow: '2px 2px 4px #000' }}>Latest GTA 6 News & Rumors</h2>
      <div className="space-y-4">
        <div className="p-4 bg-black bg-opacity-50 rounded-lg">
          <h3 className="text-2xl font-bold">Official Trailer 1 Released!</h3>
          <p className="text-sm text-gray-400">December 5, 2023</p>
          <p className="mt-2">Rockstar Games has officially released the first trailer for Grand Theft Auto VI, confirming the Vice City setting and introducing the two protagonists, Lucia and Jason. The trailer broke YouTube records for the most views in 24 hours.</p>
        </div>
        <div className="p-4 bg-black bg-opacity-50 rounded-lg">
          <h3 className="text-2xl font-bold">Release Window Confirmed for 2025</h3>
          <p className="text-sm text-gray-400">February 6, 2024</p>
          <p className="mt-2">Take-Two Interactive, the parent company of Rockstar Games, has confirmed that GTA 6 is scheduled for a release in the fall of 2025. This sets a more specific timeline for fans who have been eagerly awaiting the game.</p>
        </div>
      </div>
    </div>
  );
};

export default News;
