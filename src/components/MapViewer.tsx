import { MapContainer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import React from 'react';

// If I ever decide to add location markers to the map
// type LocationMarker = {
//     id: string;
//     cords: [number, number]; // [y, x]
//     title: string;
//     description: string;
// };

// [0,0] is bottom-left, [2048, 2048] is the dead center of the image.
// const LOCATIONS: LocationMarker[] = [
//     {
//         id: 'misthaven',
//         cords: [2048, 2048], // Placeholder: Center of map
//         title: 'Misthaven',
//         description: 'The city shrouded in perpetual fog.'
//     },
// ];

export default function MapViewer() {
    const mapSize = 4096;
    const bounds: L.LatLngBoundsExpression = [[0, 0], [mapSize, mapSize]];

    return (
        <div className="w-full h-[80vh] md:h-[85vh] mx-auto relative z-0 outline-none ring-0">
            <MapContainer 
                crs={L.CRS.Simple} 
                bounds={bounds} 
                minZoom={-2.5} 
                maxZoom={2}
                zoomSnap={0.5} 
                zoomDelta={0.5}
                scrollWheelZoom={true} 
                className="h-full w-full bg-void-800 outline-none"
                style={{ background: '#1a1a1a', outline: 'none' }}
                maxBounds={bounds}
                maxBoundsViscosity={1.0}
            >
                <ImageOverlay
                    url="/Eurion.png"
                    bounds={bounds}
                />
            </MapContainer>
        </div>
    );
}