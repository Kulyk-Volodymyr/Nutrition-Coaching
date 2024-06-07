import styles from "./Join.module.scss";

export const Join = () => {
  return (
    <section className={styles.join}>
      <div className={styles.join__info}>
        <h3 className={styles.join__header}>
          Are you ready to embark on a transformative journey towards better
          health and wellness?
        </h3>
        <p className={styles.join__text}>
          Join us at Nutritionist and let us guide you on the path to a
          healthier and happier you.
        </p>
      </div>
      <button className={styles.join__button}>Join Us Now</button>
    </section>
  );
};
