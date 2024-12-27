import React from 'react';
import { Leaf } from 'lucide-react';
import EventSection from './events/EventSection';
import { events } from './events/eventData';

const Events = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Animated Leaf */}
      <div className="absolute right-0 top-0 w-64 h-64 opacity-20 transform rotate-45 animate-pulse">
        <Leaf className="w-full h-full text-green-600" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-16">Events & Competitions</h2>
        
        {events.map((section) => (
          <EventSection
            key={section.type}
            type={section.type}
            items={section.items}
          />
        ))}
      </div>
    </section>
  );
};

export default Events;