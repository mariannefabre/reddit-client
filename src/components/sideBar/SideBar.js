import styles from "./SideBar.module.css";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faChartLine } from "@fortawesome/free-solid-svg-icons"; */
import { Reddit } from "../../util/Reddit";

export const SideBar = (props) => {
  const handleClick = (id) => {
    props.onClick(id);
  };

  const getClasses = (id) => {
    return id === props.currentCategoryId
      ? `${styles.linkButton} ${styles.selectedLinkButton}`
      : `${styles.linkButton}`;
  };

  return (
    <nav className={styles.sideBar}>
      <ul className={styles.navLinks}>
        {Reddit.Categories.map((category) => (
          <li className={styles.link} key={category.id}>
            {/*               <FontAwesomeIcon className={styles.icon} icon={category.icon} /> */}
            <button
              className={getClasses(category.id)}
              onClick={() => handleClick(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
