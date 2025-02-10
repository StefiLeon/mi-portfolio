const TweetCard = ({ profilePic, username, timestamp, content }) => {
  return (
    <div className="tweet-card">
      <div className="tweet-header">
        <img src={profilePic} alt="StefiLeon twitter" className="profile-pic" />
        <div className="user-info">
          <span className="username">{username}</span>
        </div>
      </div>
      <div className="tweet-content">
        <p>{content}</p>
      </div>
      <div className="tweet-info">
        <span className="timestamp">{timestamp}</span>
      </div>
    </div>
  );
};

export default TweetCard;
