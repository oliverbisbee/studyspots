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
  }
];