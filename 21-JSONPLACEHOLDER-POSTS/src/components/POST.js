import './Post.css';
function Post(props) {
  const { userId, id, title, body } = props;

  return (
    <div className="div">
      <span className="one">{id}</span>
      <h2 className="two">{title}</h2>
      <h3 className="three">{body}</h3>
      <h3 className="four">User id: {userId}</h3>
    </div>
  );
}

export default Post;
