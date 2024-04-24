import React from 'react';
import styles from './gameWrapper.module.scss';
import {ReactProps} from "../../types/types";

const GameWrapper = ({children} : ReactProps) => {
    return (
        <div className={styles.gameWrapper}>
            {children}
        </div>
    );
};

export default GameWrapper;