const TikTokCard = ({ profilePic, username, videoUrl, description, views }) => {
  return (
    <div className="tiktok-card">
      <div className="video-container">
        <iframe
          src={videoUrl}
          title="TikTok Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-content">
        <p>{description}</p>
        <div className="engagement">
          <span>{views} views</span>
        </div>
      </div>
    </div>
  );
};

export default TikTokCard;
