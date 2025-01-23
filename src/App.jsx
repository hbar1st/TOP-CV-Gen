import "./App.css";
import Landing from "./Landing.jsx";
import { useState } from "react";

function App() {
  // 1 is the hero, 0 is the villain (zero!)
  const [charChoice, setCharChoice] = useState("1");

  return (
    <>
      <form
        onSubmit={(e) => triggerNextPage(e, charChoice)}
        action=""
        method="post"
      >
        <Landing charType={charChoice} onSelect={setCharChoice} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

function triggerNextPage(e, charChoice) {
  e.preventDefault();
  console.log("triggerNextPage thinks user chose: ", charChoice);
}

export default App;
