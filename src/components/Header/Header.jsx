import styles from "./Header.module.css";
import SearchBox from "./SearchBox";
import MenuHeader from "./MenuHeader";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <MenuHeader />
        <SearchBox />
        <LoginButton />
      </header>
    </>
  );
};
export default Header;
