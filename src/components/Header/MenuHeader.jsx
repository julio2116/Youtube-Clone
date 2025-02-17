import { Link } from "react-router";
import styles from "./MenuHeader.module.css";

const MenuHeader = () => {
  return (
    <>
      <div className={styles.imgs}>
        <div className={styles.menu}>
          <img src="src/assets/menu.svg" alt="" />
        </div>
        <Link to="/">
          <img className={styles.logo} src="src/assets/YTLogo.svg" alt="" />
        </Link>
        <span>BR</span>
      </div>
    </>
  );
};
export default MenuHeader;
