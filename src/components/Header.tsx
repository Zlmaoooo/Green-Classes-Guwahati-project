import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Results', href: '/results' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);
    navigate(href);
  };

  return (
    <header className="fixed top-0 w-full bg-green-600 shadow-lg z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">GCG</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-white hover:text-green-100 transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            ))}
            
            <div className="relative">
              <button
                onClick={() => setShowAuthOptions(!showAuthOptions)}
                className="bg-white text-green-600 px-6 py-2 rounded-full hover:bg-green-100 transition-colors flex items-center space-x-1"
              >
                <span>Sign In</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showAuthOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 transform opacity-100 scale-100 transition-all duration-200">
                  <button
                    onClick={() => navigate('/auth/student')}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 transition-colors"
                  >
                    Sign in as Student
                  </button>
                  <button
                    onClick={() => navigate('/auth/teacher')}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 transition-colors"
                  >
                    Sign in as Teacher
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left py-2 text-white hover:text-green-100 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="mt-4 space-y-2">
              <button
                onClick={() => navigate('/auth/student')}
                className="w-full bg-white text-green-600 px-6 py-2 rounded-full hover:bg-green-100 transition-colors"
              >
                Sign in as Student
              </button>
              <button
                onClick={() => navigate('/auth/teacher')}
                className="w-full bg-white text-green-600 px-6 py-2 rounded-full hover:bg-green-100 transition-colors"
              >
                Sign in as Teacher
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;