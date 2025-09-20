import React, { useState } from 'react';
import { Plane, Calendar, MapPin, Users, Coins } from 'lucide-react';

const BookTicket = () => {
  const [tripType, setTripType] = useState('roundtrip');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Plane className="h-12 w-12 text-blue-600 mr-4" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Book a Flight</h1>
            <p className="text-gray-600 mt-1">Earn up to 10 points per mile flown!</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-8">
          <div className="flex items-center">
            <Coins className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-blue-800">Points Earning Preview</h2>
          </div>
          <div className="mt-2 space-y-1 text-sm text-blue-700">
            <p>• Economy Class: 5 points per mile</p>
            <p>• Business Class: 8 points per mile</p>
            <p>• First Class: 10 points per mile</p>
            <p>• Additional 2x points on weekend flights!</p>
          </div>
        </div>

        <div className="space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${
              tripType === 'roundtrip'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setTripType('roundtrip')}
          >
            Round Trip
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              tripType === 'oneway'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setTripType('oneway')}
          >
            One Way
          </button>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  From
                </div>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Departure City"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  To
                </div>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Destination City"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Departure Date
                </div>
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {tripType === 'roundtrip' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Return Date
                  </div>
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  Passengers
                </div>
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4+ Passengers</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center">
                  <Plane className="h-4 w-4 mr-1" />
                  Class
                </div>
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Search Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTicket;