import { useEffect } from "react";
import styles from "./Blog.module.scss";
import { Hero } from "../../components/BlogPage/Hero";
import { Articles } from "../../components/BlogPage/Articles";

export const Blog = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink(6);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.main__inner}>
        <Hero />
        <Articles />
      </div>
    </main>
  );
};
