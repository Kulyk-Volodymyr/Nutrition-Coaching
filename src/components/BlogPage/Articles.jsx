import { useState } from "react";
import styles from "./Articles.module.scss";
import { ARTICLES, CATEGORIES } from "../../data/blog_page";

export const Articles = () => {
  const [articles, setArticles] = useState(ARTICLES);
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES[0]);

  const changeCategory = (value) => {
    setCurrentCategory(value);
    if (value === CATEGORIES[0]) {
      setArticles(ARTICLES);
    } else {
      setArticles(ARTICLES.filter((i) => i.category === value));
    }
  };

  return (
    <>
      <div className={styles.tabs}>
        <div className={styles.tabs__inner}>
          {CATEGORIES.map((category) => (
            <p
              key={category.split(" ").join("")}
              className={
                category === currentCategory
                  ? `${styles.tabs__item} ${styles.tabs__itemActive}`
                  : styles.tabs__item
              }
              onClick={() => changeCategory(category)}
            >
              {category}
            </p>
          ))}
        </div>
      </div>

      <section className={styles.articles}>
        {articles.map((item, index) => (
          <article
            key={item.title.split(" ").join("").slice(0, 8) + index}
            className={styles.article}
          >
            <div className={styles.article__top}>
              <p className={styles.article__topCategory}>{item.category}</p>
              <div className={styles.article__topImage}>
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className={styles.article__topImg}
                />
              </div>
            </div>

            <div className={styles.article__bottom}>
              <div>
                <p className={styles.article__bottomTitle}>{item.title}</p>
                <p className={styles.article__bottomText}>{item.text}</p>
              </div>
              <a
                href=""
                onClick={(e) => e.preventDefault()}
                className={styles.article__bottomLink}
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};
