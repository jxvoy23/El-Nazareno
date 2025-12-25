
import React from 'react';
import type { ChurchEvent } from '../types';
import { CalendarIcon, LocationMarkerIcon, BellIcon, BellOffIcon } from './Icons';

interface EventCardProps {
  event: ChurchEvent;
  isSubscribed: boolean;
  onToggleSubscription: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, isSubscribed, onToggleSubscription }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-primary mb-2">{event.title}</h2>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3 text-gray-600">
          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-secondary" />
            <span>{event.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {event.date.toLocaleTimeString('en-US', { hour: '2-digit', minute:'2-digit' })}</span>
          </div>
          <div className="flex items-center">
            <LocationMarkerIcon className="w-5 h-5 mr-2 text-secondary" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-gray-700">{event.description}</p>
      </div>
      <button
        onClick={onToggleSubscription}
        className={`mt-4 md:mt-0 flex-shrink-0 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${isSubscribed ? 'bg-secondary text-white hover:bg-amber-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
      >
        {isSubscribed ? <BellOffIcon className="w-5 h-5" /> : <BellIcon className="w-5 h-5" />}
        <span>{isSubscribed ? 'Subscribed' : 'Notify Me'}</span>
      </button>
    </div>
  );
};

export default EventCard;
