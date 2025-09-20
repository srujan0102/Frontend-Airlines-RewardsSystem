import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Crown, Briefcase, Coffee } from 'lucide-react';

const Redeem = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Redeem Your Points</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/flight-discounts" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <Plane className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-xl font-bold text-gray-800">Flight Discounts</h2>
          </div>
          <p className="text-gray-600">From 25,000 points</p>
          <p className="text-sm text-gray-500 mt-2">Get discounts on your next flight booking</p>
        </Link>

        <Link to="/upgrade-first-class" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <Crown className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-xl font-bold text-gray-800">First Class Upgrade</h2>
          </div>
          <p className="text-gray-600">From 50,000 points</p>
          <p className="text-sm text-gray-500 mt-2">Upgrade your seat to first class</p>
        </Link>

        <Link to="/free-luggage" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <Briefcase className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-xl font-bold text-gray-800">Free Luggage</h2>
          </div>
          <p className="text-gray-600">From 10,000 points</p>
          <p className="text-sm text-gray-500 mt-2">Get free checked baggage</p>
        </Link>

        <Link to="/lounge-access" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <Coffee className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-xl font-bold text-gray-800">Lounge Access</h2>
          </div>
          <p className="text-gray-600">From 15,000 points</p>
          <p className="text-sm text-gray-500 mt-2">Access exclusive airport lounges</p>
        </Link>
      </div>
    </div>
  );
};

export default Redeem;