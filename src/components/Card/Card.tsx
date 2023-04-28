import { FC, useContext, useEffect, useCallback } from "react";
import styles from "./Card.module.css";
import { ReactComponent as StarSvg } from "../../assets/svg/star.svg";
import { ICard } from "../../types/CardTypes";
import { CartContext } from "../../context/CartContext";
import { ICart } from "../../types/CartTypes";

interface ICardItem {
  item: ICard;
}

export const Card: FC<ICardItem> = ({ item }) => {
  const { setCount } = useContext(CartContext);

  const cartItems: ICart[] = JSON.parse(
    sessionStorage.getItem("cartItems") || "[]"
  );
  const existingItem = cartItems?.find((cartItem) => cartItem.id === item.id);

  const handleAddProductToCart = useCallback(
    (item: ICard) => {
      if (!existingItem) {
        cartItems.push(item);
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        setCount(cartItems.length);
      }
    },
    [cartItems, existingItem, setCount]
  );

  useEffect(() => {
    handleAddProductToCart;
  }, [cartItems, handleAddProductToCart, setCount]);

  return (
    <div className={styles.card}>
      <img className={styles.image} src={item.img} alt={item.title} />
      <div className={styles.body}>
        <div className={styles.description}>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.price}>
            {item.price} &#8381;
            {item.prevPrice && (
              <span className={styles.prevPrice}>{item.prevPrice} &#8381;</span>
            )}
          </p>
        </div>
        <div className={styles.description}>
          <div className={styles.rating}>
            <StarSvg />
            <p className={styles.rate}>{item.rate}</p>
          </div>
          <button
            className={styles.button}
            onClick={() => !existingItem && handleAddProductToCart(item)}
          >
            {existingItem ? "Добавлено в корзину" : "Купить"}
          </button>
        </div>
      </div>
    </div>
  );
};
