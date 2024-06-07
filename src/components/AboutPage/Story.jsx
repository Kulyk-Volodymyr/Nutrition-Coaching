import styles from "./Story.module.scss";
import { SectionHeader } from "./SectionHeader";
import { TEAM } from "../../data/team";
import { STORY } from "../../data/about_page";

export const Story = () => {
  return (
    <section className={styles.ourStory}>
      <SectionHeader
        header="Our Story"
        text="Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey."
      />
      <div className={styles.stories}>
        {STORY.map((story, index) => (
          <article
            key={story.title.split(" ").join("")}
            className={
              index % 2
                ? `${styles.story} ${styles.story_direction_rowReverse}`
                : `${styles.story} ${styles.story_direction_row}`
            }
          >
            <div className={styles.story__imgContainer}>
              <img
                src={story.image}
                alt={story.imageAlt}
                className={styles.story__img}
              />
            </div>

            <div className={styles.story__textWrapper}>
              <div
                className={
                  index % 2
                    ? `${styles.story__text} ${styles.story__textRight}`
                    : styles.story__text
                }
              >
                <h4 className={styles.story__title}>{story.title}</h4>
                <p className={styles.story__info}>{story.info}</p>
                <p className={styles.story__date}>{story.date}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
