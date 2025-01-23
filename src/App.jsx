import "./App.css";
import Landing from "./Landing.jsx";
import { useState } from "react";

function App() {
  const [isHero, setHero] = useState(true); //you're either a Hero or you're a zero!
  const [splashToggle, setSplashToggle] = useState(true);

  if (splashToggle) {
    return (
      <>
        <form
          onSubmit={(e) => {
            setSplashToggle(false);
          }}
          action=""
          method="post"
        >
          <Landing isHero={isHero} onSelect={setHero} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  } else {
    return <>Trigger next page for the {isHero ? "Hero" : "Villain"}</>;
  }
}

export default App;
