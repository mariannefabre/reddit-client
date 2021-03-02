import styles from './SearchBar.module.css';

export function SearchBar () {

  return (
    <input className={styles.searchBar} placeholder="Search..."></input>
  )
}