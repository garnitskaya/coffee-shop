import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { filtersChanged } from '../../redux/action-creators';
import { useTypedSelector } from './../../hooks/useTypedSelector';

import styles from './filterPanel.module.css';

const FilterPanel: FC = () => {
    const { activeFilter } = useTypedSelector(state => state);
    const dispatch = useDispatch();

    const buttons = [
        { name: 'Brazil' },
        { name: 'Kenya' },
        { name: 'Columbia' },
    ]

    const button = buttons.map(({ name }) => {
        const isActive = name === activeFilter;
        const activeClass = isActive ? styles.activeBtn : '';
        return (
            <button
                key={name}
                className={`${styles.btn} ${activeClass}`}
                type='button'
                onClick={() => dispatch(filtersChanged(name))}>
                {name}
            </button>
        )
    })

    return (
        <div className={styles.block}>
            <div onClick={() => dispatch(filtersChanged(''))} className={styles.title}>Or filter</div>
            <div className={styles.btns}>{button}</div>
        </div>
    );
};

export default FilterPanel;