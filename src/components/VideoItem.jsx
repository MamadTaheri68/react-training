import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt="aaa"
        className="ui image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
