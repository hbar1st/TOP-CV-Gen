import "../styles/App.css";
import NavButtons from "./NavButtons.jsx";
import Landing from "./Landing.jsx";
import ResumeHeader from "./ResumeHeader.jsx";
import HeaderData from "./HeaderData.jsx";
import Experience from "./Experience.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import { useState, useRef } from "react";

function App() {
  const today = (() => {
    const d = new Date();
    return `${d.getFullYear()}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${d.getDate()}`;
  })();
  const heroPlaceHolder = {
    default: true,
    key: 0,
    title: "Reporter",
    desc: "Corruption, crime and special investigations.",
    employer: "Daily Planet",
    location: "Metropolis",
    startDate: "1950-05-05",
    endDate: today,
    responsibilities: [
      "Pulitzer Prize for writing: 'Under a Yellow Sun'",
      "Easily able to deliver articles in very tight deadlines",
      "Writing described as 'punchy' and 'snappy' by Daily Planet Editor.",
    ],
  };
  const villainPlaceHolder = {
    default: true,
    key: 0,
    title: "CEO",
    desc: "Founder and CEO",
    employer: "LexCorp",
    location: "Metropolis",
    startDate: "1986-02-01",
    endDate: today,
    responsibilities: [
      "Overseeing a vast, multinational conglomerate with diverse business interests including technology, energy, and telecommunications.",
      "maintains a carefully crafted public image as a successful businessman and philanthropist.",
      "Ruthlessly pursue power by any means.",
    ],
  };

  const [isHero, setHero] = useState(true); //you're either a Hero or you're a zero!
  const [wizardIndex, setWizardIndex] = useState(0);
  const [name, setName] = useState("Alias");
  const [email, setEmail] = useState("alias@fictional.com");
  const [phone, setPhone] = useState("555-555-5555");
  const [experienceList, setExperienceList] = useState([
    isHero ? heroPlaceHolder : villainPlaceHolder,
  ]);
  const experienceCount = useRef(1);

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
          <Landing
            isHero={isHero}
            onSelect={(bool) => {
              setHero(bool);
              console.log("experience list so far: ", experienceList);
              if (
                experienceList.length > 0 &&
                experienceList[0].default &&
                bool
              ) {
                const newArr = [...experienceList];
                newArr[0] = heroPlaceHolder;
                setExperienceList(newArr);
              } else if (
                experienceList.length > 0 &&
                experienceList[0].default &&
                !bool
              ) {
                const newArr = [...experienceList];
                newArr[0] = villainPlaceHolder;
                setExperienceList(newArr);
              }
            }}
          />
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
        <NavButtons moveBack={moveBack} moveForward={moveForward} />

        <Experience
          experienceList={experienceList}
          isHero={isHero}
          updateExperienceList={setExperienceList}
          experienceCount={experienceCount}
        />

        <NavButtons moveBack={moveBack} moveForward={moveForward} />
        <ExperienceSection
          experienceList={experienceList}
          isHero={isHero}
          charType={isHero ? "Hero" : "Villain"}
        />
      </>
    );
  }
}

export default App;
