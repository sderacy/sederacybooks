import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React, { useState } from 'react';
import { CATEGORY_STYLES, locations } from '../data';
import { createCategoryIcon } from '../utils';


export default function MapViewer() {
    const mapSize = 4096;
    const bounds: L.LatLngBoundsExpression = [[0, 0], [mapSize, mapSize]];

    const [visibleCategories, setVisibleCategories] = useState(
        new Set(Object.keys(CATEGORY_STYLES))
    );

    const toggleCategory = (category: string) => {
        const next = new Set(visibleCategories);
        if (next.has(category)) {
            next.delete(category);
        } else {
            next.add(category);
        }
        setVisibleCategories(next);
    };

    return (
        <div id="fantasy-map-root" className="w-full h-[80vh] md:h-[85vh] mx-auto relative z-0 outline-none ring-0">
            <MapContainer 
                crs={L.CRS.Simple} 
                bounds={bounds} 
                minZoom={-2.5} 
                maxZoom={2}
                zoomSnap={0.5} 
                zoomDelta={0.5}
                scrollWheelZoom={true} 
                className="h-full w-full bg-transparent dark:bg-void-800 outline-none transition-colors duration-500"
                style={{ outline: 'none' }}
                maxBounds={bounds}
                maxBoundsViscosity={1.0}
            >
                <ImageOverlay url="/Eurion.png" bounds={bounds} />
                {locations
                    .filter(loc => visibleCategories.has(loc.category))
                    .map(loc => (
                        <Marker 
                            key={loc.id} 
                            position={loc.coords} 
                            icon={createCategoryIcon(loc.category)}
                        >
                            <Popup className="fantasy-popup">
                                <div className="p-5"> 
                                <span 
                                    className={`inline-block px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest text-white mb-3 shadow-sm ${CATEGORY_STYLES[loc.category].legend}`}
                                >
                                    {loc.category}
                                </span>

                                <h3 className="text-xl font-serif text-white mb-2 leading-none">
                                    {loc.name}
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-300">
                                    {loc.description}
                                </p>

                                </div>
                            </Popup>
                        </Marker>
                    ))}
            </MapContainer>

            <div className="absolute top-4 right-4 z-[1000] bg-white/95 dark:bg-void-900/95 backdrop-blur-sm p-4 rounded shadow-xl border border-gray-200 dark:border-void-700 max-w-[200px]">
                <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-3 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                    Map Legend
                </h4>
                <div className="flex flex-col gap-2">
                    {Object.keys(CATEGORY_STYLES).map(cat => (
                        <button
                            key={cat}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleCategory(cat);
                            }}
                            className={`flex items-center gap-3 text-xs uppercase tracking-wide transition-all duration-500 ease-in-out group/btn
                                ${visibleCategories.has(cat) 
                                    ? 'opacity-100 grayscale-0' 
                                    : 'opacity-40 grayscale'
                                }
                            `}
                        >
                            <span className={`w-3 h-3 rotate-45 border border-current transition-colors duration-500 ${CATEGORY_STYLES[cat].legend}`}></span>
                            <span className="dark:text-gray-300 text-gray-700 transition-colors duration-500 group-hover/btn:text-black dark:group-hover/btn:text-white">
                                {cat}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}