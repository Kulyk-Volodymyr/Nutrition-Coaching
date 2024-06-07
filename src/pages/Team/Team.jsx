import { useEffect } from "react";
import styles from "./Team.module.scss";
import { Hero } from "../../components/TeamPage/Hero";
import { People } from "../../components/TeamPage/People";
import { Join } from "../../components/TeamPage/Join";

export const Team = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink(3);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.main__inner}>
        <Hero />
        <People />
        <Join />
      </div>
    </main>
  );
};
