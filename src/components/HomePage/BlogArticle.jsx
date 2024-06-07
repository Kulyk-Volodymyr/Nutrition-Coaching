import styles from "./BlogArticle.module.scss";
import heart from "../../assets/icons/heart.svg";
import bookmark from "../../assets/icons/bookmark.svg";

export const BlogArticle = ({
  image,
  imageAlt,
  category,
  title,
  text,
  avatar,
  author,
  date,
  timeToRead,
}) => {
  return (
    <article className={styles.article}>
      <div>
        <img src={image} alt={imageAlt} className={styles.article__image} />

        <p className={styles.article__category}>{category}</p>

        <h3 className={styles.article__title}>{title}</h3>

        <p className={styles.article__text}>{text}</p>
      </div>

      <div className={styles.author}>
        <div className={styles.author__left}>
          <img
            src={avatar}
            alt="avatar"
            className={styles.author__leftAvatar}
          />

          <div className={styles.author__leftInfo}>
            <p className={styles.author__leftName}>{author}</p>
            <p className={styles.author__leftDate}>
              {date} - {timeToRead}
            </p>
          </div>
        </div>

        <div className={styles.author__right}>
          <div className={styles.author__rightItem}>
            <img src={heart} alt="icon" className={styles.author__rightIcon} />
          </div>
          <div className={styles.author__rightItem}>
            <img
              src={bookmark}
              alt="icon"
              className={styles.author__rightIcon}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
