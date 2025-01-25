import "./App.css";
import Landing from "./Landing.jsx";
import ResumeHeader from "./ResumeHeader.jsx";
import HeaderData from "./HeaderData.jsx";
import { useState } from "react";

function App() {
  const [isHero, setHero] = useState(true); //you're either a Hero or you're a zero!
  const [splashToggle, setSplashToggle] = useState(true);
  const [name, setName] = useState("Alias");
  const [email, setEmail] = useState("alias@fictional.com");
  const [phone, setPhone] = useState("555-555-5555");

  if (splashToggle) {
    return (
      <>
        <form
          onSubmit={() => {
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
    let data = { name, email, phone };
    return (
      <>
        <section className="resume">
          <HeaderData
            data={data}
            isHero={isHero}
            setters={{ setName, setEmail, setPhone }}
          />
          <ResumeHeader
            data={data}
            isHero={isHero}
            charType={isHero ? "Hero" : "Villain"}
          />
        </section>
        <div className="flex-expand">
          <button type="button" onClick={() => setSplashToggle(!splashToggle)}>
            Previous
          </button>
          <button type="button">Next</button>
        </div>
      </>
    );
  }
}

export default App;
