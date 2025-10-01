import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_container}>
        <div className={styles.footer_top_content}>
          <div className={styles.foooter_blocks_container}>
            <nav className={styles.footer_block}>
              <h5 className={styles.footer_list_title}>Pages</h5>
              <ul className={styles.footer_list}>
                <li className={styles.footer_list_item}>
                  <a href="/">Home</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">Shop</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">About</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">Contact</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">Blog</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">Privacy policy</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">FAQs</a>
                </li>
              </ul>
            </nav>

            <nav className={styles.footer_block}>
              <h5 className={styles.footer_list_title}>Utility</h5>
              <ul className={styles.footer_list}>
                <li className={styles.footer_list_item}>
                  <a href="/">Style guide</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">Instruction</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">Changelog</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">Licenses</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">Link in bio</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">Error 404</a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">Password protected</a>
                </li>
              </ul>
            </nav>
          </div>

          <section className={styles.footer_brand}>
            <div className={styles.footerBrand_container}>
              <div className={styles.footerBrand_imageBox}>
                <img src="/public/logo/logo.svg" alt="logo Medifit" />
                <h2 className={styles.footer_logo_name}>Medifit</h2>
              </div>
              <p className={styles.footer_slogan}>
                We provide the ultimate solution for your online store and all
                the healthcare needs.
              </p>
              <ul className={styles.footer_socialsList}>
                <li className={styles.footer_list_item}>
                  <a href="/">
                    <img src="/icons/facebook.svg" alt="Facebook" />
                  </a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">
                    <img src="/icons/instagram.svg" alt="Instagram" />
                  </a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">
                    <img src="/icons/twitter.svg" alt="Twitter" />
                  </a>
                </li>
                <li className={styles.footer_list_item}>
                  <a href="/">
                    <img src="/icons/youtube.svg" alt="YouTube" />
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <address className={styles.footer_contact_info}>
            <div className={styles.footer_address}>
              <h5 className={styles.footer_contact_title}>Address</h5>
              <div className={styles.footer_contact_data_address}>
                <p className={styles.footer_address_icon}>
                  1640 Parker Rd. Allentown, New Mexico 31134
                </p>
              </div>
            </div>
            <div className={styles.footer_contacts}>
              <h5 className={styles.footer_contact_title}>Contact</h5>
              <div className={styles.footer_contact_data_contact}>
                <p className={styles.footer_email_icon}>
                  Email: hello@gmail.com
                </p>
                <p className={styles.footer_phone_icon}>
                  Phone: (209) 555-0104
                </p>
              </div>
            </div>
          </address>
        </div>
        <div className={styles.footer_separator}></div>
        <div className={styles.footer_bottom_content}>
          <h6>Design By Maria Velychko, Powered By Vite</h6>
        </div>
      </div>
    </footer>
  );
}
