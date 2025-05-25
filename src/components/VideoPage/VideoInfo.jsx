import { useSearchParams } from "react-router";
import styles from "./VideoInfo.module.css";
import { useEffect, useState } from "react";
import { formatNumbers } from "../../utils/FormatNumbers";
import like from "../../assets/like.png";
import share from "../../assets/share.png";
import { handlePublishedTime } from "../../utils/publishedTime";

const VideoInfo = () => {
  const [item, setItem] = useState({});
  const [term] = useSearchParams();
  const videoId = term.get("v");
  const key = "AIzaSyCvJM7ZW8I2K0JEnOO76qa9w0DUyrg8VrA";
  useEffect(() => {
    if(!videoId) return
    async function fetchDataVideo() {
      const dataFetchVideo = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${key}&part=snippet,statistics&id=${videoId}`
      );
      const dataVideo = await dataFetchVideo.json();

      const dataFetch = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?key=${key}&part=snippet,statistics&id=${dataVideo.items[0].snippet.channelId}`
      );
      const data = await dataFetch.json();

      console.log(dataVideo);
      const result = {
        title: dataVideo.items[0].snippet.title,
        icon: data.items[0].snippet.thumbnails.medium.url,
        channelTitle: data.items[0].snippet.title,
        subscribers: data.items[0].statistics.subscriberCount,
        likes: dataVideo.items[0].statistics.likeCount,
        viwes: dataVideo.items[0].statistics.viewCount,
        date: dataVideo.items[0].snippet.publishedAt,
        description: dataVideo.items[0].snippet.description,
      };
      setItem(result);
    }
    fetchDataVideo();
  }, [videoId]);

  return (
    <>
      <div className={styles.videoInfo}>
        <div>
          <h4>{item?.title}</h4>
          <div className={styles.interactive}>
            <div className={styles.channel}>
              <img
                className={styles.icon}
                style={{ width: "40px", height: "40px" }}
                src={item?.icon}
                alt=""
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>{item?.channelTitle}</span>
                <span className={styles.subscribers}>
                  {item?.subscribers && formatNumbers(item?.subscribers)} subscribers
                </span>
              </div>
              <button>Subscribe</button>
            </div>

            <div style={{display: 'flex', gap: '15px'}}>
              <div className={styles.feedback}>
                <div>
                  <img src={like} alt="" />
                  <span style={{ textAlign: "center" }}>
                    {item?.likes && formatNumbers(item?.likes)}
                  </span>
                </div>
                <img src={like} style={{ rotate: "180deg" }} alt="" />
              </div>
              <div className={styles.share}><img src={share} alt="" /> share</div>
            </div>
          </div>
        </div>
        <span className={styles.content}>
          {console.log(item?.date)}
          <span style={{fontWeight: '700'}}>{item?.viwes && formatNumbers(item?.viwes)} viwes </span>
          <span style={{fontWeight: '700'}}>{item?.date && handlePublishedTime(item?.date)}  </span>
          {item?.description}
        </span>
      </div>
    </>
  );
};

export default VideoInfo;
