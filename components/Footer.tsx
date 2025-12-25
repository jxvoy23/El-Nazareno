
import React from 'react';
import type { ChurchInfo } from '../types';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from './Icons';

interface FooterProps {
  info: ChurchInfo;
}

const Footer: React.FC<FooterProps> = ({ info }) => {
  return (
    <footer className="bg-dark-text text-slate-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">{info.name}</h3>
            <p className="text-sm">{info.missionStatement}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center md:justify-start">
                <LocationMarkerIcon className="w-4 h-4 mr-2 text-secondary" />
                <span>{info.address}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <PhoneIcon className="w-4 h-4 mr-2 text-secondary" />
                <a href={`tel:${info.contact.phone}`} className="hover:text-secondary">{info.contact.phone}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MailIcon className="w-4 h-4 mr-2 text-secondary" />
                <a href={`mailto:${info.contact.email}`} className="hover:text-secondary">{info.contact.email}</a>
              </li>
            </ul>
          </div>
          <div>
             <h3 className="text-lg font-semibold text-white mb-2">Service Times</h3>
             <ul className="space-y-1 text-sm">
                {info.serviceTimes.map((time, index) => <li key={index}>{time}</li>)}
             </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-600 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {info.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
