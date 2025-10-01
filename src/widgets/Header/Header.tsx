import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <img src="./public/logo/logo.svg" alt="logo Medifit" />
          <h5 className={styles.header_logo_name}>Medifit</h5>
        </div>
        <nav className={styles.header_nav}>
          <a href="/" className={styles.header_nav_item}>
            Home
          </a>
          <a href="/" className={styles.header_nav_item}>
            Shop
          </a>
          <a href="/" className={styles.header_nav_item}>
            Pages
          </a>
          <a href="/" className={styles.header_nav_item}>
            About
          </a>
          <a href="/" className={styles.header_nav_item}>
            Contact
          </a>
        </nav>
        <div className={styles.header_actions}>
          <button className={styles.header_search}>
            <img src="/icons/search.svg" alt="Search" />
          </button>
          <a href="/" className={styles.header_cart}>
            <img src="/icons/cart.svg" alt="Cart" />
          </a>
        </div>
        <button className={styles.header_mobile_burger_icon}>☰</button>
      </div>
    </header>
  );
}
