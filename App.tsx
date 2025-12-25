
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Calendar from './components/Calendar';
import About from './components/About';
import Notifications from './components/Notifications';
import { churchInfo, events } from './constants';
import type { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Home');
  const [subscribedEventIds, setSubscribedEventIds] = useState<Set<string>>(new Set());

  const toggleSubscription = (eventId: string) => {
    setSubscribedEventIds(prevIds => {
      const newIds = new Set(prevIds);
      if (newIds.has(eventId)) {
        newIds.delete(eventId);
      } else {
        newIds.add(eventId);
      }
      return newIds;
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home events={events} churchName={churchInfo.name} onNavigate={setActiveTab} />;
      case 'Calendar':
        return <Calendar events={events} subscribedEventIds={subscribedEventIds} onToggleSubscription={toggleSubscription} />;
      case 'About':
        return <About info={churchInfo} />;
      case 'Notifications':
        return <Notifications events={events} subscribedEventIds={subscribedEventIds} onToggleSubscription={toggleSubscription} />;
      default:
        return <Home events={events} churchName={churchInfo.name} onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} churchName={churchInfo.name} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <Footer info={churchInfo} />
    </div>
  );
};

export default App;
