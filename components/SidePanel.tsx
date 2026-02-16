"use client";
import { StudySpot } from './studySpots';

interface SidePanelProps {
  spot: StudySpot | null;
  onClose: () => void;
}

export default function SidePanel({ spot, onClose }: SidePanelProps) {
  if (!spot) return null;

  return (
    <div className="w-1/3 h-[575px] bg-gray-50 shadow-2xl overflow-y-auto">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 text-2xl font-light"
        aria-label="Close panel"
      >
        ×
      </button>

      {/* Content */}
      <div className="p-5 pt-12">
        {/* Image placeholder */}
        <div className="w-full aspect-video bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 mb-4">
          Image coming soon
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {spot.name}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {spot.description}
        </p>

        {/* Details - Two columns */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          <div>
            <span className="font-semibold text-gray-900 block">Floors:</span>
            <span className="text-gray-700">{spot.floors}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 block">T-Card:</span>
            <span className="text-gray-700">{spot.tcardRequired ? 'Yes' : 'No'}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 block">Hours:</span>
            <span className="text-gray-700">{spot.hours}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 block">Noise Level:</span>
            <span className="text-gray-700">{spot.noiseLevel}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 block">Wifi Quality:</span>
            <span className="text-gray-700">{spot.wifiQuality}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 block">Seating Type:</span>
            <span className="text-gray-700">{spot.seating}</span>
          </div>


        </div>
      </div>
    </div>
  );
}