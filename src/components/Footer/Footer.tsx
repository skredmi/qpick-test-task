import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { ReactComponent as LangSvg } from "../../assets/svg/lang.svg";
import { ReactComponent as VkSvg } from "../../assets/svg/vk.svg";
import { ReactComponent as TelegramSvg } from "../../assets/svg/telegram.svg";
import { ReactComponent as WhatsappSvg } from "../../assets/svg/whatsapp.svg";

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <Link to="/">
        <h1 className={styles.title}>QPICK</h1>
      </Link>
      <nav className={styles.navList}>
        <ul className={styles.navItem}>
          <li>Избранное</li>
          <Link to="/cart">
            <li>Корзина</li>
          </Link>
          <li>Контакты</li>
        </ul>
      </nav>
      <nav className={styles.navList}>
        <ul className={styles.navLang}>
          <li>Условия сервиса</li>
        </ul>
        <div className={styles.lang}>
          <div>
            <LangSvg />
          </div>
          <div className={styles.langItem}>Рус</div>
          <div>Eng</div>
        </div>
      </nav>

      <nav className={styles.navLinks}>
        <a href="https://www.vk.com" target="blanc">
          <VkSvg />
        </a>
        <a href="https://telegram.org/" target="blanc">
          <TelegramSvg />
        </a>
        <a href="https://www.whatsapp.com/" target="blanc">
          <WhatsappSvg />
        </a>
      </nav>
    </div>
  );
};
