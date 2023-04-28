import { FC } from "react";
import styles from "./CartResult.module.css";

interface ICartResult {
  totalPrice: number;
}

export const CartResult: FC<ICartResult> = ({ totalPrice }) => {
  return (
    <div className={styles.info}>
      <div className={styles.resultCard}>
        <div>ИТОГО</div>
        <div>&#8381; {totalPrice}</div>
      </div>
      <button className={styles.infoButton}>Перейти к оформлению</button>
    </div>
  );
};
