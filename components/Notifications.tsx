
import React from 'react';
import type { ChurchEvent } from '../types';
import { BellIcon, BellOffIcon } from './Icons';

interface NotificationsProps {
  events: ChurchEvent[];
  subscribedEventIds: Set<string>;
  onToggleSubscription: (eventId: string) => void;
}

const Notifications: React.FC<NotificationsProps> = ({ events, subscribedEventIds, onToggleSubscription }) => {
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Manage Notifications</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Click the bell icon next to an event to receive a reminder. This is a demo; in a real app, this would enable push notifications.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-3xl mx-auto">
        <ul className="divide-y divide-gray-200">
          {sortedEvents.length > 0 ? (
            sortedEvents.map(event => {
              const isSubscribed = subscribedEventIds.has(event.id);
              return (
                <li key={event.id} className="p-4 flex justify-between items-center hover:bg-slate-50">
                  <div>
                    <h3 className="font-semibold text-primary">{event.title}</h3>
                    <p className="text-sm text-gray-500">
                      {event.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                  <button
                    onClick={() => onToggleSubscription(event.id)}
                    className={`p-2 rounded-full transition-colors duration-200 ${isSubscribed ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                    aria-label={isSubscribed ? `Unsubscribe from ${event.title}` : `Subscribe to ${event.title}`}
                  >
                    {isSubscribed ? <BellOffIcon className="w-6 h-6" /> : <BellIcon className="w-6 h-6" />}
                  </button>
                </li>
              );
            })
          ) : (
             <li className="p-4 text-center text-gray-500">No events available to subscribe to.</li>
          )}
        </ul>
      </div>
       {subscribedEventIds.size > 0 && (
         <div className="text-center mt-8 p-4 bg-green-100 text-green-800 rounded-lg max-w-3xl mx-auto">
            You are subscribed to receive notifications for {subscribedEventIds.size} event{subscribedEventIds.size > 1 ? 's' : ''}.
         </div>
       )}
    </div>
  );
};

export default Notifications;
