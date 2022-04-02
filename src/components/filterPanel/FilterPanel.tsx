import { FC } from 'react';
import styles from './filterPanel.module.css';

const FilterPanel: FC = () => {
    const buttons = [
        { name: 'Brazil' },
        { name: 'Kenya' },
        { name: 'Columbia' },
    ]

    const button = buttons.map(({ name }) => {
        return (
            <button
                key={name}
                className={styles.btn}
                type='button'>
                {name}
            </button>
        )
    })

    return (
        <div className={styles.block}>
            <div className={styles.title}>Or filter</div>
            <div className={styles.btns}>{button}</div>
        </div>
    );
};

export default FilterPanel;