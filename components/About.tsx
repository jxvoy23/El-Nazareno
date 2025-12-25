
import React from 'react';
import type { ChurchInfo } from '../types';
import { ClockIcon, LocationMarkerIcon } from './Icons';

interface AboutProps {
  info: ChurchInfo;
}

const About: React.FC<AboutProps> = ({ info }) => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">About {info.name}</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">{info.missionStatement}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
            <ClockIcon className="w-6 h-6 mr-3 text-secondary" />
            Service Times
          </h2>
          <ul className="space-y-2">
            {info.serviceTimes.map((time, index) => <li key={index} className="text-gray-700">{time}</li>)}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
            <LocationMarkerIcon className="w-6 h-6 mr-3 text-secondary" />
            Our Location
          </h2>
          <p className="text-gray-700">{info.address}</p>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.address)}`} target="_blank" rel="noopener noreferrer" className="text-secondary font-semibold mt-4 inline-block hover:underline">Get Directions</a>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {info.staff.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <img src={member.imageUrl} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-secondary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
