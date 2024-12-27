import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3"
              alt="Green Classes Guwahati Campus"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Excellence in Education Since 2010</h3>
            <p className="text-gray-600 mb-6">
              Green Classes Guwahati (GCG) has been a pioneer in providing quality education
              to students from classes 6th to 12th. Our mission is to nurture young minds
              and help them achieve their academic goals through personalized attention
              and innovative teaching methods.
            </p>
            
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
    </section>
  );
};

export default About;