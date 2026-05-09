export interface Series {
    id: string;
    title: string;
    description: string;
    framingBlock?: string;
    color: string;
    books: Book[];
}

export type CreditDetail = {
    name: string;
    url?: string;
};

export type Credit = string | CreditDetail;

export interface Book {
    title: string;
    cover?: string;
    quote?: string;
    shortDescription: string;
    description: string;
    isReleased: boolean;
    amazonLink?: string; // Optional for unreleased books
    releaseDate?: string;
    credits?: {
        coverArt?: Credit;
        editing?: Credit;
        typography?: Credit;
    };
}

export const library: Series[] = [
    {
        id: 'elementless-magician',
        title: 'The Elementless Magician Series',
        description: 'The five-book story of Abel Velaris and the Void that binds him.',
        framingBlock: `In the world of Eurion, magic flows through the Pentad — five elements, five Great Houses, five legacies passed from parent to child. Abel Velaris was born into the highest of them, heir of House Velaris alongside his twin brother Cain.

He never inherited an element. On the night of his Attunement, the Pentad refused him in front of his entire House, and the boy meant to lead a dynasty walked out of the chamber as the first elementless mage the Houses had ever named — bound, in ways no one yet understands, to a power older than the system that just unmade him. The Elementless Magician is a five-book series about that refusal, what Abel chooses to do with it, and what it costs the people he leaves behind.`,
        color: '#d2ac22',
        books: [
            {
                title: 'The Elementless Magician',
                cover: '/EMCover1.jpg',
                quote: "I am not your champion... I choose my own destiny.",
                shortDescription: `Born heir to a magical dynasty, Abel is revealed to be something once thought impossible: Elementless. Stripped of his legacy, he discovers a mysterious connection to the Void — a power that will either save his world or consume it.`,
                description: `Abel Velaris was raised to inherit an element. As heir of House Velaris, the highest of Eurion's five Great Houses, his Attunement was supposed to be a formality. The Pentad had never refused a Velaris.

On the night of his Attunement, it refused him. Abel walked out of the chamber without his title, branded with a single word: Elementless.

His emptiness is not what the Houses believe. Abel is not powerless — he is bound to a force older than the Pentad, one the Houses long ago erased from their teaching. They call it the Void.

Now Abel must learn what the Void is, what it wants, and what it costs to wield — and whether the world that refused him deserves the power it accidentally placed in his hands.`,
                amazonLink: 'https://www.amazon.com/dp/B0GC8Z175L',
                isReleased: true,
                releaseDate: 'Available Now',
                credits: {
                    editing: {
                        name: "P.J. Hoover",
                        url: "https://www.pjhoover.com",
                    },
                    coverArt: {
                        name: "Bia Wednesday A.",
                        url: "https://www.fiverr.com/iamjustbia"
                    },
                    typography: {
                        name: "Charlyn Designs",
                        url: "https://www.fiverr.com/charlyn_designs"
                    }
                }
            },
            {
                title: 'The Hollow Sovereign',
                shortDescription: `At the call of Merlin and the Old Sage, Abel sets out for Camlann — where the answers to his power may be waiting.`,
                description: `At the call of Merlin and the Old Sage, Abel sets out for Camlann — a city across Eurion where the answers to his power may be waiting. What he finds there are allies he never expected, enemies he is not ready to fight, and a continent that runs by rules nothing in House Velaris prepared him for. The Hollow Sovereign is faster and harder than the first book, and the moment the world of the series opens up.`,
                isReleased: false,
                releaseDate: 'December 2026',
            }
        ]
    }
];
