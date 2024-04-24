import {RareColors} from "./rareColors";
import {ItemsType} from "./itemsType";

import bow from './itemsIcons/bow.png';
import sword from './itemsIcons/sword.png';
import hammer from './itemsIcons/hammer.png';
import staff from './itemsIcons/staff.png';
import blade from './itemsIcons/blade.png';

export const dropWeaponChest : ItemsType = {
    bowCommon: {
        name: 'Лук',
        cost: 15,
        image: bow,
        color: RareColors.common,
        dropChance: 60
    },
    bowUncommon: {
        name: 'Лук',
        cost: 20,
        image: bow,
        color: RareColors.uncommon,
        dropChance: 30
    },
    bowRare: {
        name: 'Лук',
        cost: 35,
        image: bow,
        color: RareColors.rare,
        dropChance: 15
    },
    bowEpic: {
        name: 'Лук',
        cost: 60,
        image: bow,
        color: RareColors.epic,
        dropChance: 8
    },
    bowLegendary: {
        name: 'Лук',
        cost: 150,
        image: bow,
        color: RareColors.legendary,
        dropChance: 2
    },

    swordCommon: {
        name: 'Меч',
        cost: 12,
        image: sword,
        color: RareColors.common,
        dropChance: 60
    },
    swordUncommon: {
        name: 'Меч',
        cost: 18,
        image: sword,
        color: RareColors.uncommon,
        dropChance: 30
    },
    swordRare: {
        name: 'Меч',
        cost: 35,
        image: sword,
        color: RareColors.rare,
        dropChance: 15
    },
    swordEpic: {
        name: 'Меч',
        cost: 50,
        image: sword,
        color: RareColors.epic,
        dropChance: 8
    },
    swordLegendary: {
        name: 'Меч',
        cost: 100,
        image: sword,
        color: RareColors.legendary,
        dropChance: 2
    },

    bladeCommon: {
        name: 'Клинок',
        cost: 12,
        image: blade,
        color: RareColors.common,
        dropChance: 60
    },
    bladeUncommon: {
        name: 'Клинок',
        cost: 18,
        image: blade,
        color: RareColors.uncommon,
        dropChance: 30
    },
    bladeRare: {
        name: 'Клинок',
        cost: 35,
        image: blade,
        color: RareColors.rare,
        dropChance: 15
    },
    bladeEpic: {
        name: 'Клинок',
        cost: 50,
        image: blade,
        color: RareColors.epic,
        dropChance: 8
    },
    bladeLegendary: {
        name: 'Клинок',
        cost: 100,
        image: blade,
        color: RareColors.legendary,
        dropChance: 2
    },

    staffCommon: {
        name: 'Посох',
        cost: 15,
        image: staff,
        color: RareColors.common,
        dropChance: 60
    },
    staffUncommon: {
        name: 'Посох',
        cost: 20,
        image: staff,
        color: RareColors.uncommon,
        dropChance: 30
    },
    staffRare: {
        name: 'Посох',
        cost: 35,
        image: staff,
        color: RareColors.rare,
        dropChance: 15
    },
    staffEpic: {
        name: 'Посох',
        cost: 60,
        image: staff,
        color: RareColors.epic,
        dropChance: 8
    },
    staffLegendary: {
        name: 'Посох',
        cost: 120,
        image: staff,
        color: RareColors.legendary,
        dropChance: 2
    },

    hammerCommon: {
        name: 'Молот',
        cost: 12,
        image: hammer,
        color: RareColors.common,
        dropChance: 60
    },
    hammerUncommon: {
        name: 'Молот',
        cost: 18,
        image: hammer,
        color: RareColors.uncommon,
        dropChance: 30
    },
    hammerRare: {
        name: 'Молот',
        cost: 35,
        image: hammer,
        color: RareColors.rare,
        dropChance: 15
    },
    hammerEpic: {
        name: 'Молот',
        cost: 50,
        image: hammer,
        color: RareColors.epic,
        dropChance: 8
    },
    hammerLegendary: {
        name: 'Молот',
        cost: 100,
        image: hammer,
        color: RareColors.legendary,
        dropChance: 2
    }
}