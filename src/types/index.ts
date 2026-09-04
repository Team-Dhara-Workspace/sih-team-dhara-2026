export type ProblemType = 'hardware' | 'software';

export interface AnomalyItem {
  id: string;
  name: string;
  type: 'Ghost Net' | 'Pipe' | 'Cylinder' | 'Shipwreck' | 'Entangled Debris' | 'Unknown Object';
  confidence: number;
  latitude: string;
  longitude: string;
  dimensions: string;
  status: 'HIGH PRIORITY' | 'MEDIUM' | 'REVIEWED';
  depth: string;
  acousticShadowLength: string;
}

export interface HardwareAlert {
  id: string;
  title: string;
  category: 'Irrigation' | 'Disease' | 'Pest' | 'Weather' | 'Disaster';
  severity: 'urgent' | 'warning' | 'info';
  timestamp: string;
  description: string;
  action: string;
}
