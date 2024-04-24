import {RareColors} from "./rareColors";
import {ItemsType} from "./itemsType";

import helmet from './itemsIcons/helmet.png';
import body from './itemsIcons/body.png';
import pants from './itemsIcons/pants.png';
import boots from './itemsIcons/boots.png';

export const dropArmorChest: ItemsType = {
    helmetCommon: {
        name: 'Шлем',
        cost: 8,
        image: helmet,
        color: RareColors.common,
        dropChance: 60
    },
    helmetUncommon: {
        name: 'Шлем',
        cost: 15,
        image: helmet,
        color: RareColors.uncommon,
        dropChance: 30
    },
    helmetRare: {
        name: 'Шлем',
        cost: 30,
        image: helmet,
        color: RareColors.rare,
        dropChance: 15
    },
    helmetEpic: {
        name: 'Шлем',
        cost: 50,
        image: helmet,
        color: RareColors.epic,
        dropChance: 8
    },
    helmetLegendary: {
        name: 'Шлем',
        cost: 100,
        image: helmet,
        color: RareColors.legendary,
        dropChance: 2
    },

    bodyCommon: {
        name: 'Броня',
        cost: 8,
        image: body,
        color: RareColors.common,
        dropChance: 60,
    },
    bodyUncommon: {
        name: 'Броня',
        cost: 15,
        image: body,
        color: RareColors.uncommon,
        dropChance: 30,
    },
    bodyRare: {
        name: 'Броня',
        cost: 30,
        image: body,
        color: RareColors.rare,
        dropChance: 15,
    },
    bodyEpic: {
        name: 'Броня',
        cost: 50,
        image: body,
        color: RareColors.epic,
        dropChance: 8,
    },
    bodyLegendary: {
        name: 'Броня',
        cost: 100,
        image: body,
        color: RareColors.legendary,
        dropChance: 2,
    },

    pantsCommon: {
        name: 'Поножи',
        cost: 8,
        image: pants,
        color: RareColors.common,
        dropChance: 60,
    },
    pantsUncommon: {
        name: 'Поножи',
        cost: 15,
        image: pants,
        color: RareColors.uncommon,
        dropChance: 30,
    },
    pantsRare: {
        name: 'Поножи',
        cost: 30,
        image: pants,
        color: RareColors.rare,
        dropChance: 15,
    },
    pantsEpic: {
        name: 'Поножи',
        cost: 50,
        image: pants,
        color: RareColors.epic,
        dropChance: 8,
    },
    pantsLegendary: {
        name: 'Поножи',
        cost: 100,
        image: pants,
        color: RareColors.legendary,
        dropChance: 2,
    },

    bootsCommon: {
        name: 'Ботинки',
        cost: 8,
        image: boots,
        color: RareColors.common,
        dropChance: 60,
    },
    bootsUncommon: {
        name: 'Ботинки',
        cost: 15,
        image: boots,
        color: RareColors.uncommon,
        dropChance: 30,
    },
    bootsRare: {
        name: 'Ботинки',
        cost: 30,
        image: boots,
        color: RareColors.rare,
        dropChance: 15,
    },
    bootsEpic: {
        name: 'Ботинки',
        cost: 50,
        image: boots,
        color: RareColors.epic,
        dropChance: 8,
    },
    bootsLegendary: {
        name: 'Ботинки',
        cost: 100,
        image: boots,
        color: RareColors.legendary,
        dropChance: 2,
    }
}