import RecomendedVideosList from "../components/VideoPage/RecomendedVideosList"
import VideoPlayer from "../components/VideoPage/VideoPlayer"

const VideoPage = () => {
    return (
        <>
            <VideoPlayer>
                <RecomendedVideosList />
            </VideoPlayer>
        </>
    )
}
export default VideoPage