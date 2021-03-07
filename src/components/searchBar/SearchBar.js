import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Suggestions } from "./Suggestions";
import { Reddit } from "../../util/Reddit";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();
  const [results, setResults] = useState([]);

  async function fetchData() {
    const urlToFetch = "https://www.reddit.com/r/all.json";
    const fetchedData = await Reddit.getPostsList(urlToFetch);
    setData(fetchedData);
  }

  /* useEffect(() => {fetchData()}, []); */

  useEffect(()=> {
    if(query !== "" && data){
      const currentResults = data.filter(post => {
        if(post.title.includes(query)){
          return post;
        }else{
          // eslint-disable-next-line array-callback-return
          return;
        }
      });
      setResults(currentResults)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
/*     if (query && query.length > 1 && query.length % 2 === 0) {
    } */
  };

  return (
    <div className={styles.searchBar}>
      <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      <input
        className={styles.searchInput}
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      ></input>
      <Suggestions results={results} />
    </div>
  );
};
