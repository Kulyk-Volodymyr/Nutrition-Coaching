import styles from "./Blogs.module.scss";
import { ARTICLES } from "../../data/home_page";
import { BlogArticle } from "./BlogArticle";

export const Blogs = () => {
  return (
    <section className={styles.blogs}>
      <div className={styles.blogs__inner}>
        <h2 className={styles.blogs__header}>Our Blogs</h2>
        <p className={styles.blogs__text}>
          Our blog is a treasure trove of informative and engaging articles
          written by our team of nutritionists, dietitians, and wellness
          experts. Here's what you can expect from our blog.
        </p>

        <div className={styles.articles}>
          {ARTICLES.map((article, index) => (
            <BlogArticle
              key={article.title.split(" ").join("").slice(1, 8) + index}
              image={article.image}
              imageAlt={article.imageAlt}
              category={article.category}
              title={article.title}
              text={article.text}
              avatar={article.authorPhoto}
              author={article.author}
              date={article.date}
              timeToRead={article.timeToRead}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
