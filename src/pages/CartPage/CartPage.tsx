import { FC, useEffect, useState, useContext, useCallback } from "react";
import styles from "./CartPage.module.css";
import { CartList } from "../../components/CartList/CartList";
import { CartItem } from "../../components/CartItem/CartItem";
import { CartResult } from "../../components/CartResult/CartResult";
import { ICart } from "../../types/CartTypes";
import { CartContext } from "../../context/CartContext";

export const CartPage: FC = () => {
  const { setCount } = useContext(CartContext);
  const [cartItems, setCartItems] = useState<ICart[]>(
    JSON.parse(sessionStorage.getItem("cartItems") || "[]")
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice: () => void = useCallback(() => {
    const total = cartItems.reduce((acc: number, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCount(cartItems.length);
    updateTotalPrice();
  }, [cartItems, setCount, updateTotalPrice]);

  const handleItemRemove = (id: number) => {
    setCartItems((cart) => {
      return cart.filter((product) => product.id !== id);
    });
    setCount(cartItems.length);
  };

  const increaseQuantity = (id: number) => {
    setCartItems((cart) => {
      return cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    });
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((cart) => {
      return cart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
    });
  };

  return (
    <div className={styles.cart}>
      <p className={styles.subtitle}>Корзина</p>
      <div className={styles.container}>
        <CartList>
          {cartItems.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            cartItems?.map((item: ICart) => (
              <CartItem
                key={item.id}
                item={item}
                handleItemRemove={handleItemRemove}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ))
          )}
        </CartList>
        <CartResult totalPrice={totalPrice} />
      </div>
    </div>
  );
};
