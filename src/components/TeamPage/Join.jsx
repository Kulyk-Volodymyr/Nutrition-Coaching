import styles from "./Join.module.scss";

export const Join = () => {
  return (
    <section className={styles.join}>
      <div className={styles.join__info}>
        <h3 className={styles.join__header}>Join Our Team</h3>
        <p className={styles.join__text}>
          We are always on the lookout for talented individuals who are
          enthusiastic about making a difference. Explore our career
          opportunities and join us in our mission to help people achieve their
          health and wellness goals.
        </p>
      </div>
      <button className={styles.join__button}>Apply Now</button>
    </section>
  );
};
