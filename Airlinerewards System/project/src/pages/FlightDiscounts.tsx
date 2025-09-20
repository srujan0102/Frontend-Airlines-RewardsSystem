import React from 'react';
import { Plane } from 'lucide-react';

const FlightDiscounts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Plane className="h-12 w-12 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">Flight Discounts</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Domestic Flights</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">25,000 points</p>
            <p className="text-gray-600">Get $250 off any domestic flight</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">International Flights</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">40,000 points</p>
            <p className="text-gray-600">Get $400 off any international flight</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Round-trip Special</h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">45,000 points</p>
            <p className="text-gray-600">Get $500 off any round-trip booking</p>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          Redeem Points for Flight Discount
        </button>
      </div>
    </div>
  );
};

export default FlightDiscounts;