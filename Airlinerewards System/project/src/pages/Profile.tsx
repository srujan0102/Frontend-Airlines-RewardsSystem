import React from 'react';
import { User, Clock, Award } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-6">
          <User className="h-16 w-16 text-blue-600 mr-4" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600">Member since 2023</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-xl font-bold text-gray-800">Points Balance</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">50,000</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-xl font-bold text-gray-800">Tier Status</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">Gold</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-xl font-bold text-gray-800">Miles Flown</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">25,430</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-800">Flight to New York</p>
                <p className="text-sm text-gray-600">March 15, 2024</p>
              </div>
            </div>
            <p className="text-green-600 font-semibold">+2,500 points</p>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Award className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-800">Lounge Access Redemption</p>
                <p className="text-sm text-gray-600">March 1, 2024</p>
              </div>
            </div>
            <p className="text-red-600 font-semibold">-15,000 points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;