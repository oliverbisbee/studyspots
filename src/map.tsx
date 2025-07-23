import React from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <div>Loading map...</div>;
    case Status.FAILURE:
      return <div>Error loading map</div>;
    case Status.SUCCESS:
      return <MapComponent />;
  }
};

const MapComponent = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  React.useEffect(() => {
    if (ref.current && !map) {
      // Center on University of Toronto
      const uoftLocation = { lat: 43.6629, lng: -79.3957 };
      
      setMap(
        new (window as any).google.maps.Map(ref.current, {
          center: uoftLocation,
          zoom: 15,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
        })
      );
    }
  }, [ref, map]);

  return <div ref={ref} style={{ height: '500px', width: '100%' }} />;
};

const Map: React.FC = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <div>Error: Google Maps API key not found</div>;
  }

  return (
    <Wrapper apiKey={apiKey} render={render}>
      <MapComponent />
    </Wrapper>
  );
};

export default Map;