import React, {useEffect} from 'react';
import styles from './inventorySection.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchItems, sellItemFromInventory} from "../../store/reducers/ActionCreators";
import GameButton from "../buttons/GameButton";
import clsx from "clsx";

const InventorySection = () => {

    const dispatch = useAppDispatch();
    const {items} = useAppSelector(state => state.inventoryReducer);

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    return (
        <section className={styles.inventoryContainer}>
            {items.length === 0 ?
                <div className={styles.emptyInventory}>В инвентаре пусто</div>
                :
                items.map((item, index) => {
                    return <div className={clsx(styles.item, item.rare ?? '')} key={index}>
                        <div className={clsx(styles.itemTitle, item.rare ?? '')}>{item.name}</div>
                        <img src={item.image} alt={item.name}/>
                        <div className={styles.itemCost}>Цена: <span>{item.cost}</span></div>

                        <GameButton onClick={() => {dispatch(sellItemFromInventory(item, index))}} className={'sellItemButton'}>Продать</GameButton>
                    </div>
                })
            }
        </section>
    );
};

export default InventorySection;