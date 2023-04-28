import { ReactNode, FC } from "react";
import styles from "./CardList.module.css";

interface ICardListProps {
  title: string;
  children: ReactNode;
}

export const CardList: FC<ICardListProps> = ({ title, children }) => {
  return (
    <div className={styles.list}>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};
