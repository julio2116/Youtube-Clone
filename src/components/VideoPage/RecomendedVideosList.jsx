import styles from "./RecomendedVideosList.module.css";
import { useSearchResult } from "../../hooks/UseSearchResult";
import RecomendedVideo from "./RecomendedVideo";
import { useSearchParams } from "react-router";

const RecomendedVideosList = () => {
  const result = useSearchResult();
  const [term] = useSearchParams();
  const videoId = term.get("v");
  const newResult = result.filter(video => video.videoId !== videoId)
  console.log(result)

  return (
    <>
      <div className={styles.boxListVideos2}>
        <ul className={styles.list2}>
          {newResult.map((item) =>
            (item?.kind === "video" && item?.duration?.length > 2) && (
              <RecomendedVideo key={item.id} item={item} />
            )
          )}
        </ul>
      </div>
    </>
  );
};
export default RecomendedVideosList;

