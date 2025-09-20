import React from 'react';
import { Crown } from 'lucide-react';

const UpgradeFirstClass = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Crown className="h-12 w-12 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">First Class Upgrade</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Domestic Upgrade</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">50,000 points</p>
            <p className="text-gray-600">Upgrade any domestic flight to first class</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">International Upgrade</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">75,000 points</p>
            <p className="text-gray-600">Upgrade any international flight to first class</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Premium Package</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">100,000 points</p>
            <p className="text-gray-600">Round-trip first class upgrade + lounge access</p>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          Redeem Points for First Class Upgrade
        </button>
      </div>
    </div>
  );
};

export default UpgradeFirstClass;