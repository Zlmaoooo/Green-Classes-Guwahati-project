import React from 'react';
import { Users } from 'lucide-react';

const TeacherAuth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3"
            alt="Teacher"
            className="relative rounded-lg shadow-2xl"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="bg-green-600 rounded-full p-4">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mt-8 mb-6">Teacher Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Teacher ID</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Enter your teacher ID"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105 duration-200"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherAuth;