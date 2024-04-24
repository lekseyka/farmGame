import stone from './itemsIcons/stone.png';
import wood from './itemsIcons/wood.png';

export interface DropResourceChest {
    [key: string]: {
        name: string;
        cost: number;
        image: string;
        dropChance: number;
    };
}

export const dropResourceChest : DropResourceChest  = {
    stone: {
        name: 'Камень',
        cost: 1,
        image: stone,
        dropChance: 70
    },
    wood: {
        name: 'Дерево',
        cost: 2,
        image: wood,
        dropChance: 30,
    }
}