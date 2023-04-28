import { FC, ReactNode } from "react";
import styles from "./CartList.module.css";

interface ICartListProps {
  children: ReactNode;
}

export const CartList: FC<ICartListProps> = ({ children }) => {
  return <div className={styles.cartList}>{children}</div>;
};
