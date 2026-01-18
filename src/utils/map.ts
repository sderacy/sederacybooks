import L from 'leaflet';
import { CATEGORY_STYLES } from '../data';

export const createCategoryIcon = (category: string) => {
    const styles = CATEGORY_STYLES[category] || { 
        icon: "text-gray-500", 
        legend: "bg-gray-500" 
    };
    
    const pingClass = styles.legend; 

    return L.divIcon({
        className: 'bg-transparent',
        html: `
          <div class="relative group flex items-center justify-center">
            <div class="absolute w-8 h-8 rounded-full animate-ping opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${pingClass}"></div>
            
            <svg 
                viewBox="0 0 24 24" 
                class="w-8 h-8 drop-shadow-md transform transition-transform duration-300 group-hover:scale-125 hover:-translate-y-1 ${styles.icon}"
                fill="currentColor"
            >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -20]
    });
};