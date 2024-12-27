import React from 'react';
import { BookOpen, Calculator, TestTube, Globe, Clock, Users, Trophy } from 'lucide-react';

const courses = [
  {
    title: 'Mathematics',
    description: 'Master mathematical concepts with our expert guidance',
    icon: Calculator,
    classes: '6th - 12th',
    features: [
      'Advanced problem-solving techniques',
      'Regular practice tests',
      'Doubt clearing sessions',
    ],
  },
  {
    title: 'Science',
    description: 'Comprehensive coverage of Physics, Chemistry, and Biology',
    icon: TestTube,
    classes: '6th - 12th',
    features: [
      'Practical demonstrations',
      'Lab experiment guidance',
      'Conceptual learning approach',
    ],
  },
  {
    title: 'English',
    description: 'Develop strong communication and writing skills',
    icon: BookOpen,
    classes: '6th - 12th',
    features: [
      'Grammar mastery',
      'Creative writing workshops',
      'Speaking practice sessions',
    ],
  },
  {
    title: 'Social Studies',
    description: 'Understanding our world through history and geography',
    icon: Globe,
    classes: '6th - 10th',
    features: [
      'Interactive learning methods',
      'Current affairs discussions',
      'Map work practice',
    ],
  },
];

const features = [
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'Morning and evening batches available',
  },
  {
    icon: Users,
    title: 'Small Batch Size',
    description: 'Personal attention to each student',
  },
  {
    icon: Trophy,
    title: 'Regular Tests',
    description: 'Track your progress effectively',
  },
];

const CoursesPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Our Courses</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <course.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-sm text-green-600 font-medium mb-4">
                Classes: {course.classes}
              </p>
              <ul className="space-y-2">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Our Courses?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Admission Process</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              1. Fill out the admission form (available online or at center)
            </p>
            <p className="text-gray-600">
              2. Schedule a free counseling session
            </p>
            <p className="text-gray-600">
              3. Take a diagnostic test (optional)
            </p>
            <p className="text-gray-600">
              4. Complete the admission process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;