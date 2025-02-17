import styles from "./VideoPlayer.module.css";
import { useSearchParams } from "react-router";
import ReactPlayer from "react-player";
import { useState } from "react";

const VideoPlayer = ({ children }) => {
  const [id] = useSearchParams();
  const [played, setPlayed] = useState();
  const videoId = id.get("v");
  const video = `https://www.youtube.com/watch?v=${videoId}`;
  const width = "100%";
  const height = "100%";

  return (
    <>
      <div className={styles.videoBox}>
        <div className={styles.teste} >
          <ReactPlayer
            url={video}
            playing={true}
            width={width}
            height={height}
            controls={true}
            onProgress={(progress) => {
              setPlayed(progress.playedSeconds);
            }}
          />
        </div>
        {children}
      </div>
    </>
  );
};
export default VideoPlayer;
