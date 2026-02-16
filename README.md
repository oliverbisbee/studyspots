# StudySpots TO 📚

An interactive map application to help University of Toronto students find the perfect study spot on campus. Browse 20+ curated study locations including libraries, cafes, academic buildings, and outdoor spaces.

🔗 **Live Demo**: [https://studyspotstoronto.vercel.app/](https://studyspotstoronto.vercel.app/)

## Features

- 🗺️ **Interactive Google Maps** - Visual map centered on UofT campus with color-coded location markers
- 🎯 **Smart Filtering** - Filter locations by type (Libraries, Cafés, Buildings, Outdoor) or T-Card requirement
- 📍 **20+ Study Locations** - Carefully curated spots across St. George campus
- 📱 **Detailed Information Panel** - Slide-out panel with comprehensive spot details:
  - Operating hours
  - Number of floors
  - T-Card access requirements
  - Noise level indicators
  - Seating arrangements
  - WiFi quality
- 🎨 **Clean, Modern UI** - Built with Tailwind CSS for a responsive, polished experience
- 🔴🟠🔵🟢 **Color-Coded Markers**:
  - Red: Libraries
  - Orange: Cafés
  - Blue: Academic Buildings
  - Green: Outdoor Spaces

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Maps**: [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
- **Maps Integration**: [@googlemaps/react-wrapper](https://www.npmjs.com/package/@googlemaps/react-wrapper)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Google Maps API key ([Get one here](https://developers.google.com/maps/documentation/javascript/get-api-key))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/oliverbisbee/studyspots.git
cd studyspots
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
studyspots/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page with filter state
│   ├── globals.css          # Global styles and Tailwind imports
│   └── favicon.ico
├── components/
│   ├── map.tsx              # Google Maps component with markers
│   ├── SidePanel.tsx        # Location details slide-out panel
│   ├── FilterButtons.tsx    # Filter button group
│   └── studySpots.ts        # Study location data and types
├── public/
├── .env.local               # Environment variables (not committed)
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── package.json
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Study Locations

The app currently features 20+ study spots including:

- **Libraries**: Robarts, Gerstein, Graham ...
- **Cafés**: Café Reznikoff, Diablos' Coffee Bar ...
- **Buildings**: Bahen, Sidney Smith Commons ...
- **Outdoor Spaces**: Trinity College Quad, KCC ...

Each location includes:
- Exact coordinates for map placement
- Floor count
- Operating hours
- T-Card access requirements
- Noise level (quiet/moderate/busy)
- Seating arrangements
- WiFi quality ratings

## How to Use

1. **Browse the Map**: Pan and zoom around the UofT campus to explore study locations
2. **Filter Locations**: Click filter buttons to show only specific types of spots
3. **View Details**: Click any colored marker to open the information panel
4. **Plan Your Study Session**: Use the details to find a spot that matches your needs

## Contributing

Contributions are welcome! If you know a great study spot that's missing:

1. Fork the repository
2. Add the location to `components/studySpots.ts`
3. Follow the existing data structure
4. Submit a pull request

## Future Enhancements

- [ ] Add more study locations across campus
- [ ] User reviews and ratings
- [ ] Real-time occupancy indicators
- [ ] Bookmarking favorite spots
- [ ] Mobile app version
- [ ] Study room booking integration
- [ ] Photos for each location

## License

This project is open source and available under the MIT License.

## Acknowledgments

- University of Toronto for the amazing study spaces
- Google Maps Platform for mapping functionality
- Vercel for hosting and deployment

## Contact

Built by [Oliver Bisbee](https://github.com/oliverbisbee)

Found a bug or have a suggestion? [Open an issue](https://github.com/oliverbisbee/studyspots/issues)

---

**Happy studying! 🎓📖**