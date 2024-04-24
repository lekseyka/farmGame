import React, {useEffect} from 'react';
import chest from './img/chest.png'
import styles from './chestsSection.module.scss';
import GameButton from "../buttons/GameButton";
import {addItemToInventory, fetchItems} from "../../store/reducers/ActionCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {DropResourceChest, dropResourceChest} from "./chestsDrop/resourceChest";
import {dropArmorChest} from "./chestsDrop/armorChest";
import {dropWeaponChest} from "./chestsDrop/weaponChest";

const ChestsSection = () => {

    const dispatch = useAppDispatch();
    const balance= useAppSelector(state => state.inventoryReducer).balance;

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    interface Drop {
        name: string;
        cost: number;
        image: string;
        dropChance: number;
        color? : string;
    }

    const createDropArray = (chest : DropResourceChest) : Array<Drop> => {
        const drop: Array<Drop> = [];

        for (const key in chest) {
            if (chest.hasOwnProperty(key)) {
                for (let i= 0; i < chest[key].dropChance; i++) {
                    drop.push(chest[key])
                }
            }
        }

        return drop;
    }

    const randomNumber = (drop : Array<Drop>) => {
        return Math.floor(Math.random() * drop.length)
    }

    const getNewItemFromChest = (chestType: string) => {

        let chest : DropResourceChest = {};
        let cost: number = 0;

        switch (chestType) {
            case 'resource':
                chest = dropResourceChest;
                break;
            case 'armor':
                if (balance < 25) {
                    alert('У Вас не достаточно золота для открытия! Упс!');
                    return;
                }
                cost = 25;
                chest = dropArmorChest;
                break;
            case 'weapon':
                if (balance < 50) {
                    alert('У Вас не достаточно золота для открытия! Упс!');
                    return;
                }
                cost = 50;
                chest = dropWeaponChest;
                break;
            default:
                break;
        }

        let dropArray: Array<Drop> = createDropArray(chest);
        const randomIndex = randomNumber(dropArray);
        const item: Drop = dropArray[randomIndex];

        const newItem = {
            name: item.name,
            cost: item.cost,
            image: item.image,
            rare: item.color || '',
        }

        dispatch(addItemToInventory(newItem, cost));

    }

    return (
        <section className={styles.chestContainer}>
            <div className={styles.chestContainerTitle}>Сундуки</div>
            <div className={styles.chestWrapper}>
                <div className={styles.chestItem}>
                    <div className={styles.chestTitle}>Сундук с ресурсами</div>
                    <img className={styles.chestImage} src={chest} alt="Сундук"/>

                    <GameButton onClick={() => {getNewItemFromChest('resource')}} className={'openChestButton'}>Открыть бесплатно!</GameButton>
                </div>
                <div className={styles.chestItem}>
                    <div className={styles.chestTitle}>Сундук со снаряжением</div>
                    <img className={styles.chestImage} src={chest} alt="Сундук"/>

                    <GameButton onClick={() => {getNewItemFromChest('armor')}} className={'openChestButton'}>Открыть за 25 монет!</GameButton>
                </div>
                <div className={styles.chestItem}>
                    <div className={styles.chestTitle}>Сундук с оружием</div>
                    <img className={styles.chestImage} src={chest} alt="Сундук"/>

                    <GameButton onClick={() => {getNewItemFromChest('weapon')}} className={'openChestButton'}>Открыть за 50 монет!</GameButton>
                </div>
            </div>
        </section>
    );
};

export default ChestsSection;