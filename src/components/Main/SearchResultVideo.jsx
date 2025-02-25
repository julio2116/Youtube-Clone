import { handlePublishedTime } from "../../utils/publishedTime";
import { formatNumbers } from "../../utils/FormatNumbers";
import { useNavigate } from "react-router";
import styles from "./SearchResultVideo.module.css";
import ShortTag from "./ShortTag";
import Tag from "./Tag";

const SearchResultVideo = ({ item, short }) => {
  const navigate = useNavigate();

  function handleVideoSelected(videoId) {
    navigate(`/watch?v=${videoId}`);
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
            <span className={styles.duration}>{short ? <ShortTag /> : item.duration}</span>
          )}
        </div>
        <div className={styles.videoInfo}>
          <h4 onClick={() => handleVideoSelected(item.videoId)}>
            {item.titleVideo}
          </h4>
          <div>
            <span>{item.views && formatNumbers(item.views)} viwes</span>
            <span className={styles.publishedTime}>
              {handlePublishedTime(item.published)}
            </span>
          </div>
          <div className={styles.channel}>
            <img
              className={styles.icon}
              style={{ width: "30px", height: "30px" }}
              src={item.icon}
              alt=""
            />
            <span>{item.channelTitle}</span>
          </div>
          <span className={styles.content}>
            {item.description}
          </span>
          <Tag published={item.published} definition={item.definition}/>
        </div>
      </li>
    </>
  );
};

export default SearchResultVideo;
