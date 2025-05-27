import { handlePublishedTime } from "../../utils/publishedTime";
import { formatNumbers } from "../../utils/FormatNumbers";
import { useNavigate, useSearchParams } from "react-router";
import styles from "./RecomendedVideo.module.css";
import Tag from "../Main/Tag";

const RecomendedVideo = ({ item }) => {
  const navigate = useNavigate();
  const [term] = useSearchParams();

  function handleVideoSelected(videoId) {
    const termSearched = term.get("search_query");
    navigate(`/watch?search_query=${termSearched}&v=${videoId}`);
  }
  return (
    <>
      <li key={item.videoId} className={styles.video}>
        <div
          className={styles.thumb}
          onClick={() => handleVideoSelected(item.videoId)}
        >
          <img src={item.thumb} alt="" />
          {item.kind === "video" && (
            <span className={styles.duration}>{item.duration}</span>
          )}
        </div>
        <div className={styles.videoInfo}>
          <h4 onClick={() => handleVideoSelected(item.videoId)}>
            {item.titleVideo.slice(0, 50) + (item.titleVideo.length >= 50 && '...')}
          </h4>
          <div className={styles.channel}>
            <span>{item.channelTitle}</span>
          </div>
          <div>
            <span>{item.views && formatNumbers(item.views)} viwes</span>
            <span className={styles.publishedTime}>
              {handlePublishedTime(item.published)}
            </span>
          </div>
          <Tag published={item.published} definition={item.definition}/>
        </div>
      </li>
    </>
  );
};
//53
export default RecomendedVideo;
