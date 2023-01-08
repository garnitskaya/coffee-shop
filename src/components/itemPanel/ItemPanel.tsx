import { useCallback } from "react";

import { FilterPanel, SearchPanel } from '../';
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { filtersChanged, setTerm } from "../../redux/action-creators";

import styles from "./itemPanel.module.css";

const ItemPanel = () => {
  const { activeFilter, term } = useTypedSelector((state) => state);
  const dispatch = useAppDispatch();

  const onChangeFilter = useCallback((name: string) => {
    dispatch(filtersChanged(name));
  }, []);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setTerm(e.target.value));
    }, []);

  return (
    <div className={styles.block}>
      <SearchPanel term={term} onChangeInput={onChangeInput} />
      <FilterPanel
        activeFilter={activeFilter}
        onChangeFilter={onChangeFilter}
      />
    </div>
  );
};

export default ItemPanel;
