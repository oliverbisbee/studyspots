"use client";
import { useRef, useState, useEffect } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { studySpots, StudySpot } from './studySpots';
import SidePanel from './SidePanel';

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
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [selectedSpot, setSelectedSpot] = useState<StudySpot | null>(null);

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

  const getMarkerColor = (type: StudySpot['type']) => {
    switch (type) {
      case 'library': return '#DC2626';
      case 'cafe': return '#EA580C';
      case 'building': return '#2563EB';
      case 'outdoor': return '#16A34A';
      default: return '#DC2626';
    }
  };

  useEffect(() => {
    if (ref.current && !map) {
      const uoftLocation = { lat: 43.6629, lng: -79.3957 };
      
      const newMap = new google.maps.Map(ref.current, {
        center: uoftLocation,
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
          }
        ]
      });
      
      setMap(newMap);
    }
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      markers.forEach(marker => marker.setMap(null));
      
      const newMarkers: google.maps.Marker[] = [];
      const filteredSpots = getFilteredSpots();
      
      filteredSpots.forEach((spot) => {
        const marker = new google.maps.Marker({
          position: spot.coordinates,
          map: map,
          title: spot.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: getMarkerColor(spot.type),
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2,
            scale: 10,
          },
        });

        marker.addListener('click', () => {
          setSelectedSpot(null);
          setTimeout(() => {
            setSelectedSpot(spot);
          }, 10);
        });

        newMarkers.push(marker);
      });
      
      setMarkers(newMarkers);
    }
  }, [map, activeFilter]);

  const handleClosePanel = () => {
    setSelectedSpot(null);
  };

  return (
    <div className="relative flex">
      <div 
        className={`transition-all duration-300 ${selectedSpot ? 'w-2/3' : 'w-full'}`}
      >
        <div ref={ref} className="h-[575px] w-full" />
      </div>
      <SidePanel spot={selectedSpot} onClose={handleClosePanel} />
    </div>
  );
};

const Map: React.FC<{ activeFilter: string }> = ({ activeFilter }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

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