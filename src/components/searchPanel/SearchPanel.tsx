import { FC } from 'react';
import styles from './searchPanel.module.css';

const SearchPanel: FC = () => {
    return (
        <div className={styles.block}>
            <label className={styles.label}>Lookiing for</label>
            <input
                className={styles.input}
                type="text"
                placeholder='start typing here...' />
        </div>
    );
};

export default SearchPanel;