import React from 'react';
import { Star, Trophy, Award } from 'lucide-react';

const toppers = [
  {
    name: 'Rahul Sharma',
    achievement: '99.8% in CBSE Class 12',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3',
    quote: "Green Classes helped me achieve my dream score.",
  },
  {
    name: 'Priya Patel',
    achievement: 'State Rank 2 in JEE Mains',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    quote: "The faculty's guidance was invaluable for my success.",
  },
  {
    name: 'Amit Kumar',
    achievement: '98.9% in CBSE Class 10',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    quote: "Regular practice tests helped me excel in my board exams.",
  },
];

const achievements = [
  {
    icon: Trophy,
    title: '100+ Rank Holders',
    description: 'in various competitive exams',
  },
  {
    icon: Star,
    title: '95% Success Rate',
    description: 'in board examinations',
  },
  {
    icon: Award,
    title: 'Best Coaching Center',
    description: 'Award 2023',
  },
];

const ResultsPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Our Results</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <achievement.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">Our Star Performers</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {toppers.map((topper) => (
            <div
              key={topper.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={topper.image}
                alt={topper.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{topper.name}</h3>
                <p className="text-green-600 font-medium mb-2">{topper.achievement}</p>
                <p className="text-gray-500 text-sm mb-4">Year: {topper.year}</p>
                <blockquote className="italic text-gray-600">
                  "{topper.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Year-wise Performance</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">2023</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                  95% students scored above 90% in CBSE Class 12
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                  25+ students qualified for JEE Advanced
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                  100% success rate in NEET
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">2022</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                  92% students scored above 90% in CBSE Class 12
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                  20+ students qualified for JEE Advanced
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                  98% success rate in NEET
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;