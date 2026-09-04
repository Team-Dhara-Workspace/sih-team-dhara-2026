import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  Compass, 
  MapPin, 
  Navigation, 
  CheckCircle2 
} from 'lucide-react';
import type { AnomalyItem } from '../../types';

export const SoftwareGeotagging: React.FC = () => {
  const [selectedPin, setSelectedPin] = useState<number>(0);

  const markers: AnomalyItem[] = [
    {
      id: 'ANOM-01',
      name: 'Ghost Net Cluster A',
      type: 'Ghost Net',
      confidence: 94,
      latitude: '13.0827° N',
      longitude: '80.2707° E',
      dimensions: '3.2m × 1.8m',
      status: 'HIGH PRIORITY',
      depth: '22.4m',
      acousticShadowLength: '4.8m'
    },
    {
      id: 'ANOM-02',
      name: 'Submerged Pipeline Segment',
      type: 'Pipe',
      confidence: 87,
      latitude: '13.0855° N',
      longitude: '80.2742° E',
      dimensions: '5.1m × 0.6m',
      status: 'MEDIUM',
      depth: '19.8m',
      acousticShadowLength: '2.1m'
    },
    {
      id: 'ANOM-03',
      name: 'Sunken Fishing Vessel Hull',
      type: 'Shipwreck',
      confidence: 96,
      latitude: '13.0792° N',
      longitude: '80.2665° E',
      dimensions: '14.2m × 4.8m',
      status: 'HIGH PRIORITY',
      depth: '28.1m',
      acousticShadowLength: '11.5m'
    },
    {
      id: 'ANOM-04',
      name: 'Synthetic Drum / Cylinder',
      type: 'Cylinder',
      confidence: 81,
      latitude: '13.0811° N',
      longitude: '80.2721° E',
      dimensions: '1.2m × 0.8m',
      status: 'REVIEWED',
      depth: '21.0m',
      acousticShadowLength: '1.9m'
    }
  ];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Acoustic-to-Geospatial Fusion"
        badgeVariant="cyan"
        title="Geotagging Engine & Spatial Mapping"
        subtitle="Converting pixel slant-range offsets into sub-meter accurate WGS84 coordinates for diver retrieval teams."
      />

      <div className="max-w-6xl mx-auto space-y-8 text-left">
        
        {/* Math & Fusion Formula Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono">
              <span className="text-[10px] text-cyan-400 block font-bold">PARAM 01</span>
              <span className="text-xs font-bold text-white">Sonar Ping Index</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono">
              <span className="text-[10px] text-cyan-400 block font-bold">PARAM 02</span>
              <span className="text-xs font-bold text-white">USBL / GPS Fix</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono">
              <span className="text-[10px] text-cyan-400 block font-bold">PARAM 03</span>
              <span className="text-xs font-bold text-white">AUV Heading & Pitch</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono">
              <span className="text-[10px] text-cyan-400 block font-bold">PARAM 04</span>
              <span className="text-xs font-bold text-white">Bounding Box Offset</span>
            </div>
          </div>

          <div className="flex justify-center my-3">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/50 font-mono text-xs font-bold">
              <Compass className="w-4 h-4 text-cyan-400 animate-spin" />
              Geospatial Coordinate Fusion Algorithm
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-center font-mono text-xs text-cyan-200">
            Exact Target Geo-Location = <code className="text-white font-bold">[Lat: 13.0827° N, Lon: 80.2707° E, Depth: 22.4m]</code> (Error Margin &lt; 0.45m)
          </div>
        </div>

        {/* Interactive Nautical Map & Marker Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Map Canvas */}
          <div className="lg:col-span-7 p-5 rounded-2xl bg-[#030712] border border-cyan-900/50 relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5" /> BATHYMETRIC SURVEY GRID
              </span>
              <span className="text-slate-400 text-[10px]">COROMANDEL SECTOR 04</span>
            </div>

            {/* Map Background Grid */}
            <div className="relative h-72 sm:h-80 rounded-xl bg-[#040915] border border-slate-800 p-4 overflow-hidden">
              {/* Bathymetric contour lines simulation */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
              
              {/* Map Coordinates overlay */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-500">
                13.090° N / 80.260° E
              </div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-500">
                13.075° N / 80.280° E
              </div>

              {/* AUV Survey Track Path Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 40 40 L 120 180 L 220 90 L 320 220 L 420 140" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="6,6" opacity="0.6" />
              </svg>

              {/* Interactive Anomaly Pins */}
              {markers.map((marker, idx) => {
                const isSelected = selectedPin === idx;
                const positions = [
                  { top: '35%', left: '28%' },
                  { top: '22%', left: '65%' },
                  { top: '68%', left: '20%' },
                  { top: '55%', left: '75%' },
                ];
                return (
                  <button
                    key={marker.id}
                    onClick={() => setSelectedPin(idx)}
                    style={positions[idx]}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border transition-all duration-300 ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 border-white ring-4 ring-cyan-500/40 scale-125 z-20'
                        : 'bg-slate-900 text-cyan-400 border-cyan-500/60 hover:scale-110 z-10'
                    }`}
                    title={marker.name}
                  >
                    <MapPin className="w-4 h-4" />
                  </button>
                );
              })}
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Click pins to view target telemetry</span>
              <span className="text-cyan-400 font-bold">{markers.length} Targets Tagged</span>
            </div>
          </div>

          {/* Right: Selected Anomaly Detail Telemetry Card */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/30 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-mono text-xs font-bold text-cyan-400">
                {markers[selectedPin].id}
              </span>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                markers[selectedPin].status === 'HIGH PRIORITY'
                  ? 'bg-red-500/20 text-red-300 border-red-500/30'
                  : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
              }`}>
                {markers[selectedPin].status}
              </span>
            </div>

            <h3 className="text-base font-bold text-white font-mono">
              {markers[selectedPin].name}
            </h3>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Target Type:</span>
                <span className="text-cyan-300 font-bold">{markers[selectedPin].type}</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">AI Confidence:</span>
                <span className="text-emerald-400 font-bold">{markers[selectedPin].confidence}% Verified</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Latitude:</span>
                <span className="text-slate-200">{markers[selectedPin].latitude}</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Longitude:</span>
                <span className="text-slate-200">{markers[selectedPin].longitude}</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Est. Dimensions:</span>
                <span className="text-slate-200">{markers[selectedPin].dimensions}</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Seafloor Depth:</span>
                <span className="text-slate-200">{markers[selectedPin].depth}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-900/50 text-[11px] font-mono text-cyan-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Ready for Diver / ROV clean-up dispatch</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
