import React from 'react';

const Faq = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-4 text-white">
      <h2 id="faq" className="text-4xl font-bold text-center mb-4 text-gta-pink" style={{ textShadow: '2px 2px 4px #000' }}>GTA 6 FAQ</h2>
      <div className="space-y-4">
        <div className="p-4 bg-black bg-opacity-50 rounded-lg">
          <h3 className="text-2xl font-bold">When is GTA 6 coming out?</h3>
          <p className="mt-2">The official release date for Grand Theft Auto 6 has not been announced by Rockstar Games yet. However, the release window is confirmed for Fall 2025. Our countdown is based on the latest leaks and rumors, but is subject to change. Stay tuned for the official announcement.</p>
        </div>
        <div className="p-4 bg-black bg-opacity-50 rounded-lg">
          <h3 className="text-2xl font-bold">Is the GTA 6 trailer out?</h3>
          <p className="mt-2">Yes, the first official trailer for Grand Theft Auto VI was released in December 2023. You can watch it on the official Rockstar Games YouTube channel. Fans are eagerly awaiting a second trailer.</p>
        </div>
        <div className="p-4 bg-black bg-opacity-50 rounded-lg">
          <h3 className="text-2xl font-bold">What platforms will GTA 6 be on?</h3>
          <p className="mt-2">GTA 6 is expected to be released on PlayStation 5 and Xbox Series X|S. A PC version will likely be released at a later date, following the pattern of previous Grand Theft Auto titles.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
