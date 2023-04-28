import { FC } from "react";
import styles from "./Count.module.css";
import { ReactComponent as AddSvg } from "../../assets/svg/add.svg";
import { ReactComponent as RemoveSvg } from "../../assets/svg/remove.svg";

interface ICountProps {
  quantity: number;
  id: number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

export const Count: FC<ICountProps> = ({
  quantity,
  id,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className={styles.cartControl}>
      <div className={styles.cartButton} onClick={() => increaseQuantity(id)}>
        <AddSvg />
      </div>
      <div className={styles.cartCount}>{quantity}</div>
      <div className={styles.cartButton} onClick={() => decreaseQuantity(id)}>
        <RemoveSvg />
      </div>
    </div>
  );
};
