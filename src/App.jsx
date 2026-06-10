import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Nav from "./Nav";
import Users from "./Users";

const texts = [
  {
    id: 1,
    postTitle: "Post 1",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, explicabo aut eaque architecto sit corporis at omnis recusandae obcaecati porro impedit fuga ipsam labore cumque praesentium tempora aperiam animi nobis!",
  },
  {
    id: 2,
    postTitle: "Post 2",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, explicabo aut eaque architecto sit corporis at omnis recusandae obcaecati porro impedit fuga ipsam labore cumque praesentium tempora aperiam animi nobis!",
  },
  {
    id: 3,
    postTitle: "Post 3",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, explicabo aut eaque architecto sit corporis at omnis recusandae obcaecati porro impedit fuga ipsam labore cumque praesentium tempora aperiam animi nobis!",
  },
];

function App() {
  const textslist = texts.map((info) => {
    return (
      <Post
        key={info.id}
        paragraph={info.paragraph}
        postTitle={info.postTitle}
      ></Post>
    );
  });
  return (
    <>
      <Header />
      <div className="app-container">
        <Users />
        <div>{textslist}</div>
        <Nav />
      </div>
    </>
  );
}
export default App;
