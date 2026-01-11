export interface Series {
    id: string; // The URL route (e.g., "elementless-magician")
    title: string;
    description: string;
    color: string;
    books: Book[];
}

export interface Book {
    title: string;
    cover: string;
    description: string;
    amazonLink?: string; // Optional for unreleased books
    releaseDate?: string;
    isReleased: boolean;
}

export const library: Series[] = [
    {
        id: 'elementless-magician',
        title: 'The Elementless Magician Series',
        description: 'The story of Abel Velaris and the Void that binds him.',
        color: '#d2ac22',
        books: [
            {
                title: 'The Elementless Magician',
                cover: '/EMCover1.jpg', 
                description: '"I am not your champion... I choose my own destiny." Abel must master the one magic he was never meant to wield.',
                amazonLink: 'https://www.amazon.com/dp/B0GC8Z175L',
                isReleased: true,
                releaseDate: 'Available Now'
            },
        ]
    }
];