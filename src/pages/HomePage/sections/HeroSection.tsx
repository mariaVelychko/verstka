import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.section_container}>
        <div className={styles.hero_section}>
          <div className={styles.hero_text}>
            <h1 className={styles.hero_title}>Your trusted care now and always</h1>
            <p className={styles.hero_desc}>
              For the best results, align your health needs with your medication
              plan.
            </p>
          </div>
          <div className={styles.hero_img}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur est accusantium, vitae sed totam sit veniam nesciunt
            cumque, nulla adipisci praesentium libero. Eos distinctio
            cupiditate, atque voluptate dolorum, dolore minima nihil repellat
            consectetur quod placeat commodi facilis omnis corporis impedit illo
            similique quidem vero? Et fugiat quos ratione officia possimus unde
            voluptas eum fuga, excepturi incidunt recusandae pariatur
            necessitatibus in soluta quibusdam consequuntur atque ea, a,
            corporis harum quaerat deserunt! Fugit alias debitis ullam
            consectetur. Officiis rem alias aut debitis doloremque reiciendis
            nostrum optio. Exercitationem, nemo fugit, similique eius veritatis
            modi tenetur, temporibus officiis soluta labore ipsum laborum
            eligendi ad?
          </div>
        </div>
      </div>
    </section>
  );
}
