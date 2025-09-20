import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Plane, Award, Headphones } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back, John!</h1>
            <p className="text-gray-600 mt-2">Your Current Points Balance</p>
            <p className="text-4xl font-bold text-blue-600">50,000</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=300&q=80"
            alt="Airplane"
            className="w-48 h-32 object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/redeem" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <Gift className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-800">Redeem Points</h2>
          <p className="text-gray-600 mt-2">Exchange your points for rewards</p>
        </Link>

        <Link to="/earn-points" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <Plane className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-800">Earn Points</h2>
          <p className="text-gray-600 mt-2">Learn how to earn more points</p>
        </Link>

        <Link to="/profile" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <Award className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-800">Member Benefits</h2>
          <p className="text-gray-600 mt-2">View your exclusive benefits</p>
        </Link>

        <Link to="/support" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <Headphones className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-800">Support</h2>
          <p className="text-gray-600 mt-2">Get help with your rewards</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;