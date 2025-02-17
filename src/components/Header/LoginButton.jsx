import styles from "./LoginButton.module.css";

const LoginButton = () => {
  return (
    <>
      <div className={styles.login}>
        <img className={styles.loginimg} src="src/assets/points.svg" alt="" />
        <button className={styles.button}>
          <span className={styles.content}>
            <img
              className={styles.avatarimg}
              src="src/assets/avatar.svg"
              alt=""
            />
            <strong>Fazer Login</strong>
          </span>
        </button>
      </div>
    </>
  );
};
export default LoginButton;
