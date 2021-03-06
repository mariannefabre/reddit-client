import React, { useState, useRef, useEffect } from "react";
import styles from "./Suggestions.module.css";

export const Suggestions = (props) => {
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(true);
  const suggestionsListRef = useRef(null);

  function HideSuggestions(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsSuggestionVisible(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  HideSuggestions(suggestionsListRef);

  if (props.results.length > 0 && isSuggestionVisible) {
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
