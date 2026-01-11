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
    quote: string;
    shortDescription: string;
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
                quote: "I am not your champion... I choose my own destiny.",
                shortDescription: `
                    Born heir to a magical dynasty, Abel is revealed to be something once thought impossible: Elementless. Stripped of his legacy, he discovers a mysterious connection to the Void—a power that will either save his world or consume it.
                `,
                description: `
                    The Velaris name was supposed to be his shield; instead, it became a shadow. Abel spent his life believing his story was already written: a royal heir destined to lead his family and uphold their legacy.


                    But on the eve of his eighteenth birthday, the illusion shatters. Standing before the Pentad in the most important ceremony of his life, Abel is revealed to be something once thought impossible: Elementless.

                    Branded a failure, he believes he is broken. Empty. But his "emptiness" is not an absence of power—it is a conduit for something the world has forgotten entirely: the Void.

                    It is a force outside the known laws of magic, ancient and terrifyingly potent. Now, stripped of the life he knew and thrust into a responsibility he never asked for, Abel must decide his own true purpose—and whether he can wield this unknown power without being consumed by it.
                `,
                amazonLink: 'https://www.amazon.com/dp/B0GC8Z175L',
                isReleased: true,
                releaseDate: 'Available Now'
            },
        ]
    }
];