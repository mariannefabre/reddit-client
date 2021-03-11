import styles from "./SearchBar.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Suggestions } from "./Suggestions";
import { Reddit } from "../../util/Reddit";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isInputActive, setIsInputActive] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (query && query.length > 1) {
        const currentResults = await Reddit.search(query);
        setResults(currentResults.posts);
      }
    };
    fetchResults();
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    setIsInputActive(true);
  };

  const handleBlur = () => {
    setIsInputActive(false);
  };
  return (
    <div className={styles.searchBar}>
      <BiSearchAlt className={styles.icon} />
      <input
        className={styles.searchInput}
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
      <Suggestions results={results} isInputActive={isInputActive} />
    </div>
  );
};
