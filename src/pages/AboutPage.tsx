import React from 'react';
import { MapPin, Phone, Mail, Award, Users, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">About Green Classes Guwahati</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3"
              alt="Green Classes Campus"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Green Classes Guwahati has been at the forefront of educational
              excellence in Assam. Our journey began with a simple mission: to provide quality
              education that empowers students to achieve their dreams.
            </p>
            <p className="text-gray-600">
              Over the years, we have helped thousands of students excel in their academic
              pursuits, with many of our alumni now studying at prestigious institutions
              across India and abroad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Award className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide comprehensive education that nurtures academic excellence and
              personal growth.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Excellence, integrity, innovation, and student-centric approach guide
              everything we do.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Clock className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
            <p className="text-gray-600">
              Dedicated to providing personalized attention and support to every student.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-green-600" />
              <span className="text-gray-600">
                123 Education Hub, GS Road, Guwahati, Assam
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-green-600" />
              <span className="text-gray-600">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-green-600" />
              <span className="text-gray-600">contact@gcguwahati.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;