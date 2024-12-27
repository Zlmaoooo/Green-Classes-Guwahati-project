import React, { useState, useEffect } from 'react';

const results = [
  {
    name: 'Rahul Sharma',
    achievement: '99.8% in CBSE Class 12',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3',
  },
  {
    name: 'Priya Patel',
    achievement: 'State Rank 2 in JEE Mains',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
  },
  {
    name: 'Amit Kumar',
    achievement: '98.9% in CBSE Class 10',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
  },
];

const Results = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % results.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Star Achievers</h2>
        
        <div className="relative max-w-3xl mx-auto h-[480px]">
          <div className="relative h-96 rounded-lg shadow-lg">
            {results.map((result, index) => (
              <div
                key={result.name}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={result.image}
                  alt={result.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-6 rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">{result.name}</h3>
                  <p>{result.achievement}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {results.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;