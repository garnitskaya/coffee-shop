import { FC } from 'react';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setTerm } from '../../redux/action-creators';

import styles from './searchPanel.module.css';

const SearchPanel: FC = () => {
    const { term } = useTypedSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className={styles.block}>
            <label className={styles.label}>Lookiing for</label>
            <input
                value={term}
                onChange={(e) => dispatch(setTerm(e.target.value))}
                className={styles.input}
                type="text"
                placeholder='start typing here...' />
        </div>
    );
};

export default SearchPanel;