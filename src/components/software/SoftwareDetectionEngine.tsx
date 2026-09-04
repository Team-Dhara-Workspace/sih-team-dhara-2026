import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Crosshair } from 'lucide-react';

export const SoftwareDetectionEngine: React.FC = () => {
  const [showBoxes, setShowBoxes] = useState<boolean>(true);
  const [showMasks, setShowMasks] = useState<boolean>(true);
  const [activeModel, setActiveModel] = useState<'yolo' | 'faster-rcnn' | 'unet'>('yolo');

  const detectedClasses = [
    { name: 'Ghost Net', color: 'border-red-500 bg-red-500/10 text-red-300', count: 3, mAP: '94.2%' },
    { name: 'Shipwreck', color: 'border-amber-500 bg-amber-500/10 text-amber-300', count: 1, mAP: '96.5%' },
    { name: 'Pipes & Cylinders', color: 'border-cyan-500 bg-cyan-500/10 text-cyan-300', count: 2, mAP: '91.8%' },
    { name: 'Entangled Debris', color: 'border-purple-500 bg-purple-500/10 text-purple-300', count: 4, mAP: '89.4%' },
  ];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Neural Models & Computer Vision"
        badgeVariant="cyan"
        title="AI Detection Engine & Multi-Class Classifier"
        subtitle="Harnessing state-of-the-art CNNs and vision transformers tuned on acoustic backscatter and acoustic shadow signatures."
      />

      <div className="max-w-6xl mx-auto space-y-8 text-left">
        
        {/* Model Architecture Selector Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            onClick={() => setActiveModel('yolo')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeModel === 'yolo'
                ? 'bg-cyan-500/15 border-cyan-500/60 ring-1 ring-cyan-500/40'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs font-bold text-white">YOLO (You Only Look Once)</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300">REAL-TIME</span>
            </div>
            <p className="text-xs text-slate-400">
              Ultra-fast single-stage detector ideal for real-time edge processing directly inside AUV compute payload.
            </p>
          </div>

          <div
            onClick={() => setActiveModel('faster-rcnn')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeModel === 'faster-rcnn'
                ? 'bg-cyan-500/15 border-cyan-500/60 ring-1 ring-cyan-500/40'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs font-bold text-white">Faster R-CNN</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950 text-blue-300">HIGH PRECISION</span>
            </div>
            <p className="text-xs text-slate-400">
              Two-stage region proposal network designed for complex cluttered seafloors and tiny obscured fragments.
            </p>
          </div>

          <div
            onClick={() => setActiveModel('unet')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeModel === 'unet'
                ? 'bg-cyan-500/15 border-cyan-500/60 ring-1 ring-cyan-500/40'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs font-bold text-white">U-Net Segmentation</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950 text-purple-300">PIXEL MASKS</span>
            </div>
            <p className="text-xs text-slate-400">
              Encoder-decoder network with skip connections for pixel-perfect contour delineation of loose ghost gear.
            </p>
          </div>
        </div>

        {/* Interactive Sonar Viewer Canvas with Toggles */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#040913] border border-cyan-900/50 space-y-4 shadow-xl">
          
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 font-mono text-xs">
              <Crosshair className="w-4 h-4 text-cyan-400" />
              <span className="text-white font-bold">SIMULATED SIDE-SCAN SONAR ANOMALY INSPECTOR</span>
            </div>

            {/* Visual Overlays Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowBoxes(!showBoxes)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border transition-colors ${
                  showBoxes ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                Bounding Boxes: {showBoxes ? 'ON' : 'OFF'}
              </button>

              <button
                onClick={() => setShowMasks(!showMasks)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border transition-colors ${
                  showMasks ? 'bg-purple-500/20 border-purple-500/50 text-purple-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                Segmentation Masks: {showMasks ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* Sonar Grayscale Canvas with Simulated Detections */}
          <div className="relative h-64 sm:h-80 rounded-xl bg-[#03060E] border border-cyan-950 p-4 overflow-hidden">
            
            {/* Grayscale Acoustic Textured Background */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_bottom,#38bdf8_1px,transparent_1px),linear-gradient(to_right,#0284c7_1px,transparent_1px)] bg-[size:16px_16px]" />

            {/* Central Nadir Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-400/40 border-r border-dashed border-cyan-300/40">
              <span className="absolute top-2 -left-10 text-[9px] font-mono text-cyan-500 bg-black/60 px-1 rounded">
                NADIR
              </span>
            </div>

            {/* Detection 1: Ghost Net with Segmentation Mask */}
            <div className="absolute top-10 left-8 sm:left-14">
              {showBoxes && (
                <div className="p-2 rounded border-2 border-red-500 bg-red-950/30 backdrop-blur-xs font-mono text-left">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-red-300">
                    <span>GHOST NET #01</span>
                    <span className="px-1.5 py-0.2 rounded bg-red-500/40 text-red-100 text-[10px]">94%</span>
                  </div>
                  <div className="text-[9px] text-slate-300 mt-0.5">Coords: 13.084° N, 80.271° E</div>
                </div>
              )}
              {showMasks && (
                <div className="w-28 h-12 mt-1 rounded-full bg-red-500/20 border border-red-400/40 blur-xs" />
              )}
              {/* Acoustic Shadow behind Net */}
              <div className="w-32 h-3 bg-black/90 border-t border-slate-700 mt-1" title="Acoustic Shadow" />
            </div>

            {/* Detection 2: Industrial Pipe with Bounding Box */}
            <div className="absolute top-20 right-8 sm:right-16">
              {showBoxes && (
                <div className="p-2 rounded border-2 border-cyan-500 bg-cyan-950/30 backdrop-blur-xs font-mono text-left">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-cyan-300">
                    <span>STEEL PIPE #02</span>
                    <span className="px-1.5 py-0.2 rounded bg-cyan-500/40 text-cyan-100 text-[10px]">87%</span>
                  </div>
                  <div className="text-[9px] text-slate-300 mt-0.5">Length: 4.6m • Linear Cylindrical</div>
                </div>
              )}
              {showMasks && (
                <div className="w-36 h-4 mt-1 bg-cyan-400/20 border border-cyan-300/40" />
              )}
              <div className="w-40 h-2 bg-black/90 border-t border-slate-700 mt-1" />
            </div>

            {/* Detection 3: Shipwreck Hull Profile */}
            <div className="absolute bottom-6 left-1/3">
              {showBoxes && (
                <div className="p-2 rounded border-2 border-amber-500 bg-amber-950/30 backdrop-blur-xs font-mono text-left">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-amber-300">
                    <span>SHIPWRECK SECTION #03</span>
                    <span className="px-1.5 py-0.2 rounded bg-amber-500/40 text-amber-100 text-[10px]">96%</span>
                  </div>
                  <div className="text-[9px] text-slate-300 mt-0.5">Estimated Hull Width: 8.2m</div>
                </div>
              )}
            </div>

          </div>

          {/* Target Classes Performance Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {detectedClasses.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-left font-mono">
                <div className="text-[10px] text-slate-400">{item.name}</div>
                <div className="text-sm font-bold text-white mt-1 flex items-center justify-between">
                  <span>mAP: {item.mAP}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-cyan-300">{item.count} items</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
