import React from 'react';
import { BookOpen, Calculator, TestTube, Globe } from 'lucide-react';

const courses = [
  {
    title: 'Mathematics',
    description: 'Master mathematical concepts with our expert guidance',
    icon: Calculator,
    classes: '6th - 12th',
  },
  {
    title: 'Science',
    description: 'Comprehensive coverage of Physics, Chemistry, and Biology',
    icon: TestTube,
    classes: '6th - 12th',
  },
  {
    title: 'English',
    description: 'Develop strong communication and writing skills',
    icon: BookOpen,
    classes: '6th - 12th',
  },
  {
    title: 'Social Studies',
    description: 'Understanding our world through history and geography',
    icon: Globe,
    classes: '6th - 10th',
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Courses</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <course.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-sm text-green-600 font-medium">
                Classes: {course.classes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;