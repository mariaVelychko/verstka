import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer_wrapper}>
      <footer className={styles.footer}>
        <nav className={styles.footer_pages}>
          <h5 className={styles.footer_pages_title}>Pages</h5>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Privacy policy</a>
            </li>
            <li>
              <a href="/">FAQs</a>
            </li>
          </ul>
        </nav>

        <nav className={styles.footer_utility}>
          <h5 className={styles.footer_utility_title}>Utility</h5>
          <ul>
            <li>
              <a href="/">Style guide</a>
            </li>
            <li>
              <a href="/">Instruction</a>
            </li>
            <li>
              <a href="/">Changelog</a>
            </li>
            <li>
              <a href="/">Licenses</a>
            </li>
            <li>
              <a href="/">Link in bio</a>
            </li>
            <li>
              <a href="/">Error 404</a>
            </li>
            <li>
              <a href="/">Password protected</a>
            </li>
          </ul>
        </nav>

        <section className={styles.footer_brand}>
          <h2 className={styles.footer_logo_name}>Medifit</h2>
          <p className={styles.footer_slogan}>
            We provide the ultimate solution for your online store and all the
            healthcare needs.
          </p>
          <section className={styles.footer_socials}>
            <ul>
              <li>
                <a href="/">
                  <img src="/icons/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="/icons/instagram.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="/icons/twitter.svg" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="/icons/youtube.svg" alt="YouTube" />
                </a>
              </li>
            </ul>
          </section>
        </section>

        <section className={styles.footer_contact_info}>
          <address>
            <div className={styles.footer_address}>
              <h5 className={styles.footer_address_title}>Address</h5>
              <p className={styles.footer_address_icon}>
                1640 Parker Rd. Allentown, New Mexico 31134
              </p>
            </div>
            <div className={styles.footer_contacts}>
              <h5 className={styles.footer_contacts_title}>Contact</h5>
              <p className={styles.footer_email_icon}>Email: hello@gmail.com</p>
              <p className={styles.footer_phone_icon}>Phone: (209) 555-0104</p>
            </div>
          </address>
        </section>

        <div className={styles.footer_separator}></div>
        {/* 
        <section className={styles.footer_credits}>
          Design By Maria Velychko, Powered By Vite
        </section> */}
      </footer>
    </div>
  );
}
