import styles from "./MainBody.module.css";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <>
      <main className={styles.body}>
        <Outlet />
      </main>
    </>
  );
};
export default Body;
