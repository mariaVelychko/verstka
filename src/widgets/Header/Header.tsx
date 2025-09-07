import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <h5 className={styles.header__logo_name}>Medifit</h5>
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
      <div className={styles.header__actions}>
        <button className={styles.header__search}>
          <img src="/icons/search.svg" alt="Search" />
        </button>
        <a className={styles.header__cart}>
          <img src="/icons/cart.svg" alt="Cart" />
        </a>
      </div>
    </header>
  );
}
