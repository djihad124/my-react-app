import Button from "./Button";
import "./Nav.css";

const contents = [
  { id: 1, label: "Add Post", icon: "ti-plus" },
  { id: 2, label: "Edit Post", icon: "ti-edit" },
  { id: 3, label: "Del Post", icon: "ti-trash" },
];

export default function Nav() {
  const contentslist = contents.map((content) => {
    return (
      <Button
        key={content.id}
        label={content.label}
        icon={content.icon}
      ></Button>
    );
  });
  return (
    <div className="nav-style">
      <h4>Actives</h4>
      {contentslist}
    </div>
  );
}
