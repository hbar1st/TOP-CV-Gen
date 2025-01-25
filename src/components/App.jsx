import "../styles/App.css";
import NavButtons from "./NavButtons.jsx";
import Landing from "./Landing.jsx";
import ResumeHeader from "./ResumeHeader.jsx";
import HeaderData from "./HeaderData.jsx";
import Experience from "./Experience.jsx";
import { useState } from "react";

function App() {
  const [isHero, setHero] = useState(true); //you're either a Hero or you're a zero!
  const [wizardIndex, setWizardIndex] = useState(0);
  const [name, setName] = useState("Alias");
  const [email, setEmail] = useState("alias@fictional.com");
  const [phone, setPhone] = useState("555-555-5555");
  const [experience, setExperience] = useState([]);

  function moveForward() {
    setWizardIndex(wizardIndex + 1);
  }
  function moveBack() {
    setWizardIndex(wizardIndex - 1);
  }
  if (wizardIndex === 0) {
    return (
      <>
        <form onSubmit={moveForward} action="" method="post">
          <Landing isHero={isHero} onSelect={setHero} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  } else if (wizardIndex === 1) {
    let data = { name, email, phone };
    return (
      <>
        <section className="resume">
          <HeaderData
            data={data}
            isHero={isHero}
            setters={{ setName, setEmail, setPhone }}
          />
          <NavButtons moveBack={moveBack} moveForward={moveForward} />
          <ResumeHeader
            data={data}
            isHero={isHero}
            charType={isHero ? "Hero" : "Villain"}
          />
        </section>
      </>
    );
  } else if (wizardIndex === 2) {
    return (
      <>
        <Experience
          experience={experience}
          isHero={isHero}
          updateExperience={setExperience}
        />

        <NavButtons moveBack={moveBack} moveForward={moveForward} />
      </>
    );
  }
}

export default App;
