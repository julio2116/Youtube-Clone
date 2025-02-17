import { handlePublishedTime, newContent } from "../../utils/publishedTime";
import { formatNumbers } from "../../utils/FormatNumbers";
import { useNavigate } from "react-router";
import styles from "./SearchResultVideo.module.css";

const SearchResultVideo = ({ item }) => {
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
            <span className={styles.duration}>{item.duration}</span>
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
            {
              <div>
                {true == newContent(item.published) ? (
                  <span className={styles.tag}>New</span>
                ) : (
                  item.definition === "hd" && (
                    <span className={styles.tag}>HD</span>
                  )
                )}
              </div>
            }
        </div>
      </li>
    </>
  );
};

export default SearchResultVideo;
