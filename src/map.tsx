import React from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { studySpots, StudySpot } from './studySpots';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faMugHot, faBuilding, faTree } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faBook, faMugHot, faBuilding, faTree);

const render = (status: Status, activeFilter: string) => {
  switch (status) {
    case Status.LOADING:
      return <div>Loading map...</div>;
    case Status.FAILURE:
      return <div>Error loading map</div>;
    case Status.SUCCESS:
      return <MapComponent activeFilter={activeFilter} />;
  }
};

const MapComponent: React.FC<{ activeFilter: string }> = ({ activeFilter }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = React.useState<google.maps.Marker[]>([]);

  // Function to filter study spots based on active filter
  const getFilteredSpots = () => {
    switch (activeFilter) {
      case 'library':
        return studySpots.filter(spot => spot.type === 'library');
      case 'cafe':
        return studySpots.filter(spot => spot.type === 'cafe');
      case 'building':
        return studySpots.filter(spot => spot.type === 'building');
      case 'outdoor':
        return studySpots.filter(spot => spot.type === 'outdoor');
      case 'tcard-required':
        return studySpots.filter(spot => spot.tcardRequired === true);
      case 'tcard-not-required':
        return studySpots.filter(spot => spot.tcardRequired === false);
      case 'all':
      default:
        return studySpots;
    }
  };

  // Function to get marker color based on study spot type - NEW COLOR SCHEME
  const getMarkerColor = (type: StudySpot['type']) => {
    switch (type) {
      case 'library': return '#F0E68C'; // Light yellow
      case 'cafe': return '#D2B48C';    // Light brown  
      case 'building': return '#87CEEB'; // Light blue
      case 'outdoor': return '#90EE90';  // Light green
      default: return '#F0E68C';
    }
  };

  // Function to create Font Awesome SVG data URL for markers with white circle background
  const createFontAwesomeMarker = (type: StudySpot['type']): string => {
    const color = getMarkerColor(type);
    let iconPath = '';
    
    switch (type) {
      case 'library':
        // Font Awesome book icon path
        iconPath = 'M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-32s-14.33-32-32-32H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h320C443.8 384 448 379.8 448 336zM111.1 128h224c8.836 0 16 7.162 16 16S344.8 160 335.1 160h-224C103.2 160 96 152.8 96 144S103.2 128 111.1 128zM111.1 192h224c8.836 0 16 7.162 16 16S344.8 224 335.1 224h-224C103.2 224 96 216.8 96 208S103.2 192 111.1 192z';
        break;
      case 'cafe':
        // Font Awesome mug-saucer icon path
        iconPath = 'M88 0C74.75 0 64 10.75 64 24V64H32C14.33 64 0 78.33 0 96V320C0 373 43.02 416 96 416H256C309 416 352 373 352 320V224H384C419.3 224 448 195.3 448 160V128C448 92.69 419.3 64 384 64H352V24C352 10.75 341.3 0 328 0S304 10.75 304 24V64H112V24C112 10.75 101.3 0 88 0zM64 320C64 337.7 78.33 352 96 352H256C273.7 352 288 337.7 288 320V96H64V320zM384 128V160C384 177.7 398.3 192 416 192S448 177.7 448 160V128C448 110.3 433.7 96 416 96S384 110.3 384 128zM32 448H384C401.7 448 416 462.3 416 480S401.7 512 384 512H32C14.33 512 0 497.7 0 480S14.33 448 32 448z';
        break;
      case 'building':
        // Font Awesome building icon path
        iconPath = 'M384 48V512h96V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v464h384zM64 192c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm0 128c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm128-128c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm0 128c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm128-128c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm0 128c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32z';
        break;
      case 'outdoor':
        // Font Awesome leaf icon path
        iconPath = 'M272.5 5.7c9-7.6 22.1-7.6 31.1 0l264 224c15.2 12.9 7.7 36.5-12.3 38.6L309.8 284l57.2 144.4c4.7 11.9 2.4 25.5-6.1 34.4s-21.7 11.9-33.2 7.2L206.9 417.1 86.1 470c-11.5 4.7-24.8 1.8-33.2-7.2s-10.8-22.5-6.1-34.4L104 284 58.5 268.3c-20-6.1-27.5-29.7-12.3-38.6l264-224z';
        break;
      default:
        iconPath = 'M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-32s-14.33-32-32-32H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h320C443.8 384 448 379.8 448 336z';
    }

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
        <!-- White circle background with subtle border -->
        <circle cx="20" cy="20" r="18" fill="white" stroke="#ddd" stroke-width="1"/>
        <!-- Font Awesome icon centered in circle -->
        <g transform="translate(8, 8) scale(0.047, 0.047)">
          <path fill="${color}" d="${iconPath}"/>
        </g>
      </svg>
    `;
    
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  React.useEffect(() => {
    if (ref.current && !map) {
      // Center on University of Toronto
      const uoftLocation = { lat: 43.6629, lng: -79.3957 };
      
      const newMap = new (window as any).google.maps.Map(ref.current, {
        center: uoftLocation,
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
      });
      
      setMap(newMap);
    }
  }, [ref, map]);

  // Add markers when map is ready or filter changes
  React.useEffect(() => {
    if (map) {
      // Clear existing markers
      markers.forEach(marker => marker.setMap(null));
      
      const newMarkers: google.maps.Marker[] = [];
      const filteredSpots = getFilteredSpots();
      
      filteredSpots.forEach((spot) => {
        const marker = new (window as any).google.maps.Marker({
          position: spot.coordinates,
          map: map,
          title: spot.name,
          icon: {
            url: createFontAwesomeMarker(spot.type),
            scaledSize: new (window as any).google.maps.Size(40, 40), // Size 40x40 for the circle
            anchor: new (window as any).google.maps.Point(20, 20), // Center the icon
          },
        });

        // Add click listener for basic info (we'll improve this later)
        marker.addListener('click', () => {
          alert(`${spot.name}\n${spot.description}\nFloors: ${spot.floors}\nHours: ${spot.hours}\nT-Card Required: ${spot.tcardRequired ? 'Yes' : 'No'}\nNoise Level: ${spot.noiseLevel}\nWifi: ${spot.wifiQuality}`);
        });

        newMarkers.push(marker);
      });
      
      setMarkers(newMarkers);
    }
  }, [map, activeFilter]);

  return <div ref={ref} style={{ height: '500px', width: '100%' }} />;
};

const Map: React.FC<{ activeFilter: string }> = ({ activeFilter }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <div>Error: Google Maps API key not found</div>;
  }

  return (
    <Wrapper apiKey={apiKey} render={(status) => render(status, activeFilter)}>
      <MapComponent activeFilter={activeFilter} />
    </Wrapper>
  );
};

export default Map;