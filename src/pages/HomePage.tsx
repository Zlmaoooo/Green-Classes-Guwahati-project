import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Teachers from '../components/Teachers';
import Results from '../components/Results';
import Courses from '../components/Courses';
import Events from '../components/Events';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Teachers />
      <Results />
      <Courses />
      <Events />
    </>
  );
};

export default HomePage;