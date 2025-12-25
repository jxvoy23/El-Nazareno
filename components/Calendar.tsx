
import React from 'react';
import type { ChurchEvent } from '../types';
import EventCard from './EventCard';

interface CalendarProps {
  events: ChurchEvent[];
  subscribedEventIds: Set<string>;
  onToggleSubscription: (eventId: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ events, subscribedEventIds, onToggleSubscription }) => {
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div>
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Upcoming Events</h1>
      <div className="space-y-6 max-w-4xl mx-auto">
        {sortedEvents.length > 0 ? (
          sortedEvents.map(event => (
            <EventCard
              key={event.id}
              event={event}
              isSubscribed={subscribedEventIds.has(event.id)}
              onToggleSubscription={() => onToggleSubscription(event.id)}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">No upcoming events. Please check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
