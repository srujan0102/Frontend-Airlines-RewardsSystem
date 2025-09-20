import React from 'react';
import { Coffee } from 'lucide-react';

const LoungeAccess = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Coffee className="h-12 w-12 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">Lounge Access</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Single Visit</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">15,000 points</p>
            <p className="text-gray-600">One-time access to any airport lounge</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Day Pass</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">25,000 points</p>
            <p className="text-gray-600">24-hour access to all airport lounges</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Annual Pass</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">150,000 points</p>
            <p className="text-gray-600">Unlimited access for one year</p>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          Redeem Points for Lounge Access
        </button>
      </div>
    </div>
  );
};

export default LoungeAccess;