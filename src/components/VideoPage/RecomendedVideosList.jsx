import styles from "./RecomendedVideosList.module.css";
import { useSearchResult } from "../../hooks/UseSearchResult";
import RecomendedVideo from "./RecomendedVideo";

const RecomendedVideosList = () => {
  const result = useSearchResult();

  return (
    <>
      <div className={styles.boxListVideos2}>
        <ul className={styles.list2}>
          {result.map((item) =>
            (item?.kind === "video" && item?.duration?.length > 0) && (
              <RecomendedVideo key={item.id} item={item} short={item?.duration?.length < 3 || Number(item?.duration.split(':').at(-1)) < 2} />
            )
          )}
        </ul>
      </div>
    </>
  );
};
export default RecomendedVideosList;

