import {
  FC,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  createContext,
  useState,
} from "react";

type TypeContext = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const CartContext = createContext<TypeContext>({
  count: 0,
  setCount: () => {},
});

const CartProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CartContext.Provider value={{ count, setCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
