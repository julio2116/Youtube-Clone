import Submenu from "./Submenu";
import styles from "./SideMenu.module.css";
import { items } from "./imgs.js"

const SideMenu = () => {
  return (
    <>
      <aside>
        <nav className={styles.sideMenu}>
          {items.map((item, index) => (
            <Submenu items={item} key={`a-${index}`} />
          ))}
        </nav>
      </aside>
    </>
  );
};
export default SideMenu;
