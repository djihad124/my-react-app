import { useState } from "react";
import "./Form.css";

export default function Form({ setName, setIsLoggedIn }) {
  const [Input, setInput] = useState({ Name: "", Email: "" });
  function message() {
    alert("empty informations");
  }
  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        if (Input.Name.trim() && Input.Email.trim()) {
          setName(Input.Name);
          setIsLoggedIn(true);
        } else {
          message();
        }
      }}
    >
      <label htmlFor="">Name: </label>
      <input
        type="text"
        value={Input.Name}
        className="form-input"
        onChange={(event) => {
          setInput({ ...Input, Name: event.target.value });
        }}
      />
      <label style={{ marginLeft: "10px" }} htmlFor="">
        Email:{" "}
      </label>
      <input
        type="email"
        value={Input.Email}
        className="form-input"
        onChange={(event) => {
          setInput({ ...Input, Email: event.target.value });
        }}
      />
      <button type="submit" className="login-btn" onClick={() => {}}>
        Login
      </button>
    </form>
  );
}
