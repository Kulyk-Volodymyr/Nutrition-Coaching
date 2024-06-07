import styles from "./SectionHeader.module.scss";

export const SectionHeader = ({ header, text }) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.header__title}>{header}</h2>
      <p className={styles.header__text}>{text}</p>
    </div>
  );
};
