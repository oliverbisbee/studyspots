import React from 'react';
import { StudySpot } from './studySpots';

interface FilterButtonsProps {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilterChange, activeFilter }) => {
  const filters = [
    { key: 'all', label: 'All Spots', color: '#333' },
    { key: 'library', label: 'Libraries', color: '#F0E68C' }, // Light yellow
    { key: 'cafe', label: 'Cafés', color: '#D2B48C' },        // Light brown
    { key: 'building', label: 'Buildings', color: '#87CEEB' }, // Light blue
    { key: 'outdoor', label: 'Outdoor', color: '#90EE90' },    // Light green
    { key: 'tcard-required', label: 'T-Card Required', color: '#DDA0DD' }, // Light purple (harmonious)
    { key: 'tcard-not-required', label: 'T-Card Not Required', color: '#F0A0A0' } // Light coral (harmonious)
  ];

  const buttonStyle = (filter: any) => ({
    padding: '8px 16px',
    margin: '5px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    fontSize: '14px',
    backgroundColor: activeFilter === filter.key ? filter.color : '#f0f0f0',
    color: activeFilter === filter.key ? (filter.key === 'all' ? 'white' : '#333') : '#333', // Dark text for light colors
    transition: 'all 0.3s ease',
  });

  return (
    <div style={{ 
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      marginBottom: '10px',
      textAlign: 'center' as const
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>Filter Study Spots:</h4>
      <div>
        {filters.map((filter) => (
          <button
            key={filter.key}
            style={buttonStyle(filter)}
            onClick={() => onFilterChange(filter.key)}
            onMouseOver={(e) => {
              if (activeFilter !== filter.key) {
                e.currentTarget.style.backgroundColor = '#e0e0e0';
              }
            }}
            onMouseOut={(e) => {
              if (activeFilter !== filter.key) {
                e.currentTarget.style.backgroundColor = '#f0f0f0';
              }
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;