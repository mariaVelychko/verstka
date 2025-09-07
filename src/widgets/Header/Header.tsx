import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <div className={styles.header__logo_name}>Medifit</div>
      </div>
      <nav className={styles.header__nav}>
        <a href="/" className={styles.header__nav_item}>
          Home
        </a>
        <a href="/" className={styles.header__nav_item}>
          Shop
        </a>
        <a href="/" className={styles.header__nav_item}>
          Pages
        </a>
        <a href="/" className={styles.header__nav_item}>
          About
        </a>
        <a href="/" className={styles.header__nav_item}>
          Contact
        </a>
      </nav>
      <div className={styles.header__search}></div>
      <div className={styles.header__cart}></div>
    </header>
  );
}
