import React from 'react';
import { Calendar, Award } from 'lucide-react';
import EventCard from './EventCard';

interface EventItem {
  title: string;
  date: string;
  description: string;
  image: string;
}

interface EventSectionProps {
  type: 'Celebrations' | 'Competitions';
  items: EventItem[];
}

const EventSection = ({ type, items }: EventSectionProps) => {
  const Icon = type === 'Celebrations' ? Calendar : Award;

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-8 flex items-center">
        <Icon className="w-6 h-6 mr-2 text-green-600" />
        {type}
      </h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <EventCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default EventSection;