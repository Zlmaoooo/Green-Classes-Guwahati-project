import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-black/40"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-green-900/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Success Begins Here
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Join Green Classes Guwahati for excellence in education and unlock your potential
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;