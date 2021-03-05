import styles from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const SearchBar = () => {

  return (
    <div className={styles.searchBar}>
<FontAwesomeIcon className={styles.icon} icon={faSearch} />
    <input  className={styles.searchInput} placeholder="Search..."></input>
    </div>
  )
}