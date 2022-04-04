import FilterPanel from '../filterPanel/FilterPanel';
import SearchPanel from '../searchPanel/SearchPanel';

import styles from './itemPanel.module.css';

const ItemPanel = () => {
    return (
        <div className={styles.block}>
            <SearchPanel />
            <FilterPanel />
        </div>
    );
};

export default ItemPanel;