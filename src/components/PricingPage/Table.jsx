import styles from "./Table.module.scss";
import { PLANS_TABLE } from "../../data/pricing_page";
import check from "../../assets/icons/checkTable.svg";
import close from "../../assets/icons/closeTable.svg";

export const Table = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td style={{ width: "100%" }}>
              <p
                className={`${styles.table__tdHead} ${styles.table__tdHead_features}`}
              >
                Features
              </p>
            </td>
            <td>
              <p
                className={`${styles.table__tdHead} ${styles.table__tdHead_plan}`}
              >
                Basic Plan
              </p>
            </td>
            <td>
              <p
                className={`${styles.table__tdHead} ${styles.table__tdHead_plan}`}
              >
                Premium Plan
              </p>
            </td>
            <td>
              <p
                className={`${styles.table__tdHead} ${styles.table__tdHead_plan}`}
              >
                Ultimate Plan
              </p>
            </td>
          </tr>
        </thead>
        <tbody>
          {PLANS_TABLE.map((i, index) => (
            <tr key={i[0].split(" ").join("").slice(0, 6) + index}>
              <td className={styles.table__tdBody}>{i[0]}</td>
              {i[1].map((j, idx) => (
                <td
                  key={idx + i[0].split(" ").join("").slice(0, 8) + idx}
                  className={styles.table__tdBody}
                >
                  {j ? (
                    <div className={`${styles.option} ${styles.option_true}`}>
                      <img
                        src={check}
                        alt="icon"
                        className={styles.option__icon}
                      />
                    </div>
                  ) : (
                    <div className={`${styles.option} ${styles.option_false}`}>
                      <img
                        src={close}
                        alt="icon"
                        className={styles.option__icon}
                      />
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
