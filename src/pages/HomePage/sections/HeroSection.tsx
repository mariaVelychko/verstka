import styles from "./HeroSection.module.css";
import Button from "../../../components/ui/Buttons/Button";

export default function HeroSection() {
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.section_container}>
        <div className={styles.hero_section}>
          <div className={styles.hero_text}>
            <h1 className={styles.hero_title}>
              Your trusted care now and always
            </h1>
            <p className={styles.hero_desc}>
              For the best results, align your health needs with your medication
              plan.
            </p>
            <Button
              icon={<img src="/icons/btn_icons/iconShopNow.svg" alt="#" />}
              onClick={() => alert("Купити зараз")}
            >
              Shop Now
            </Button>
          </div>
          <div className={styles.hero_img}>
            <img src="/back_imgs/hero.jpg" alt="#" />
          </div>
        </div>
      </div>
    </section>
  );
}
