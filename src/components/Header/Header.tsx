import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { HeaderIcon } from "../HeaderIcon/HeaderIcon";
import { CartContext } from "../../context/CartContext";

export const Header: FC = () => {
  const { count } = useContext(CartContext);

  return (
    <div className={styles.header}>
      <Link to="/">
        <h1 className={styles.title}>QPICK</h1>
      </Link>
      <HeaderIcon count={count} />
    </div>
  );
};
