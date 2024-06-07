import styles from "./People.module.scss";
import { TEAM } from "../../data/team";

export const People = () => {
  return (
    <section className={styles.people}>
      {TEAM.map((person) => (
        <div key={person.id} className={styles.person}>
          <img
            src={person.image}
            alt={`${person.name} photo`}
            className={styles.person__photo}
          />
          <div className={styles.person__info}>
            <h4 className={styles.person__name}>{person.name}</h4>
            <p className={styles.person__position}>{person.position}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
