
import type { ChurchEvent, ChurchInfo } from './types';

const getFutureDate = (daysToAdd: number): Date => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    return date;
};

export const events: ChurchEvent[] = [
  {
    id: '1',
    title: 'Sunday Morning Worship',
    date: getFutureDate(3),
    location: 'Main Sanctuary',
    description: 'Join us for our weekly worship service with music, prayer, and a message of hope.'
  },
  {
    id: '2',
    title: 'Youth Group Night',
    date: getFutureDate(5),
    location: 'Youth Hall',
    description: 'A fun night for teens with games, food, and discussion. All 6th-12th graders welcome!'
  },
  {
    id: '3',
    title: 'Community Food Drive',
    date: getFutureDate(10),
    location: 'Church Parking Lot',
    description: 'Help support our local community by donating non-perishable food items. Volunteers needed!'
  },
  {
    id: '4',
    title: 'Men\'s Breakfast',
    date: getFutureDate(12),
    location: 'Fellowship Hall',
    description: 'A time for men to connect over a hearty breakfast and encouraging conversation.'
  },
  {
    id: '5',
    title: 'Women\'s Bible Study',
    date: getFutureDate(15),
    location: 'Room 102',
    description: 'Dive deep into scripture with a supportive group of women. All are welcome.'
  },
  {
    id: '6',
    title: 'Annual Church Picnic',
    date: getFutureDate(25),
    location: 'City Park - Pavilion 3',
    description: 'A day of fun, food, and fellowship for the whole church family. Please sign up to bring a dish.'
  },
];

export const churchInfo: ChurchInfo = {
  name: "Community Church of Hope",
  missionStatement: "To be a beacon of hope and a community of faith, sharing God's love with our neighbors and the world.",
  serviceTimes: [
    "Sunday Morning Worship: 10:00 AM",
    "Sunday School (All Ages): 9:00 AM",
    "Wednesday Evening Prayer: 7:00 PM"
  ],
  address: "123 Grace Avenue, Faithville, USA 12345",
  contact: {
    phone: "(555) 123-4567",
    email: "contact@communitychurchofhope.org"
  },
  staff: [
    {
      name: "Pastor John Smith",
      role: "Senior Pastor",
      bio: "Pastor John has been leading our congregation since 2010. He is passionate about teaching the Bible and helping people grow in their faith.",
      imageUrl: "https://picsum.photos/seed/pastor1/400/400"
    },
    {
      name: "Maria Garcia",
      role: "Worship Leader",
      bio: "Maria brings a wealth of musical talent and a heart for worship to our services. She leads our choir and praise band.",
      imageUrl: "https://picsum.photos/seed/pastor2/400/400"
    },
    {
      name: "David Chen",
      role: "Youth Director",
      bio: "David is dedicated to mentoring the next generation and creating a vibrant, welcoming community for our youth.",
      imageUrl: "https://picsum.photos/seed/pastor3/400/400"
    }
  ]
};
