import "./Users.css";
import Friends from "./Friends";
import Img from "../public/vite.svg";
import Photo from "./assets/react.svg";

const informations = [
  { id: 1, img: Img, fullName: "John Smith" },
  { id: 2, img: Photo, fullName: "William J." },
  { id: 3, img: Img, fullName: "James Brown" },
  { id: 4, img: Photo, fullName: "Robert W." },
  { id: 5, img: Img, fullName: "Thomas A." },
  { id: 6, img: Photo, fullName: "Daniel Taylor" },
  { id: 7, img: Img, fullName: "Christopher J." },
  { id: 8, img: Img, fullName: "Matthew T." },
];

function toggleFriends() {
  const list = document.querySelector("#friends-list");
  list.style.display = list.style.display === "none" ? "block" : "none";
}

export default function Users() {
  const informationslist = informations.map((info) => {
    return (
      <Friends key={info.id} fullName={info.fullName}>
        <img src={info.img} alt={info.fullName} />
      </Friends>
    );
  });
  return (
    <div className="users-style">
      <div className="Title">
        <h1>Friends</h1>
        <div className="btn">
          <button onClick={toggleFriends}>+</button>
        </div>
      </div>
      <div id="friends-list">{informationslist}</div>
    </div>
  );
}
