export interface StudySpot {
  id: number;
  name: string;
  type: 'library' | 'cafe' | 'building' | 'outdoor';
  floors: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  hours: string;
  tcardRequired: boolean;
  noiseLevel: 'quiet' | 'moderate' | 'busy';
  wifiQuality: 'excellent' | 'good' | 'fair';
  outlets: 'many' | 'some' | 'few' | 'none';
  seating: string;
}

export const studySpots: StudySpot[] = [
  {
    id: 1,
    name: "Robarts Library",
    type: "library",
    floors: 14,
    coordinates: { lat: 43.6645, lng: -79.3994 },
    description: "UofT's iconic main library. All floors have study areas, higher floors are typicaly quieter.",
    hours: "24/7 (during weekdays)",
    tcardRequired: true,
    noiseLevel: "quiet",
    wifiQuality: "excellent",
    outlets: "many",
    seating: "Individual desks, group tables"
  },
  {
    id: 2,
    name: "Gerstein Science Library", 
    type: "library",
    floors: 4,
    coordinates: { lat: 43.6621, lng: -79.3936 },
    description: "Science library with collaborative spaces and quiet study areas.",
    hours: "8:30am-11pm (Mon-Fri)",
    tcardRequired: true,
    noiseLevel: "moderate",
    wifiQuality: "excellent", 
    outlets: "many",
    seating: "Mix of individual and group seating, study rooms available for booking"
  },
  {
    id: 3,
    name: "Starbucks - Robarts",
    type: "cafe",
    floors: 1,
    coordinates: { lat: 43.6645, lng: -79.3997 },
    description: "Busy Starbucks in Robarts Library floor 2. Good for quick study sessions.",
    hours: "7am-10pm",
    tcardRequired: false,
    noiseLevel: "busy",
    wifiQuality: "good",
    outlets: "few",
    seating: "Limited tables, mostly standing"
  },
  {
    id: 4,
    name: "Hart House Library",
    type: "library", 
    floors: 1,
    coordinates: { lat: 43.6636, lng: -79.3949 },
    description: "Beautiful reading room with wooden tables and historical atmosphere.",
    hours: "9:30am-4pm",
    tcardRequired: false,
    noiseLevel: "quiet",
    wifiQuality: "good",
    outlets: "some",
    seating: "Large wooden tables, very aesthetic"
  },
  {
    id: 5,
    name: "Sidney Smith Commons",
    type: "building",
    floors: 1,
    coordinates: { lat: 43.6625, lng: -79.3985 },
    description: "Open study space with tables and couches. Often busy between classes.",
    hours: "10am-6pm",
    tcardRequired: false,
    noiseLevel: "moderate",
    wifiQuality: "excellent", 
    outlets: "many",
    seating: "Tables, couches, individual desks"
  },
  {
    id: 6,
    name: "Bahen Centre Study Spots",
    type: "building",
    floors: 8,
    coordinates: { lat: 43.6595, lng: -79.3966 },
    description: "Multiple floors with study areas. Popular with CS students.",
    hours: "8am-11pm",
    tcardRequired: false,
    noiseLevel: "moderate",
    wifiQuality: "excellent",
    outlets: "some",
    seating: "Individual desks, some group tables"
  },
  {id: 7, 
    name: "Kings College Circle",
    type: "outdoor",
    floors: 0, 
    coordinates: {lat: 43.6617, lng: -79.3951},
    hours: "Open 24/7",
    description: "Outdoor area with benches. Great for sunny days.",
    tcardRequired: false,
    noiseLevel: "busy",
    wifiQuality: "fair",
    outlets: "none",
    seating: "Benches, grassy areas"
  },
  {
  id: 8,
  name: "Thomas Fisher Rare Book Library",
  type: "library",
  floors: 4,
  coordinates: { lat: 43.664097, lng: -79.398465 },
  description: "Special collections and rare books. Quiet reading rooms and strong reference services.",
  hours: "Mon-Fri 9am-5pm (special hours for reading room)",
  tcardRequired: true,
  noiseLevel: "quiet",
  wifiQuality: "excellent",
  outlets: "some",
  seating: "Reading carrels, small group tables, restricted-access rare book rooms"
},
{
  id: 9,
  name: "E.J. Pratt Library (Victoria College)",
  type: "library",
  floors: 3,
  coordinates: { lat: 43.666291, lng: -79.391321 },
  description: "Victoria College library with student-focused study areas and group rooms.",
  hours: "Mon-Fri 8:30am-10pm",
  tcardRequired: false,
  noiseLevel: "quiet",
  wifiQuality: "good",
  outlets: "some",
  seating: "Mix of study carrels, sofas, small group rooms"
},
{
  id: 10,
  name: "D.G. Ivey Library (New College)",
  type: "library",
  floors: 2,
  coordinates: { lat: 43.6618, lng: -79.4002 },
  description: "College library with reservable group rooms and quiet corners for focused work.",
  hours: "Mon-Fri 9am-9pm",
  tcardRequired: false,
  noiseLevel: "quiet",
  wifiQuality: "excellent",
  outlets: "some",
  seating: "Study rooms, individual desks, small group tables"
},
{
  id: 11,
  name: "Innis College Library",
  type: "library",
  floors: 2,
  coordinates: { lat: 43.665552, lng: -79.399530 },
  description: "College library and commons with relaxed study spaces and group meeting rooms.",
  hours: "Mon-Fri 9am-8pm",
  tcardRequired: false,
  noiseLevel: "moderate",
  wifiQuality: "good",
  outlets: "some",
  seating: "Couches, long communal tables, small study rooms"
},
{
  id: 12,
  name: "John W. Graham Library (Trinity College)",
  type: "library",
  floors: 2,
  coordinates: { lat: 43.6651, lng: -79.3964 },
  description: "Trinity College library offering a mix of quiet stacks and study carrels; aesthetic historic rooms.",
  hours: "Mon-Fri 9am-5pm",
  tcardRequired: false,
  noiseLevel: "quiet",
  wifiQuality: "excellent",
  outlets: "many",
  seating: "Individual carrels, small group tables, reading rooms"
},
{
  id: 13,
  name: "The Arbor Room (Hart House)",
  type: "cafe",
  floors: 1,
  coordinates: { lat: 43.664014, lng: -79.394332 },
  description: "Hart House dining/cafe space. Good for grab-and-go or short study breaks.",
  hours: "Mon-Fri 8:30am-7pm, Sat 9am-3pm",
  tcardRequired: false,
  noiseLevel: "moderate",
  wifiQuality: "good",
  outlets: "some",
  seating: "Tables and booths, casual communal seating"
},
{
  id: 14,
  name: "Caffiends (Victoria College)",
  type: "cafe",
  floors: 1,
  coordinates: { lat: 43.666291, lng: -79.391321 },
  description: "Student-run cafe at Victoria offering fair-trade coffee and a relaxed study vibe.",
  hours: "Mon-Fri 9am-5pm",
  tcardRequired: false,
  noiseLevel: "moderate",
  wifiQuality: "good",
  outlets: "few",
  seating: "Small tables, some lounge seating"
},
{
  id: 15,
  name: "Café Reznikoff",
  type: "cafe",
  floors: 1,
  coordinates: { lat: 43.6631, lng: -79.3977 },
  description: "Bright cafe inside Morrison Hall with big windows and study-friendly seating.",
  hours: "Mon-Thu 7:30am-11pm, Fri 7:30am-5:30pm",
  tcardRequired: false,
  noiseLevel: "moderate",
  wifiQuality: "good",
  outlets: "some",
  seating: "Tables, seating by windows, grab-and-go counter"
},
{
  id: 16,
  name: "Acacia Cafe (Student Commons)",
  type: "cafe",
  floors: 1,
  coordinates: { lat: 43.659056, lng: -79.396895 },
  description: "Cozy campus cafe in Student Commons serving coffee and light meals.",
  hours: "Mon-Thu 8:30am-5pm, Fri 8:30am-4pm",
  tcardRequired: false,
  noiseLevel: "moderate",
  wifiQuality: "good",
  outlets: "some",
  seating: "Small tables, communal counter seating"
},
{
  id: 17,
  name: "Graduate House (residence & commons)",
  type: "building",
  floors: 12,
  coordinates: { lat: 43.6635, lng: -79.4016 },
  description: "Graduate residence with study lounges, reading rooms and quiet workspaces for grads.",
  hours: "Building access varies; commons typically 7am-11pm",
  tcardRequired: true,
  noiseLevel: "quiet",
  wifiQuality: "excellent",
  outlets: "many",
  seating: "Study lounges, small group rooms, quiet reading areas"
},
{
  id: 18,
  name: "Medical Sciences Building (MSB)",
  type: "building",
  floors: 7,
  coordinates: { lat: 43.660882, lng: -79.393552 },
  description: "MSB offers discovery commons, study rooms and labs; some areas restricted to health students.",
  hours: "Mon-Fri 8:30am-5pm (some learner spaces 24/7 by access)",
  tcardRequired: false,
  noiseLevel: "moderate",
  wifiQuality: "excellent",
  outlets: "many",
  seating: "Open commons, small group rooms, designated quiet spaces"
},
{
  id: 19,
  name: "Trinity College Quadrangle",
  type: "outdoor",
  floors: 0,
  coordinates: { lat: 43.665419, lng: -79.395736 },
  description: "Historic grassy quad with benches and stone seating; best on sunny days for informal study.",
  hours: "Open 24/7",
  tcardRequired: false,
  noiseLevel: "busy",
  wifiQuality: "fair",
  outlets: "none",
  seating: "Benches, lawns, stone steps"
},
{
  id: 20,
  name: "Diablos' Coffee Bar",
  type: "cafe",
  floors: 0,
  coordinates: { lat: 43.6631, lng: -79.3964 },
  description: "Found in the Junior Common Room of University College. A student run cafe that offers fair trade coffee, freshly baked treats, tea and snacks.",
  hours: "Open 24/7",
  tcardRequired: false,
  noiseLevel: "busy",
  wifiQuality: "fair",
  outlets: "some",
  seating: "Couches, tables, grab-and-go counter"
}
];