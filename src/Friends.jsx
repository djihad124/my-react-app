import "./Friends.css";

export default function Friends({ fullName, children }) {
  return (
    <div className="FriendCard">
      <div>{children}</div>
      <div>
        <h3>{fullName}</h3>
      </div>
    </div>
  );
}
