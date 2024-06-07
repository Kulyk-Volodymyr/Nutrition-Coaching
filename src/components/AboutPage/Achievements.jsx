import styles from "./Achievements.module.scss";
import { SectionHeader } from "./SectionHeader";
import { ACHIEVEMENTS } from "../../data/about_page";

export const Achievements = () => {
  return (
    <section className={styles.achievements}>
      <SectionHeader
        header="Company Achievements"
        text="At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of our clients. Here are some of our notable achievements"
      />
      <div className={styles.cards}>
        {ACHIEVEMENTS.map((item) => (
          <div key={item.title.split(" ").join("")} className={styles.card}>
            <div className={styles.card__header}>
              <img src={item.image} alt="icon" className={styles.card__icon} />
              <h4 className={styles.card__title}>{item.title}</h4>
            </div>
            <p className={styles.card__info}>{item.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
