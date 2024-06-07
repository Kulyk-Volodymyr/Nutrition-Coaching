import styles from "./Features.module.scss";
import { FEATURES } from "../../data/home_page";

export const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.features__inner}>
        <h2 className={styles.features__header}>Features</h2>
        <p className={styles.features__text}>
          Welcome to the Feature Section of Nutritionist, your ultimate
          destination for all things nutrition and wellness.
        </p>

        <div className={styles.articles}>
          {FEATURES.map((article, index) => (
            <article
              key={article.title.split(" ").join("").slice(1, 8) + index}
              className={styles.article}
            >
              <div className={styles.article__header}>
                <img
                  src={article.image}
                  alt="icon"
                  className={styles.article__icon}
                />
                <h3 className={styles.article__title}>{article.title}</h3>
              </div>
              <p className={styles.article__text}>{article.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
