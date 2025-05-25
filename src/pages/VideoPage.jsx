import RecomendedVideosList from "../components/VideoPage/RecomendedVideosList";
import VideoPlayer from "../components/VideoPage/VideoPlayer";
import VideoInfo from "../components/VideoPage/VideoInfo";

const VideoPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "5px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <VideoPlayer />
          <VideoInfo />
        </div>
        <RecomendedVideosList />
      </div>
    </>
  );
};
export default VideoPage;
