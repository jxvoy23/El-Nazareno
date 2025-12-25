
import React from 'react';
import EventCard from './EventCard';
import type { ChurchEvent, Tab } from '../types';

interface HomeProps {
  events: ChurchEvent[];
  churchName: string;
  onNavigate: (tab: Tab) => void;
}

const Home: React.FC<HomeProps> = ({ events, churchName, onNavigate }) => {
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center rounded-lg shadow-xl overflow-hidden min-h-[400px] flex items-center justify-center text-center p-8" style={{backgroundImage: "url('https://picsum.photos/seed/church/1200/400')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Welcome to {churchName}</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">A place to belong, believe, and become.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => onNavigate('About')}
              className="bg-secondary hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Learn More About Us
            </button>
            <button 
              onClick={() => onNavigate('Calendar')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-dark-text text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                View Upcoming Events
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
               <h3 className="text-xl font-semibold text-primary mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                    {event.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-gray-700">{event.description}</p>
                <button onClick={() => onNavigate('Calendar')} className="text-secondary font-semibold mt-4 inline-block hover:underline">
                    View Details &rarr;
                </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
