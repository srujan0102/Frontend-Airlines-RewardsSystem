import React from 'react';
import { MessageCircle, Phone, Mail, HelpCircle } from 'lucide-react';

const Support = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Customer Support</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Phone className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Call Us</h2>
          <p className="text-gray-600">1-800-SKY-MILES</p>
          <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <Mail className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Email Support</h2>
          <p className="text-gray-600">support@skymiles.com</p>
          <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I earn points?</h3>
            <p className="text-gray-600">You can earn points by flying with us, using partner services, or participating in special promotions.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">When do my points expire?</h3>
            <p className="text-gray-600">Points don't expire as long as you have activity in your account every 18 months.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I check my points balance?</h3>
            <p className="text-gray-600">Your points balance is always visible on your profile page after logging in.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I transfer my points?</h3>
            <p className="text-gray-600">Yes, you can transfer points to family members or other program members for a small fee.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;