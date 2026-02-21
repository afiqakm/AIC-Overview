export type TItem = {
    id: string;
    name: string;
    type: string;
    tier: number;
    category: string;
    imageUrl: string;
};

export type TPipeline = {
    id: string;
    input: string;
    output: string;
};
