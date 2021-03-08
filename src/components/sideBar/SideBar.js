import styles from "./SideBar.module.css";
import { Reddit } from "../../util/Reddit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SideBar = (props) => {
  const handleClick = (id) => {
    props.onClick(id);
  };

  const getLinkClasses = (id) => {
    return id === props.currentCategoryId
      ? `${styles.link} ${styles.selectedLink}`
      : `${styles.link}`;
  };

  /*   const getIconClasses = (id) => {
    return id === props.currentCategoryId
      ? `${styles.icon} ${styles.selectedLinkIcon}`
      : `${styles.icon}`;
  }; */

  return (
    <nav className={styles.sideBar}>
      <ul className={styles.navLinks}>
        {Reddit.Categories.map((category) => (
          <li
            className={getLinkClasses(category.id)}
            key={category.id}
            onClick={() => handleClick(category.id)}
          >
            <FontAwesomeIcon className={styles.icon} icon={category.icon} />
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
