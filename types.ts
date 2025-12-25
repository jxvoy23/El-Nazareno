
export interface ChurchEvent {
  id: string;
  title: string;
  date: Date;
  location: string;
  description: string;
}

export interface StaffMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ChurchInfo {
  name: string;
  missionStatement: string;
  serviceTimes: string[];
  address: string;
  contact: {
    phone: string;
    email: string;
  };
  staff: StaffMember[];
}

export type Tab = 'Home' | 'Calendar' | 'About' | 'Notifications';
