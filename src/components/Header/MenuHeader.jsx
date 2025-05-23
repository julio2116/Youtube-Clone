import { Link } from "react-router";
import styles from "./MenuHeader.module.css";
import menu from '../../assets/menu.svg'
import YTLogo from '../../assets/YTLogo.svg'

const MenuHeader = () => {
  return (
    <>
      <div className={styles.imgs}>
        <div className={styles.menu}>
          <img src={menu} alt="" />
        </div>
        <Link to="/">
          <img className={styles.logo} src={YTLogo} alt="" />
        </Link>
        <span>BR</span>
      </div>
    </>
  );
};
export default MenuHeader;
