import "./Post.css";

export default function Post({ paragraph, postTitle }) {
  return (
    <div className="post-style">
      <h3>{postTitle}</h3>
      <p>{paragraph}</p>
    </div>
  );
}
