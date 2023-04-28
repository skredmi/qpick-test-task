import { FC, ReactNode } from "react";
import styles from "./Icon.module.css";

interface IIconProps {
  count: number;
  children: ReactNode;
  onClick?: () => void;
}

export const Icon: FC<IIconProps> = ({ children, count, onClick }) => {
  return (
    <div className={styles.icon} onClick={onClick}>
      {children}
      <span className={styles.iconCount}>{count}</span>
    </div>
  );
};
