import Photo from "./assets/react.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="hea">
      <div className="img-class">
        <img src={Photo} alt="React logo" />
      </div>
      <div>
        <h4>My First React.js Website</h4>
      </div>
    </header>
  );
}
