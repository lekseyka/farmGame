import React from 'react';
import styles from './gameButton.module.scss'
import clsx from "clsx";

type ButtonType = {
    children : string
    className : string
    onClick? : React.MouseEventHandler<HTMLButtonElement>
}

const GameButton = ({children, className, onClick} : ButtonType) => {
    return (
        <button onClick={onClick} className={clsx(styles[className], styles.gameButton)}>{children}</button>
    );
};

export default GameButton;