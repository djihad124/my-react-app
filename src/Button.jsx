import "./Button.css";

function message() {
  alert("I'm working on it");
}
export default function Button({ label, icon }) {
  return (
    <button className="button-style" onClick={message}>
      <div>
        <div>
          <i className={`ti ${icon}`}></i>
        </div>
        <div>
          <h2>{label}</h2>
        </div>
      </div>
    </button>
  );
}
