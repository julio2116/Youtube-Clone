import styles from "./FirstScreen.module.css";

const FirstScreen = () => {
  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.box}>
          <h2>How about some research to get you started?</h2>
          <span>
            Watch videos to help us create a content feed that suits you.
          </span>
        </div>
      </div>
    </>
  );
};
export default FirstScreen;
