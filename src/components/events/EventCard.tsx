import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

const EventCard = ({ title, date, description, image }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-green-600 text-sm mb-2">{date}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;