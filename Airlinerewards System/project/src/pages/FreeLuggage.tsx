import React from 'react';
import { Briefcase } from 'lucide-react';

const FreeLuggage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Briefcase className="h-12 w-12 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">Free Luggage</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Single Bag</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">10,000 points</p>
            <p className="text-gray-600">One free checked bag (up to 50 lbs)</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Double Bag</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">15,000 points</p>
            <p className="text-gray-600">Two free checked bags (up to 50 lbs each)</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Family Package</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">25,000 points</p>
            <p className="text-gray-600">Four free checked bags (up to 50 lbs each)</p>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          Redeem Points for Free Luggage
        </button>
      </div>
    </div>
  );
};

export default FreeLuggage;