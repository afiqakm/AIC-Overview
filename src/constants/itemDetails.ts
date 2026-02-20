import { EItemType } from "../enums/item";
import type { TItem } from "../types/item";

export const itemDetails: TItem[] = [
    {
        name: 'Originium Ore',
        type: EItemType.Natural,
        tier: 1,
        imageUrl: '/src/assets/images/items/originium_ore.png',
    },
    {
        name: 'Origocrust',
        type: EItemType.Products,
        tier: 2,
        imageUrl: '/src/assets/images/items/origocrust.png',
    }
]