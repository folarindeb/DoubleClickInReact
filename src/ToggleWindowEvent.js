import { useState } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false);

  const doWindowDisplay = () => {
    setWindowEvent((prevState) => !prevState);
  };
  const doubleClick = (event) => {
    if (event.detail === 2) {
      alert("Mouse Pressed");
    }
  };

  return (
    <div>
      <button onClick={doWindowDisplay} onDoubleClick={doubleClick}>
        Toggle Window Event
      </button>
      {windowEvent && <WindowEvent />}
    </div>
  );
}
