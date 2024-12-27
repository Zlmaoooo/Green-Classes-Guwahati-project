import React from 'react';

const teachers = [
  {
    name: 'Dr. Rajesh Kumar',
    subject: 'Physics',
    qualification: 'Ph.D. in Physics',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3',
  },
  {
    name: 'Mrs. Priya Sharma',
    subject: 'Mathematics',
    qualification: 'M.Sc. Mathematics',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3',
  },
  {
    name: 'Mr. Amit Choudhury',
    subject: 'Chemistry',
    qualification: 'M.Sc. Chemistry',
    image: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3',
  },
];

const Teachers = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Expert Teachers</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                <p className="text-green-600 font-medium mb-2">{teacher.subject}</p>
                <p className="text-gray-600">{teacher.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;