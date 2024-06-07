import styles from "./Demo.module.scss";

export const Demo = () => {
  return (
    <section className={styles.join}>
      <div className={styles.join__info}>
        <h3 className={styles.join__header}>
          We Are Proud of Our Achievements
        </h3>
        <p className={styles.join__text}>
          But our ultimate satisfaction comes from seeing our clients achieve
          their goals and live healthier, happier lives. Join Nutritionist today
          and embark on your own transformative journey towards optimal health
          and well-being.
        </p>
      </div>
      <button className={styles.join__button}>Book a Demo</button>
    </section>
  );
};
