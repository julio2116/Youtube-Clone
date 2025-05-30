import { useState } from "react";
import styles from "./SearchBox.module.css";
import { useNavigate } from "react-router";
import kb from "../../assets/kb.svg"
import lupa from "../../assets/lupa.svg"
import microphone from "../../assets/microphone.svg"

const SearchBox = () => {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);

  function handleSearch(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    if (e.target[0].value === '') return
    const data = Object.fromEntries(form);
    navigate(`/result?search_query=${data.value}`)
  }
  function handleFocus() {
    setFocus((value) => !value);
  }
  return (
    <div className={styles.searchbox}>
      <form onSubmit={handleSearch} className={styles.textsearchbox}>
        <div className={`${styles.inputbox} ${focus ? styles.focus : null}`}>
          {focus && <img className={styles.teste} src={lupa} />}
          <input
            name='value'
            className={styles.search}
            placeholder="Look for"
            type="text"
            onFocus={handleFocus}
            onBlur={handleFocus}
          />
          <div className={styles.img}>
            <img src={kb} alt="" />
          </div>
        </div>
        <button className={styles.lupa}>
          <img src={lupa} alt="" />
        </button>
      </form>
      <span className={styles.microphone}>
        <img src={microphone} alt="" />
      </span>
    </div>
  );
};
export default SearchBox;
