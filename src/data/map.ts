export const CATEGORY_STYLES: Record<string, { icon: string, legend: string }> = {
    "Cities": {
        icon: "text-lilac-dark dark:text-gold",
        legend: "bg-lilac-dark dark:bg-gold"
    },
    "Dangers": {
        icon: "text-red-600 dark:text-red-500",
        legend: "bg-red-600 dark:bg-red-500"
    },
    "Forests": {
        icon: "text-emerald-600 dark:text-emerald-400",
        legend: "bg-emerald-600 dark:bg-emerald-400"
    },
    "Mysteries": {
        icon: "text-blue-500 dark:text-cyan-400",
        legend: "bg-blue-500 dark:bg-cyan-400"
    }
};

/**
 * @id: Unique identifier for the location
 * @name: Name of the location
 * @coords: [y, x] coordinates on the map
 * @category: Category of the location (should match keys in CATEGORY_STYLES)
 * @description: Brief description of the location
 */
export interface MapLocation {
    id: number;
    name: string;
    coords: [number, number];
    category: string;
    description: string;
}

export const locations: MapLocation[] = [
    {
        id: 4,
        name: "???",
        coords: [2000, 2000],
        category: "Mysteries",
        description: "???"
    }
];