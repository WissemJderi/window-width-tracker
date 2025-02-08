import { useState } from "react";
import WindowTracker from "./WindowTracker";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <main className="container">
      <button
        onClick={() => {
          setShow((prevShow) => !prevShow);
        }}
      >
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </main>
  );
}
