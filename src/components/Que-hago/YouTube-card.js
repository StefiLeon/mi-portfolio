const YouTubeCard = ({ videoUrl, title, description }) => {
  return (
    <div className="card youtube-card">
      <div className="video-container">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default YouTubeCard;
