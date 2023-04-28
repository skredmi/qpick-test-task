import { FC } from "react";
import styles from "./CartItem.module.css";
import { ReactComponent as TrashSvg } from "../../assets/svg/trash.svg";
import { ICart } from "../../types/CartTypes";
import { Count } from "../Count/Count";

interface ICartItem {
  item: ICart;
  handleItemRemove: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

export const CartItem: FC<ICartItem> = ({
  item,
  handleItemRemove,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className={styles.cartItem}>
      <div
        className={styles.cartDeleteButton}
        onClick={() => handleItemRemove(item.id)}
      >
        <TrashSvg />
      </div>
      <div className={styles.cartBody}>
        <img className={styles.cartImage} src={item.img} alt={item.title} />
        <div className={styles.cartInfo}>
          <div className={styles.cartTitle}>{item.title}</div>
          <div className={styles.cartPrice}>{item.price}</div>
        </div>
      </div>
      <div className={styles.cartFooter}>
        <Count
          quantity={item.quantity}
          id={item.id}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
        <div className={styles.cartSum}>{item.price * item.quantity}</div>
      </div>
    </div>
  );
};
