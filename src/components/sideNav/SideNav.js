import styles from "./SideNav.module.css";
import { Reddit } from "../../util/Reddit";

export const SideNav = (props) => {
  const handleClick = (id) => {
    props.onClick(id);
  };

  const getLinkClasses = (id) => {
    return id === props.currentCategoryId
      ? `${styles.link} ${styles.selectedLink}`
      : `${styles.link}`;
  };

  return (
    <nav className={styles.sideBar}>
      <ul className={styles.navLinks}>
        {Reddit.Categories.map((category) => (
          <li
            className={getLinkClasses(category.id)}
            key={category.id}
            onClick={() => handleClick(category.id)}
          >
            {category.icon}
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
