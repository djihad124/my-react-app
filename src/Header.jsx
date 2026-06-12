import { useState } from "react";
import Photo from "./assets/react.svg";
import "./Header.css";
import Form from "./Form";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  return (
    <header className="hea">
      <div className="logo-title">
        <img src={Photo} alt="React logo" />
        <h4>My First React.js Website</h4>
      </div>
      <div className="form-class">
        {isLoggedIn ? (
          <span className="welcome-text">Welcome, {name}! 👋</span>
        ) : (
          <Form setIsLoggedIn={setIsLoggedIn} setName={setName} />
        )}
      </div>
    </header>
  );
}
