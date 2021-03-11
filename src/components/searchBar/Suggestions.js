import React, { useRef } from "react";
import styles from "./Suggestions.module.css";

export const Suggestions = (props) => {
  const suggestionsListRef = useRef(null);

  if (props.results.length > 0 && props.isInputActive) {
    const options = props.results.map((result) => (
      <li className={styles.suggestion} key={result.id}>
        {result.title}
      </li>
    ));

    return (
      <ul ref={suggestionsListRef} className={styles.suggestionsList}>
        {options}
      </ul>
    );
  }
  return null;
};
