import styles from "./SideBar.module.css";

export const SideBar = () => {
  const items = [
    { id: 1, link: "Title 1" },
    { id: 2, link: "Title 2" },
  ];

  const handleNavigation = () => {

  }

  return (
    <nav className={styles.sideBar}>
      <ul className={styles.navLinks}>
        {items ? (
          items.map((item) => (
            <li className={styles.link} key={item.id}>
              <button className={styles.linkButton} onClick={handleNavigation}>{items[0].link}</button>
            </li>
          ))
        ) : (
          <p>Loading..</p>
        )}
      </ul>
    </nav>
  );
};