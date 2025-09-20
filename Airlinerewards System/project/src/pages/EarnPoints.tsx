import React from 'react';
import { Plane, Gift, CreditCard, ShoppingBag } from 'lucide-react';

const EarnPoints = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Ways to Earn Points</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Plane className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Fly with Us</h2>
          <p className="text-gray-600">Earn points based on the distance flown and fare class:</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Economy: 5 points per mile</li>
            <li>Business: 8 points per mile</li>
            <li>First Class: 10 points per mile</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <Gift className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Special Promotions</h2>
          <p className="text-gray-600">Take advantage of our seasonal promotions:</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Double points on weekend flights</li>
            <li>Bonus points for new routes</li>
            <li>Holiday special offers</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <CreditCard className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Credit Card Rewards</h2>
          <p className="text-gray-600">Use our co-branded credit card:</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>2x points on airline purchases</li>
            <li>1.5x points on all other purchases</li>
            <li>50,000 bonus points welcome offer</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <ShoppingBag className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Partner Services</h2>
          <p className="text-gray-600">Earn through our partners:</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Hotel bookings</li>
            <li>Car rentals</li>
            <li>Shopping portal purchases</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EarnPoints;