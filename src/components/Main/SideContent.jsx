import styles from "./SideContent.module.css";
import { useSearchResult } from "../../hooks/UseSearchResult";
import SearchResultVideo from "./SearchResultVideo";
import SearchResultChannel from "./SearchResultChannel";

const SideContent = () => {
  const result = useSearchResult();

  return (
    <>
      <div className={styles.boxListVideos}>
        <ul className={styles.list}>
          {result.map((item) =>
            item?.kind === "video" && item?.duration?.length > 0 ? (
              <SearchResultVideo key={item.id} item={item} short={item?.duration?.length < 3 || Number(item?.duration.split(':').at(-1)) < 2} />
            ) : (
              item?.kind === "channel" && <SearchResultChannel item={item} key={item.id} />
            )
          )}
        </ul>
      </div>
    </>
  );
};
export default SideContent;
