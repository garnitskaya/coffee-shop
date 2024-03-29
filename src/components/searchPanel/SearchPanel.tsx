import React, { useRef } from "react";

import { useAppDispatch } from "../../hooks/useTypedSelector";
import { setTerm } from "../../redux/action-creators";

import styles from "./searchPanel.module.css";

type PropsType = {
  term: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchPanel: React.FC<PropsType> = ({ term, onChangeInput }) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setTerm(""));
    inputRef.current?.focus();
  };

  return (
    <div className={styles.block}>
      <label className={styles.label}>Lookiing for</label>
      <input
        ref={inputRef}
        value={term}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="start typing here..."
      />
      {term && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="48px"
          height="48px"
        >
          <path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 22.059 50 14 41.941 14 32 C 14 22.059 22.059 14 32 14 z M 25.636719 23.636719 C 25.124969 23.636719 24.613156 23.832156 24.222656 24.222656 C 23.441656 25.003656 23.441656 26.269781 24.222656 27.050781 L 29.171875 32 L 24.222656 36.949219 C 23.441656 37.730219 23.441656 38.996344 24.222656 39.777344 C 25.003656 40.558344 26.269781 40.558344 27.050781 39.777344 L 32 34.828125 L 36.949219 39.777344 C 37.730219 40.558344 38.996344 40.558344 39.777344 39.777344 C 40.558344 38.996344 40.558344 37.730219 39.777344 36.949219 L 34.828125 32 L 39.777344 27.050781 C 40.558344 26.269781 40.558344 25.003656 39.777344 24.222656 C 38.996344 23.441656 37.730219 23.441656 36.949219 24.222656 L 32 29.171875 L 27.050781 24.222656 C 26.660281 23.832156 26.148469 23.636719 25.636719 23.636719 z" />
        </svg>
      )}
    </div>
  );
};

export default React.memo(SearchPanel);
