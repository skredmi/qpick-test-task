import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderIcon.module.css";
import { ReactComponent as CartSvg } from "../../assets/svg/cart.svg";
import { ReactComponent as FavoriteSvg } from "../../assets/svg/favorite.svg";
import { Icon } from "../ui/Icon/Icon";

interface IHeaderIcon {
  count: number;
}

export const HeaderIcon: FC<IHeaderIcon> = ({ count }) => {
  return (
    <div className={styles.info}>
      <Icon children={<FavoriteSvg />} count={2} />
      <Link to="/cart">
        <Icon children={<CartSvg />} count={count} />
      </Link>
    </div>
  );
};
