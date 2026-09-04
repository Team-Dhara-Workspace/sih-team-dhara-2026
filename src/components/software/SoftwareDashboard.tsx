import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  FileSpreadsheet, 
  Download, 
  FileText, 
  Eye, 
  Crosshair, 
  X,
  Layers
} from 'lucide-react';

export const SoftwareDashboard: React.FC = () => {
  const [selectedAnomaly, setSelectedAnomaly] = useState<number>(0);
  const [modalContent, setModalContent] = useState<'report' | 'json' | 'csv' | null>(null);

  const detections = [
    {
      id: '01',
      type: 'Ghost Net',
      confidence: 94,
      status: 'HIGH PRIORITY',
      coords: '13.0827° N, 80.2707° E',
      dimensions: '3.2m × 1.8m',
      risk: 'Critical entanglement risk for marine fauna'
    },
    {
      id: '02',
      type: 'Pipe',
      confidence: 87,
      status: 'MEDIUM PRIORITY',
      coords: '13.0841° N, 80.2735° E',
      dimensions: '4.6m × 0.8m',
      risk: 'Submerged industrial pipeline anomaly'
    },
    {
      id: '03',
      type: 'Unknown Object',
      confidence: 71,
      status: 'REVIEW REQUIRED',
      coords: '13.0815° N, 80.2690° E',
      dimensions: '1.4m × 0.9m',
      risk: 'Anomalous acoustic shadow requiring second pass'
    }
  ];

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(detections, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "dhara_sonar_detections.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleDownloadCSV = () => {
    const headers = "ID,Type,Confidence,Status,Coordinates,Dimensions\n";
    const rows = detections.map(d => `${d.id},${d.type},${d.confidence}%,${d.status},"${d.coords}","${d.dimensions}"`).join("\n");
    const dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(headers + rows);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "dhara_sonar_detections.csv");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Mission Control"
        badgeVariant="cyan"
        title="Side-Scan Sonar Operator Dashboard"
        subtitle="Live survey waterfall telemetry, AI target bounding boxes, and exportable geospatial reports."
      />

      {/* Main Dashboard Workspace Window */}
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#030713] border border-cyan-900/60 shadow-2xl overflow-hidden text-left">
        
        {/* Dashboard Title Bar */}
        <div className="px-6 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-300 font-bold border-l border-slate-700 pl-3">
              DHARA-SSS-COMMAND // MISSION_04_LIVE_ANALYSIS
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              LIVE TELEMETRY ACTIVE
            </span>
          </div>
        </div>

        {/* 3-Column Interior Grid */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Panel: Raw Waterfall Sonar Viewer */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-cyan-400" /> RAW WATERFALL
              </span>
              <span>450 kHz CHANNEL</span>
            </div>

            <div className="relative h-72 rounded-xl bg-gradient-to-b from-[#0B1528] via-[#050C1A] to-[#02050E] border border-cyan-950 p-3 overflow-hidden font-mono text-[10px]">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:10px_10px]" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/30 border-r border-dashed border-cyan-400/30" />
              
              <div className="relative z-10 flex flex-col justify-between h-full text-slate-400">
                <div className="flex justify-between">
                  <span>PING #14022</span>
                  <span>RANGE: 75m</span>
                </div>
                <div className="text-center text-cyan-400/80 text-[9px] bg-slate-950/80 py-1 rounded">
                  RAW UNPROCESSED ACOUSTIC STREAM
                </div>
                <div className="flex justify-between">
                  <span>SPEED: 3.2 kts</span>
                  <span>HEADING: 142° SE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center: AI Detections Overlaid on Sonar */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Crosshair className="w-3.5 h-3.5 text-cyan-400" /> AI CV DETECTION OVERLAY
              </span>
              <span className="text-cyan-400">YOLOv8 + U-Net</span>
            </div>

            <div className="relative h-72 rounded-xl bg-[#020611] border border-cyan-500/40 p-3 overflow-hidden font-mono">
              <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:14px_14px]" />
              
              {/* Highlighted Selected Anomaly Bounding Box */}
              <div className="relative z-10 p-3 rounded-lg border-2 border-cyan-400 bg-cyan-950/40 backdrop-blur-xs space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-cyan-300">
                  <span>{detections[selectedAnomaly].type}</span>
                  <span className="px-1.5 py-0.2 rounded bg-cyan-500/30 text-white">
                    {detections[selectedAnomaly].confidence}%
                  </span>
                </div>
                <div className="text-[10px] text-slate-300">
                  {detections[selectedAnomaly].coords}
                </div>
                <div className="text-[10px] text-slate-400">
                  Dims: {detections[selectedAnomaly].dimensions}
                </div>
                {/* Acoustic Shadow Representation */}
                <div className="w-full h-2 bg-black/90 border border-slate-700 mt-2" title="Shadow Geometry" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-[10px] text-cyan-400/90 bg-slate-950/90 p-2 rounded border border-cyan-900 text-center">
                AI Segmentation Mask: Active • IoU: 0.91
              </div>
            </div>
          </div>

          {/* Right Panel: Detection Information List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" /> DETECTED ANOMALIES
              </span>
              <span className="text-slate-400">{detections.length} Target(s)</span>
            </div>

            <div className="space-y-2.5">
              {detections.map((item, idx) => {
                const isSelected = selectedAnomaly === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedAnomaly(idx)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-cyan-500/15 border-cyan-500/60 ring-1 ring-cyan-500/40'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="font-bold text-white">
                        {item.id} — {item.type}
                      </span>
                      <span className={`font-bold ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}>
                        {item.confidence}%
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {item.risk}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Operational Action Buttons */}
        <div className="p-4 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setModalContent('report')}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-md shadow-cyan-950/40 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" /> Generate Report
            </button>

            <button
              onClick={handleDownloadJSON}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" /> Download JSON
            </button>

            <button
              onClick={handleDownloadCSV}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" /> Download CSV
            </button>
          </div>

          <div className="text-xs font-mono text-slate-400">
            Export Format: <span className="text-cyan-300 font-bold">OGC GeoPackage & CSV Ready</span>
          </div>
        </div>

      </div>

      {/* Interactive Report / Export Modal */}
      {modalContent === 'report' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-2xl w-full rounded-2xl bg-slate-900 border border-cyan-500/40 p-6 space-y-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
                <FileText className="w-4 h-4 text-cyan-400" />
                OFFICIAL SSS ANOMALY DETECTION REPORT // SIH26057
              </div>
              <button
                onClick={() => setModalContent(null)}
                className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <div><strong>SURVEY VESSEL:</strong> AUV-DHARA-01 (Side-Scan Sonar 450kHz)</div>
                <div><strong>REGION:</strong> Bay of Bengal, Sector 04 [Coromandel Coast]</div>
                <div><strong>TOTAL ANOMALIES LOGGED:</strong> 3 Verified Target(s)</div>
                <div><strong>MEAN DETECTION CONFIDENCE:</strong> 84.0%</div>
              </div>

              <div className="border border-slate-800 rounded-lg overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-950 text-slate-400">
                    <tr>
                      <th className="p-2">ID</th>
                      <th className="p-2">Classification</th>
                      <th className="p-2">Confidence</th>
                      <th className="p-2">Coordinates</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {detections.map(d => (
                      <tr key={d.id} className="hover:bg-slate-800/40">
                        <td className="p-2 text-cyan-300 font-bold">{d.id}</td>
                        <td className="p-2 text-white">{d.type}</td>
                        <td className="p-2 text-emerald-400">{d.confidence}%</td>
                        <td className="p-2 text-slate-300">{d.coords}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={handleDownloadCSV}
                className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-mono text-xs font-bold hover:bg-cyan-500"
              >
                Export CSV
              </button>
              <button
                onClick={() => setModalContent(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs hover:bg-slate-700"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
