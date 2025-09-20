import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8" />
            <span className="text-xl font-bold">SkyMiles Rewards</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/redeem" className="hover:text-blue-200 transition-colors">Redeem</Link>
            <Link to="/book-ticket" className="hover:text-blue-200 transition-colors">Book Ticket</Link>
            <Link to="/profile" className="hover:text-blue-200 transition-colors">Profile</Link>
            <Link to="/support" className="hover:text-blue-200 transition-colors">Support</Link>
            <Link to="/signin" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;