import React, {useEffect} from 'react';
import styles from './header.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchItems, getFreeCoins, sellAllItems} from "../../store/reducers/ActionCreators";
import GameButton from "../buttons/GameButton";

const Header = () => {

    const dispatch = useAppDispatch();
    const balance= useAppSelector(state => state.inventoryReducer).balance;

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    return (
        <div className={styles.header}>
            <div className={'title'}>Farm Game</div>

            <GameButton onClick={() => dispatch(getFreeCoins(1000))} className={''}>Get coins</GameButton>

            <GameButton onClick={() => dispatch(sellAllItems())} className={''}>Sell all</GameButton>

            <div className={'goldBalance'}>Баланс: {balance}</div>
        </div>
    );
};

export default Header;