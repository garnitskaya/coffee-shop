import React from "react";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { filtersChanged } from "../../redux/action-creators";

import styles from "./filterPanel.module.css";

const buttons = [{ name: "Brazil" }, { name: "Kenya" }, { name: "Columbia" }];

type ProrsType = {
  activeFilter: string;
  onChangeFilter: (name: string) => void;
};

const FilterPanel: React.FC<ProrsType> = ({ activeFilter, onChangeFilter }) => {
  const dispatch = useAppDispatch();

  const button = buttons.map(({ name }) => {
    const isActive = name === activeFilter;
    const activeClass = isActive ? styles.activeBtn : "";
    return (
      <button
        key={name}
        className={`${styles.btn} ${activeClass}`}
        type="button"
        onClick={() => onChangeFilter(name)}
      >
        {name}
      </button>
    );
  });

  return (
    <div className={styles.block}>
      <div
        onClick={() => dispatch(filtersChanged(""))}
        className={styles.title}
      >
        Or filter
      </div>
      <div className={styles.btns}>{button}</div>
    </div>
  );
};

export default React.memo(FilterPanel);
